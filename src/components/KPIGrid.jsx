import React from 'react';
import { DollarSign, TrendingUp, Gauge, CheckCircle } from 'lucide-react';

const kpis = [
  {
    label: 'Projected Savings (5 yrs)',
    value: '₹120–₹180 Cr',
    desc: 'Reduced leakages, optimized procurement, cloud efficiencies',
    icon: DollarSign,
    color: 'text-emerald-600 bg-emerald-50',
  },
  {
    label: 'Faster Service Delivery',
    value: '60–70% quicker',
    desc: 'Digitized workflows, self-service, assisted channels',
    icon: Gauge,
    color: 'text-blue-600 bg-blue-50',
  },
  {
    label: 'Transparency & Trust',
    value: '90%+ traceability',
    desc: 'End-to-end audit trails and real-time dashboards',
    icon: CheckCircle,
    color: 'text-indigo-600 bg-indigo-50',
  },
  {
    label: 'Operational Efficiency',
    value: '3–5x throughput',
    desc: 'Microservices, autoscaling, event-driven design',
    icon: TrendingUp,
    color: 'text-orange-600 bg-orange-50',
  },
];

export default function KPIGrid() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {kpis.map(({ label, value, desc, icon: Icon, color }) => (
        <div key={label} className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-xs font-medium uppercase tracking-wide text-slate-500">{label}</p>
              <p className="mt-2 text-2xl font-semibold text-slate-900">{value}</p>
            </div>
            <div className={`flex h-10 w-10 items-center justify-center rounded-lg ${color}`}>
              <Icon size={18} />
            </div>
          </div>
          <p className="mt-3 text-sm text-slate-600">{desc}</p>
        </div>
      ))}
    </div>
  );
}
