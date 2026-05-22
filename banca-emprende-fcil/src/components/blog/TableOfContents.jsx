import { useState, useEffect } from 'react';
import { List } from 'lucide-react';

export default function TableOfContents({ content }) {
  const [activeId, setActiveId] = useState('');

  // Extract headings from HTML content
  const headings = [];
  const regex = /<h([23])[^>]*>(.*?)<\/h\1>/gi;
  let match;
  while ((match = regex.exec(content)) !== null) {
    const level = parseInt(match[1]);
    const text = match[2].replace(/<[^>]*>/g, '');
    const id = text.toLowerCase().replace(/[^a-z0-9\s]/g, '').replace(/\s+/g, '-').substring(0, 50);
    headings.push({ level, text, id });
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      { rootMargin: '-20% 0% -60% 0%' }
    );

    headings.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [content]);

  if (headings.length < 3) return null;

  return (
    <div className="bg-ghost-slate rounded-xl p-5 sticky top-24 mb-6">
      <div className="flex items-center gap-2 mb-4">
        <List className="w-4 h-4 text-amber" />
        <h3 className="font-bold text-navy text-sm">Tabla de contenidos</h3>
      </div>
      <nav className="space-y-1">
        {headings.map((heading, idx) => (
          <a
            key={idx}
            href={`#${heading.id}`}
            className={`block text-sm py-1 transition-all ${
              heading.level === 3 ? 'pl-4' : 'pl-0'
            } ${
              activeId === heading.id
                ? 'toc-item-active font-semibold text-amber'
                : 'text-gray-600 hover:text-navy border-l-2 border-transparent pl-2 hover:pl-3'
            }`}
            style={{ borderLeftColor: activeId === heading.id ? '#BA7517' : 'transparent' }}
          >
            {heading.text}
          </a>
        ))}
      </nav>
    </div>
  );
}