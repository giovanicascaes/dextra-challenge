import { useRef, useEffect } from "react";

export const useDidMount = (cb: (...args: unknown[]) => void): void => {
  const mountedRef = useRef(false);

  useEffect(() => {
    if (!mountedRef.current) {
      cb();
      mountedRef.current = true;
    }
  }, [cb]);
};
