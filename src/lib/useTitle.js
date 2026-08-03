import { useEffect } from 'react';

const DEFAULT_TITLE = 'Zorgtech — Оборудование, к которому хочется прикоснуться';

export function useTitle(title) {
  useEffect(() => {
    document.title = title ? `${title} — Zorgtech` : DEFAULT_TITLE;
    return () => {
      document.title = DEFAULT_TITLE;
    };
  }, [title]);
}
