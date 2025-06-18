import { useEffect, useState } from "react";

export function useWindowSize() {
  const [size, setSize] = useState([window.innerWidth, window.innerHeight]);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    const handleResize = () => {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        setSize([window.innerWidth, window.innerHeight]);
      }, 100); // Debounced
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return size;
}

export function useContainerDimensions(ref: React.RefObject<HTMLElement | null>) {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new ResizeObserver(entries => {
      for (let entry of entries) {
        if (entry.contentRect) {
          setDimensions({
            width: entry.contentRect.width,
            height: entry.contentRect.height
          });
        }
      }
    });

    observer.observe(element);
    return () => observer.disconnect();
  }, [ref]);

  return dimensions;
}

export function useMobile(MOBILE_BREAKPOINT = 768) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);

    const onChange = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    };

    mql.addEventListener("change", onChange);

    setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);

    return () => {
      mql.removeEventListener("change", onChange);
    };
  }, [MOBILE_BREAKPOINT]);

  return !!isMobile;
}

