import { Users, DollarSign, ShoppingCart, TrendingUp, User, Package, Clock, RotateCcw } from 'lucide-react';

const AdminDashboard = () => {
  const statsuser = [
    {
      id: 1,
      title: "Total Orders",
      value: "0",
      icon: <ShoppingCart className="w-7 h-7" />,
      color: "from-indigo-500 to-purple-600",
      trend: "+12%"
    },
    {
      id: 2,
      title: "Total Revenue",
      value: "0",
      icon: <DollarSign className="w-7 h-7" />,
      color: "from-green-500 to-emerald-600",
      trend: "+18%"
    },
    {
      id: 3,
      title: "Active Customers",
      value: "0",
      icon: <User className="w-7 h-7" />,
      color: "from-blue-500 to-cyan-600",
      trend: "+9%"
    },
    {
      id: 4,
      title: "Products Sold",
      value: "0",
      icon: <Package className="w-7 h-7" />,
      color: "from-orange-500 to-red-500",
      trend: "+15%"
    },
    {
      id: 5,
      title: "Pending Orders",
      value: "0",
      icon: <Clock className="w-7 h-7" />,
      color: "from-yellow-500 to-orange-500",
      trend: "-3%"
    },
    {
      id: 6,
      title: "Refund Requests",
      value: "0",
      icon: <RotateCcw className="w-7 h-7" />,
      color: "from-pink-500 to-rose-600",
      trend: "+2%"
    },
  ];


  return (
    <div className="min-h-screen  text-slate-50">
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {statsuser.map((item) => (
          <div
            key={item.id}
            className="group relative bg-white rounded-2xl p-6 shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-200 overflow-hidden"
          >
            <div
              className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${item.color} opacity-10 rounded-full -translate-y-10 translate-x-10`}
            />

            <div className="flex items-center justify-between">
              <div
                className={`p-3 rounded-xl bg-gradient-to-br ${item.color} text-white shadow-lg`}
              >
                {item.icon}
              </div>

              <span
                className={`text-sm font-semibold px-2 py-1 rounded-full ${item.trend.includes("+")
                  ? "bg-green-100 text-green-600"
                  : "bg-red-100 text-red-600"
                  }`}
              >
                {item.trend}
              </span>
            </div>

            <h3 className="mt-5 text-gray-500 text-sm font-medium tracking-wide">
              {item.title}
            </h3>

            <p className="text-3xl font-bold text-gray-900 mt-1">
              {item.value}
            </p>
            <div
              className={`absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r ${item.color} scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminDashboard;
