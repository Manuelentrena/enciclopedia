import { useRef, useState, useEffect } from "react";

export function useNearScreen({ distance = "100px" } = {}) {
  const [isNearScreen, setShow] = useState(false);
  const fromRef = useRef(null);

  useEffect(() => {
    let observer;

    const onScreen = (entries, observer) => {
      const el = entries[0];
      if (el.isIntersecting) {
        setShow(true);
        observer.disconnect();
      }
    };

    Promise.resolve(
      typeof IntersectionObserver !== "undefined"
        ? IntersectionObserver
        : import("intersection-observer")
    ).then(() => {
      observer = new IntersectionObserver(onScreen, {
        rootMargin: distance,
      });

      observer.observe(fromRef.current);
    });

    return () => observer && observer.disconnect();
  });

  return { isNearScreen, fromRef };
}
