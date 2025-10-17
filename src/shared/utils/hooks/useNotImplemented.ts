import { useCallback } from 'react';

export function useNotImplemented() {
  const notImplemented = useCallback(() => {
    alert('Not implemented');
  }, []);

  return { notImplemented };
}
