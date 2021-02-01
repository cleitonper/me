import { Callback } from "~types/Callback";

export default function debounce(
  callback: Callback,
  delay: number,
): Callback {
  let timer: ReturnType<typeof setTimeout>;

  return (...args: unknown[]) => {
    clearTimeout(timer);

    timer = setTimeout(() => {
      callback(...args);
    }, delay);
  };
}
