import { useEffect, useRef } from "react";

/**
 * Custom React hook to check if a component is currently mounted.
 * This can be useful to prevent setting state on an unmounted component,
 * which can lead to memory leaks.
 *
 * @example
 * ```tsx
 * const MyComponent = () => {
 *   const isMounted = useIsMounted();
 *
 *   useEffect(() => {
 *     fetchSomeData().then((data) => {
 *       if (isMounted) {
 *         setState(data);
 *       }
 *     });
 *   }, []);
 *
 *   // ...
 * };
 * ```
 *
 * @returns {boolean} - A function that returns true if the component is currently mounted, and false otherwise.
 */
const useIsMounted = (): boolean => {
  const mountedRef = useRef(false);

  useEffect(() => {
    mountedRef.current = true;
    return () => {
      mountedRef.current = false;
    };
  }, []);

  return mountedRef.current;
};

export default useIsMounted;
