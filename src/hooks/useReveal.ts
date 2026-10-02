import { useEffect, useRef, useState } from 'react';

/**
 * Reveal-on-scroll hook. Attaches an IntersectionObserver to a ref and
 * adds the `is-visible` class (see index.css `.reveal`) when the element
 * enters the viewport. Returns the ref to spread onto the target element.
 */
export function useReveal<T extends HTMLElement = HTMLDivElement>(
  options?: IntersectionObserverInit
) {
  const ref = useRef<T>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -10% 0px', ...options }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [options]);

  return { ref, visible };
}
