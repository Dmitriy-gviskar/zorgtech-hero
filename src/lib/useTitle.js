import { useEffect } from 'react';

const DEFAULT_TITLE = 'Zorgtech — Оборудование, к которому хочется прикоснуться';
const DEFAULT_DESC = 'Zorgtech — российский производитель интерактивного оборудования. Сенсорные киоски, столы и терминалы для бизнеса, государства и образования.';

export function useMeta(title, description) {
  useEffect(() => {
    document.title = title ? `${title} — Zorgtech` : DEFAULT_TITLE;
    if (description) {
      let meta = document.querySelector('meta[name="description"]');
      if (!meta) {
        meta = document.createElement('meta');
        meta.name = 'description';
        document.head.appendChild(meta);
      }
      meta.content = description;
    }
    return () => {
      document.title = DEFAULT_TITLE;
    };
  }, [title, description]);
}

// legacy alias
export { useMeta as useTitle };
