import { useRef, useState, useEffect } from 'react';

export function useNearScreen({ distance = '100px', keepWatch = false } = {}) {
  const [isNearScreen, setIsNearScreen] = useState(false);
  const fromRef = useRef(null);

  useEffect(() => {
    let observer;

    const onScreen = (entries, obser) => {
      const el = entries[0];
      if (el.isIntersecting) {
        setIsNearScreen(true);
        !keepWatch && obser.disconnect();
      } else {
        setIsNearScreen(false);
      }
    };

    Promise.resolve(
      typeof IntersectionObserver !== 'undefined'
        ? IntersectionObserver
        : import('intersection-observer'),
    ).then(() => {
      observer = new IntersectionObserver(onScreen, {
        rootMargin: distance,
      });

      fromRef.current && observer.observe(fromRef.current);
    });

    return () => observer && observer.disconnect();
  });

  return { isNearScreen, fromRef };
}
