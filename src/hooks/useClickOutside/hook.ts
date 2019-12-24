import { MutableRefObject, useEffect, useCallback } from "react";

export default function useClickOutside(
  ref: MutableRefObject<HTMLElement | null>,
  callback: () => void
): void {
  const handleClickOutside = useCallback((event: MouseEvent): void => {
    if (!ref || !ref.current || !event.target) return;
    if (!ref.current.contains(event.target as Node)) {
      callback();
    }
  }, [ref, callback]);

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => { document.removeEventListener('click', handleClickOutside); };
  }, [handleClickOutside]);
}
