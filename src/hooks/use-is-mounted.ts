import { useEffect, useState } from "react";

/**
 * Custom React hook to check if a component is currently mounted.
 * This can be useful to prevent setting state on an unmounted component,
 * which can lead to memory leaks.
 *
 * @returns {boolean} - Returns true if the component is currently mounted, and false otherwise.
 *
 * @example
 * ```tsx
 * const Component = () => {
 *   const isMounted = useIsMounted();
 *
 *   useEffect(() => {
 *     if (isMounted) {
 *       // Execute code only when the component is mounted
 *     }
 *   }, []);
 *
 *   // ...
 * };
 * ```
 */
const useIsMounted = (): boolean => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    return () => {
      setIsMounted(false);
    };
  }, []);

  return isMounted;
};

export default useIsMounted;
