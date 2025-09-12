import { useEffect, useMemo, useState } from "react";

type ViewportInfo = {
  heightPx: number;
  widthPx: number;
  supportsSmallVH: boolean;
  supportsDynamicVH: boolean;
};

function detectSupport(): { supportsSmallVH: boolean; supportsDynamicVH: boolean } {
  if (typeof window === "undefined") return { supportsDynamicVH: false, supportsSmallVH: false };
  try {
    const supportsSmallVH = CSS?.supports?.("height", "100svh") ?? false;
    const supportsDynamicVH = CSS?.supports?.("height", "100dvh") ?? false;

    return { supportsDynamicVH, supportsSmallVH };
  } catch {
    return { supportsDynamicVH: false, supportsSmallVH: false };
  }
}

export function useViewport(): ViewportInfo {
  const [{ supportsDynamicVH, supportsSmallVH }] = useState(detectSupport);
  const [size, setSize] = useState<{ h: number; w: number }>(() => ({
    h: typeof window !== "undefined" ? window.innerHeight : 0,
    w: typeof window !== "undefined" ? window.innerWidth : 0,
  }));

  useEffect(() => {
    if (typeof window === "undefined") return;
    const update = (): void => setSize({ h: window.innerHeight, w: window.innerWidth });

    update();
    window.addEventListener("resize", update);
    window.addEventListener("orientationchange", update);
    const vv = window.visualViewport;

    vv?.addEventListener("resize", update);

    return (): void => {
      window.removeEventListener("resize", update);
      window.removeEventListener("orientationchange", update);
      vv?.removeEventListener("resize", update);
    };
  }, []);

  return useMemo(
    () => ({
      heightPx: size.h,
      supportsDynamicVH,
      supportsSmallVH,
      widthPx: size.w,
    }),
    [size.h, size.w, supportsSmallVH, supportsDynamicVH],
  );
}

export default useViewport;
