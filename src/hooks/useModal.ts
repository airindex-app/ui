import { useCallback, useEffect, useRef, useState } from "react";

import type { IUseModal } from "../types/hooks";

export default function useModal({
  animationDuration = 200,
  onClose,
  preventBodyScroll = true,
}: {
  animationDuration?: number;
  onClose?: () => void;
  preventBodyScroll?: boolean;
} = {}): IUseModal {
  const [isOpen, setIsOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [viewportHeight, setViewportHeight] = useState(0);

  const modalRef = useRef<HTMLDivElement>(null);

  // Handle iOS dynamic toolbar viewport issues
  const updateViewportHeight = useCallback((): void => {
    // Use Visual Viewport API for precise visible area (modern browsers)
    // Falls back to window.innerHeight for compatibility
    const height = window.visualViewport?.height || window.innerHeight;

    setViewportHeight(height);
  }, []);

  // Modal functions
  function handleOpen(): void {
    setIsOpen(true);
    setIsMounted(true);
  }

  const handleClose = useCallback((): void => {
    setIsOpen(false);
    setTimeout(() => {
      setIsMounted(false);
      onClose?.();
    }, animationDuration);
  }, [onClose, animationDuration]);

  function handleClick(): void {
    if (isOpen || isMounted) {
      handleClose();
    } else {
      handleOpen();
    }
  }

  // Listen for viewport changes (iOS toolbar show/hide)
  useEffect(() => {
    if (!isMounted) return;

    updateViewportHeight();

    const handleViewportChange = (): void => {
      // Use requestAnimationFrame for smooth updates without setTimeout delay
      requestAnimationFrame(updateViewportHeight);
    };

    // Primary: Visual Viewport API (modern browsers) - tracks actual visible area
    if (window.visualViewport) {
      window.visualViewport.addEventListener("resize", handleViewportChange);
    } else {
      // Fallback: Monitor scroll events for mobile toolbar changes (older browsers)
      window.addEventListener("scroll", handleViewportChange, { passive: true });
    }

    // Standard viewport change events
    window.addEventListener("resize", handleViewportChange);
    window.addEventListener("orientationchange", handleViewportChange);

    return (): void => {
      if (window.visualViewport) {
        window.visualViewport.removeEventListener("resize", handleViewportChange);
      } else {
        window.removeEventListener("scroll", handleViewportChange);
      }
      window.removeEventListener("resize", handleViewportChange);
      window.removeEventListener("orientationchange", handleViewportChange);
    };
  }, [isMounted, updateViewportHeight]);

  // Clean scroll lock
  useEffect(() => {
    if (!preventBodyScroll || !isMounted) return;

    const originalOverflow = document.body.style.overflow;
    const originalPaddingRight = document.body.style.paddingRight;
    const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;

    document.body.style.overflow = "hidden";
    if (scrollBarWidth > 0) {
      document.body.style.paddingRight = `${scrollBarWidth}px`;
    }

    // iOS momentum scrolling prevention
    const preventScroll = (e: TouchEvent): void => {
      const target = e.target as Element;

      if (modalRef?.current && modalRef.current.contains(target)) {
        return;
      }

      e.preventDefault();
    };

    const isTouch = "ontouchstart" in window;

    if (isTouch) {
      document.addEventListener("touchmove", preventScroll, { passive: false });
    }

    return (): void => {
      document.body.style.overflow = originalOverflow;
      document.body.style.paddingRight = originalPaddingRight;
      if (isTouch) {
        document.removeEventListener("touchmove", preventScroll);
      }
    };
  }, [isMounted, preventBodyScroll]);

  // Keyboard handling
  useEffect(() => {
    if (!isMounted) return;

    const handleKeyDown = (e: KeyboardEvent): void => {
      if (e.key === "Escape") {
        e.preventDefault();
        handleClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return (): void => document.removeEventListener("keydown", handleKeyDown);
  }, [isMounted, handleClose]);

  return {
    handleClick,
    handleClose,
    handleOpen,
    isMounted,
    isOpen,
    modalRef,
    viewportHeight,
  };
}
