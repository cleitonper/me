import { useRef, useEffect } from "react";

export default function usePrevious(value: unknown): unknown {
  const ref = useRef<unknown>();

  useEffect(() => {
    ref.current = value;
  });

  return ref.current;
}
