import { RefObject, useState, useEffect } from "react";

import { Position } from './types';
import { throttle } from "~util/throttle";

const getPosition = (element?: HTMLElement): Position => {
  const rect = element && element.getBoundingClientRect();

  const position = rect
    ? { left: Math.abs(rect.left), top: Math.abs(rect.top) }
    : { left: window.pageXOffset, top: window.pageYOffset };

  return [position.left, position.top];
};

/**
 * Retorna a posição de `element` dentro da página.
 * Caso o parâmetro `element` não seja inserido, esta função
 * retornará o deslocamento atual da página.
 *
 * @param element O elemento *HTML* o qual se deseja obter a posição
 * @param delay Intervalo, em *ms*, entre a geração de novos vaores
 * @return A posição de `element` ou o deslocamento atual da página
 */
export default function usePosition(element?: RefObject<HTMLElement | null>, delay = 200): Position {
  const [position, setPosition] = useState<Position>([0, 0]);

  useEffect(() => {
    const handleScroll = throttle((): void => {
      const currentPosition: Position = !element
        ? getPosition()
        : element.current
          ? getPosition(element.current)
          : [0, 0];

      setPosition(currentPosition);
    }, delay);

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [element, delay]);

  return position;
}
