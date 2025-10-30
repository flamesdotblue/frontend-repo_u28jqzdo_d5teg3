import React from 'react';

export default function Section({ id, title, subtitle, children, icon: Icon }) {
  return (
    <section id={id} className="scroll-mt-24">
      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="mb-4 flex items-start gap-3">
          {Icon ? (
            <div className="mt-1 flex h-8 w-8 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
              <Icon size={18} />
            </div>
          ) : null}
          <div>
            <h2 className="text-xl font-semibold text-slate-900">{title}</h2>
            {subtitle ? (
              <p className="mt-1 text-sm text-slate-500">{subtitle}</p>
            ) : null}
          </div>
        </div>
        <div className="prose prose-slate max-w-none">
          {children}
        </div>
      </div>
    </section>
  );
}
