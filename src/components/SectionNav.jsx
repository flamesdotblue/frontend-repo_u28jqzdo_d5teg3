import React from 'react';
import { Book, Layers, Shield, ClipboardList } from 'lucide-react';

const items = [
  { id: 'part-i', label: 'Part I: Strategic Framework', icon: Book },
  { id: 'part-ii', label: 'Part II: Technical Solution', icon: Layers },
  { id: 'part-iii', label: 'Part III: Execution & Governance', icon: ClipboardList },
  { id: 'part-iv', label: 'Part IV: Financial & Commercial', icon: Book },
  { id: 'part-v', label: 'Part V: Compliance & Security', icon: Shield },
  { id: 'part-vi', label: 'Part VI: Appendices', icon: Book },
  { id: 'part-vii', label: 'Part VII: Sustainability', icon: Layers },
  { id: 'part-viii', label: 'Part VIII: Approval Request', icon: ClipboardList },
  { id: 'part-ix', label: 'Part IX: Conclusion & Vision', icon: Book },
  { id: 'part-x', label: 'Part X: Next Steps', icon: Layers },
  { id: 'part-xi', label: 'Part XI: Future Vision', icon: Book },
];

export default function SectionNav() {
  const handleClick = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <nav className="sticky top-20 hidden h-[calc(100vh-6rem)] w-80 shrink-0 overflow-auto rounded-xl border border-slate-200 bg-white p-3 lg:block">
      <ul className="space-y-1">
        {items.map(({ id, label, icon: Icon }) => (
          <li key={id}>
            <a
              href={`#${id}`}
              onClick={(e) => handleClick(e, id)}
              className="flex items-center gap-2 rounded-md px-2 py-2 text-sm text-slate-700 transition hover:bg-slate-100"
            >
              <Icon size={16} className="text-slate-500" />
              <span>{label}</span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
