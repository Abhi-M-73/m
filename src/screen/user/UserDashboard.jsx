import React from 'react';
import { TrendingUp, DollarSign, ShoppingCart, Users} from 'lucide-react';
import useFetchProfile from '../../hooks/usefetchProfile';

const UserDashboard = () => {
  const { user, isLoading, isError } = useFetchProfile();

  const stats = [
    { title: 'Total Users', value: '12,458', icon: Users, color: 'from-blue-500 to-cyan-400' },
    { title: 'Total Revenue', value: '$45,231', icon: DollarSign, color: 'from-emerald-500 to-teal-400' },
    { title: 'Total Orders', value: '1,893', icon: ShoppingCart, color: 'from-purple-500 to-pink-500' },
    { title: 'Growth Rate', value: '32%', icon: TrendingUp, color: 'from-orange-500 to-rose-400' },

    // New Ecommerce Cards
    { title: 'Pending Orders', value: '128', icon: ShoppingCart, color: 'from-yellow-500 to-orange-400' },
    { title: 'Completed Orders', value: '1,542', icon: ShoppingCart, color: 'from-green-500 to-emerald-400' },
    { title: 'New Customers', value: '342', icon: Users, color: 'from-indigo-500 to-sky-400' },
    { title: 'Monthly Sales', value: '$9,845', icon: DollarSign, color: 'from-fuchsia-500 to-pink-400' },
  ];


  return (
    <div className="min-h-screen ">
      <div className="max-w-7xl mx-auto space-y-6">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 mb-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;

            return (
              <div
                key={index}
                className="group relative rounded-2xl bg-white border border-gray-100 shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                {/* Soft Gradient Accent */}
                <div
                  className={`absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br ${stat.color} opacity-15 rounded-full`}
                />

                {/* Card Content */}
                <div className="relative p-5 flex flex-col gap-4">
                  <div className="flex items-center justify-between">
                    <div
                      className={`p-3 rounded-xl bg-gradient-to-br ${stat.color} text-white shadow-lg`}
                    >
                      <Icon className="h-6 w-6" />
                    </div>

                    <span className="text-xs font-semibold px-2 py-1 rounded-full bg-green-100 text-green-600">
                      +12%
                    </span>
                  </div>

                  <div>
                    <p className="text-sm font-medium text-gray-500">
                      {stat.title}
                    </p>
                    <p className="mt-1 text-2xl font-bold text-gray-900">
                      {stat.value}
                    </p>
                  </div>

                  <div className="flex items-center justify-between text-xs text-gray-400">
                    <span>Updated today</span>
                    <span className="text-blue-500 group-hover:underline cursor-pointer">
                      View details →
                    </span>
                  </div>
                </div>

                {/* Bottom Hover Accent */}
                <div
                  className={`absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r ${stat.color} scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300`}
                />
              </div>
            );
          })}
        </div>


        <div className="mt-10 bg-white p-6 rounded-xl shadow-lg border border-gray-200 backdrop-blur-lg">
          <h2 className="text-xl font-semibold mb-4">Profile Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="border border-gray-300 flex items-center justify-between p-4 rounded-lg text-gray-100">
              <p className="text-sm text-gray-600">Username</p>
              <h3 className="text-lg font-medium text-[var(--btnColor)]">{user?.name}</h3>
            </div>
            <div className="border border-gray-300 flex items-center justify-between p-4 rounded-lg text-gray-100">
              <p className="text-sm text-gray-600">Email</p>
              <h3 className="text-lg font-medium text-[var(--btnColor)]">{user?.email}</h3>
            </div>

            <div className="border border-gray-300 flex items-center justify-between p-4 rounded-lg text-gray-100">
              <p className="text-sm text-gray-600">Phone</p>
              <h3 className="text-lg font-medium text-[var(--btnColor)]">{user?.phone}</h3>
            </div>

            <div className="border border-gray-300 flex items-center justify-between p-4 rounded-lg text-gray-100">
              <p className="text-sm text-gray-600">Role</p>
              <h3 className="text-lg font-medium text-[var(--btnColor)] capitalize">{user?.role}</h3>
            </div>

            <div className="border border-gray-300 flex items-center justify-between p-4 rounded-lg text-gray-100">
              <p className="text-sm text-gray-600">Created At</p>
              <h3 className="text-lg font-medium text-[var(--btnColor)]">
                {new Date(user?.createdAt).toLocaleDateString()}
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;