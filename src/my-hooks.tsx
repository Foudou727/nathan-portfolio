import { RefObject, useEffect, useLayoutEffect, useRef, useState } from "react";

export function useWindowSize() {
  const [size, setSize] = useState([window.innerWidth, window.innerHeight]);
  const timeout = useRef(0)
  useLayoutEffect(() => {
    function updateSize() {
      clearTimeout(timeout.current)
      timeout.current = window.setTimeout(() => setSize([window.innerWidth, window.innerHeight]), 500)
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);
  return size;
}

export const useContainerDimensions = (myRef: RefObject<HTMLElement | null>) => {
  const [dimensions, setDimensions] = useState({ 
    width: myRef?.current?.offsetWidth || 0, 
    height: myRef?.current?.offsetHeight || 0 
  })

  const timeout = useRef(0)

  useEffect(() => {
    const getDimensions = () => {
    return myRef?.current ?
    {
      width: myRef.current.offsetWidth,
      height: myRef.current.offsetHeight
    } :
    {
      width: 0,
      height: 0
    }
  }

    const handleResize = () => {
      clearTimeout(timeout.current)
      timeout.current = window.setTimeout(() => setDimensions(getDimensions()), 500)
      
    }

    window.addEventListener("resize", handleResize)

    if (myRef.current) setDimensions(getDimensions())

    return () => {
      clearTimeout(timeout.current)
      window.removeEventListener("resize", handleResize)
    }
  }, [myRef])

  return dimensions;
};

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

