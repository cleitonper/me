import { Callback } from "~types/Callback";

export default function debounce(
  callback: Callback,
  delay: number,
): Callback {
  let timer: number;

  return (...args: unknown[]) => {
    clearTimeout(timer);

    timer = setTimeout(() => {
      callback(...args);
    }, delay);
  };
}
