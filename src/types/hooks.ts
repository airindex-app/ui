/**
 * Hook types for the AirIndex UI library
 *
 * Note: Simple return types like boolean, void, or T are used directly
 * in hooks rather than creating unnecessary type aliases.
 */

/**
 * Theme mode options - system follows OS preference, dark/light are explicit modes
 *
 * @example
 * ```tsx
 * const { theme, setTheme } = useTheme();
 * setTheme("dark"); // Force dark mode
 * setTheme("system"); // Follow OS preference
 * ```
 */
export type TThemeMode = "system" | "dark" | "light";

/**
 * Responsive breakpoint names with undefined for initial/unknown state
 *
 * @example
 * ```tsx
 * const { breakpoint, isPhone } = useBreakpoints();
 * if (breakpoint === "phone") {
 *   // Mobile-specific logic
 * }
 * ```
 */
export type TBreakpoint = "phone" | "tabletX" | "laptopX" | "desktopX" | "wide" | undefined;

/**
 * Responsive breakpoint detection with boolean helpers for each screen size
 *
 * @example
 * ```tsx
 * const { isPhone, isDesktop, breakpoint } = useBreakpoints();
 *
 * return (
 *   <div>
 *     {isPhone ? <MobileNav /> : <DesktopNav />}
 *     <p>Current: {breakpoint}</p>
 *   </div>
 * );
 * ```
 */
export interface IUseBreakpoints {
  /** Current active breakpoint name */
  breakpoint: TBreakpoint;
  /** Whether currently on desktop (desktopX) breakpoint */
  isDesktop: boolean;
  /** Whether currently on laptop (laptopX) breakpoint */
  isLaptop: boolean;
  /** Whether currently on phone breakpoint */
  isPhone: boolean;
  /** Whether currently on tablet (tabletX) breakpoint */
  isTablet: boolean;
  /** Whether currently on wide breakpoint */
  isWide: boolean;
}

/**
 * Theme management with dark mode detection and system preference support
 *
 * @example
 * ```tsx
 * const { isDarkTheme, setTheme, theme } = useTheme();
 *
 * return (
 *   <button onClick={() => setTheme(isDarkTheme ? "light" : "dark")}>
 *     {isDarkTheme ? "🌙" : "☀️"} Toggle theme
 *   </button>
 * );
 * ```
 */
export interface IUseTheme {
  /** Whether dark theme is currently active (undefined during SSR) */
  isDarkTheme: boolean | undefined;
  /** Function to change the theme mode */
  setTheme: (theme: TThemeMode) => void;
  /** Current theme mode setting */
  theme: TThemeMode;
}

/**
 * Browser window dimensions with automatic updates on resize
 *
 * @example
 * ```tsx
 * const { width, height } = useWindowDimensions();
 *
 * return (
 *   <div>
 *     Viewport: {width} × {height}px
 *     {width < 768 && <MobileWarning />}
 *   </div>
 * );
 * ```
 */
export interface IUseWindowDimensions {
  /** Window inner height in pixels */
  height: number;
  /** Window inner width in pixels */
  width: number;
}

/**
 * Floating UI positioning with refs and state management for dropdowns/popovers
 *
 * @example
 * ```tsx
 * const { triggerRef, contentRef, isOpen, handleClick } = useFloatingUI();
 *
 * return (
 *   <>
 *     <button ref={triggerRef} onClick={handleClick}>
 *       Toggle
 *     </button>
 *     {isMounted && (
 *       <div ref={contentRef}>Floating content</div>
 *     )}
 *   </>
 * );
 * ```
 */
export interface IUseFloatingUI {
  /** Ref for the floating content element */
  contentRef: { current: null | HTMLDivElement };
  /** Toggle function for open/close state */
  handleClick: () => void;
  /** Function to close the floating element */
  handleClose: () => void;
  /** Whether the floating element is mounted in DOM */
  isMounted: boolean;
  /** Whether the floating element is visible */
  isOpen: boolean;
  /** Ref for the trigger element */
  triggerRef: { current: null | HTMLDivElement };
}

/**
 * Local storage state management with automatic persistence and sync across tabs
 *
 * @example
 * ```tsx
 * const [count, setCount] = useLocalStorage<number>("counter", 0);
 *
 * return (
 *   <button onClick={() => setCount(count + 1)}>
 *     Count: {count}
 *   </button>
 * );
 * ```
 */
export type TUseLocalStorage<T> = [T, (value: T) => void];

/**
 * Clean modal state management with viewport handling for iOS issues
 * Similar to useFloatingUI but for full-screen overlays
 *
 * @param options - Configuration options for the modal
 * @param options.onClose - Callback fired when modal closes
 * @param options.preventBodyScroll - Whether to prevent body scrolling (default: true)
 * @param options.animationDuration - Animation duration in milliseconds (default: 200)
 *
 * @example
 * ```tsx
 * const modal = useModal({
 *   onClose: () => console.log('Modal closed'),
 *   preventBodyScroll: true
 * });
 *
 * return (
 *   <>
 *     <button onClick={modal.handleClick}>Toggle Modal</button>
 *     {modal.isMounted && (
 *       <ModalOverlay
 *         css={{
 *           height: '100dvh' // Dynamic viewport height with fallback
 *         }}
 *       >
 *         <ModalContent ref={modal.modalRef}>
 *           <h2>Modal Title</h2>
 *           <button onClick={modal.handleClose}>Close</button>
 *         </ModalContent>
 *       </ModalOverlay>
 *     )}
 *   </>
 * );
 * ```
 */
export interface IUseModal {
  /** Whether the modal is currently open and visible */
  isOpen: boolean;
  /** Whether the modal is mounted in the DOM */
  isMounted: boolean;
  /** Ref to attach to the modal content element for scroll lock */
  modalRef: { current: HTMLDivElement | null };
  /** Function to open the modal */
  handleOpen: () => void;
  /** Function to close the modal */
  handleClose: () => void;
  /** Function to toggle modal open/closed state */
  handleClick: () => void;
}
