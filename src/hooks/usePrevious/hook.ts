import { useRef, useEffect } from "react";

export default (value: unknown): unknown => {
  const ref = useRef<unknown>();

  useEffect(() => {
    ref.current = value;
  });

  return ref.current;
};
