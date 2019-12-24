import { Callback } from "~types/Callback";

export default function throttle(
  callback: Callback,
  delay: number,
): Callback {
  let wait = false;

  return (...args: unknown[]): void => {
    if(!wait) {
      callback(...args);
      wait = true;

      setTimeout(() => {
        wait = false;
      }, delay);
    }
  };
}
