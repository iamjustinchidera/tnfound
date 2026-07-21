import { useEffect } from 'react';

// Locks background page scroll while an overlay/modal is open, so the page
// behind it doesn't scroll along with the content you're viewing.
export function useBodyScrollLock(locked: boolean) {
  useEffect(() => {
    if (!locked) return;
    const original = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = original;
    };
  }, [locked]);
}
