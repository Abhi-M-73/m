import { Users, DollarSign, ShoppingCart, TrendingUp } from 'lucide-react';

const AdminDashboard = () => {
  const stats = [
    { title: 'Total Users', value: '12,458', icon: Users, color: 'from-blue-500 via-sky-400 to-cyan-400' },
    { title: 'Revenue', value: '$45,231', icon: DollarSign, color: 'from-emerald-500 via-lime-400 to-teal-400' },
    { title: 'Orders', value: '1,893', icon: ShoppingCart, color: 'from-purple-500 via-fuchsia-500 to-pink-500' },
    { title: 'Growth', value: '32%', icon: TrendingUp, color: 'from-orange-500 via-amber-400 to-rose-400' },
  ];


  return (
    <div className="min-h-screen  text-slate-50">
      {/* Top Header */}
      <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold tracking-tight">
            Admin <span className="text-[var(--btnColor)]">Dashboard</span>
          </h1>
          <p className="mt-1 text-sm text-slate-300">
            Overview of today’s performance and key metrics.
          </p>
        </div>
        <div className="flex gap-3">
          <button className="rounded-xl border border-slate-700 bg-slate-900/60 px-4 py-2 text-sm font-medium text-slate-200 hover:bg-slate-800 transition">
            This Week
          </button>
          <button className="rounded-xl bg-gradient-to-r from-sky-500 to-indigo-500 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-sky-500/30 hover:brightness-110 transition">
            Download Report
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 mb-8">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div
              key={index}
              className="relative overflow-hidden rounded-2xl bg-slate-900/80 border border-slate-800 shadow-[0_18px_45px_rgba(15,23,42,0.8)] p-[1px] group"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-60 blur-xl group-hover:opacity-90 transition-opacity`}
              />
              <div className="relative h-full w-full rounded-2xl bg-slate-950/90 px-5 py-4 flex flex-col gap-3">
                <div className="pointer-events-none absolute -right-7 -top-7 h-16 w-16 rotate-45 bg-gradient-to-br from-white/10 via-green-400/60 to-transparent" />
                <div className="pointer-events-none absolute -left-7 -bottom-7 h-16 w-16 -rotate-45 bg-gradient-to-tr from-white/10 via-yellow-400/60 to-transparent" />

                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="rounded-2xl bg-gray-500/30 p-3 shadow-inner shadow-black/40">
                      <Icon className="h-6 w-6 text-[var(--btnColor)]" />
                    </div>
                    <div>
                      <p className="text-xs font-medium uppercase tracking-wide text-slate-400">
                        {stat.title}
                      </p>
                      <p className="mt-1 text-2xl font-bold text-slate-50">
                        {stat.value}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-1 flex items-center justify-between text-[11px] text-slate-400">
                  <span>Compared to last month</span>
                  <span className="text-sky-300 group-hover:text-sky-200 transition">
                    View details →
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AdminDashboard;
