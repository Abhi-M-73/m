import React, { use, useEffect } from 'react';
import { TrendingUp, DollarSign, CreditCard, Wallet, PiggyBank, ArrowUpRight, ArrowDownRight, Calendar, Award, Target, Activity, User, Copy } from 'lucide-react';
import useFetchProfile from '../../hooks/usefetchProfile';
import { backendConfig} from '../../utils/mainContent';
import toast from 'react-hot-toast';

const UserDashboard = () => {
  const data = useFetchProfile();

  useEffect(() => {
    useFetchProfile();
  }, [data]);
  
  const incomeData = [
    {
      id: 2,
      title: "Total Wallet Balance",
      value: `$${data?.directReferralAmount?.toFixed(2)}`,
      icon: <Wallet className="w-6 h-6" />,
      color: "green",
      period: "This Month"
    },
    {
      id: 1,
      title: "Total Referrals Income",
      value: `$${data?.directReferralAmount?.toFixed(2)}`,
      icon: <DollarSign className="w-6 h-6" />,
      color: "blue",
      period: "This Month"
    },
    {
      id: 3,
      title: "Total ROI Income",
      value: `$${data?.totalEarnings?.toFixed(2)}`,
      icon: <PiggyBank className="w-6 h-6" />,
      color: "purple",
      period: "This Month"
    },
    {
      id: 4,
      title: "Total Level Income",
      value: `$${data?.levelIncome?.toFixed(2)}`,
      icon: <TrendingUp className="w-6 h-6" />,
      color: "orange",
      period: "Portfolio Value"
    },
    {
      id: 5,
      title: "Total Investment",
      value: `$${data?.totalInvestment?.toFixed(2)}`,
      icon: <ArrowUpRight className="w-6 h-6" />,
      color: "green",
      period: "This Month"
    },
    {
      id: 6,
      title: "Total Withdrawal",
      value: `$${data?.totalPayouts?.toFixed(2)}`,
      icon: <CreditCard className="w-6 h-6" />,
      color: "red",
      period: "This Month"
    },
    {
      id: 1,
      title: "Total Users",
      value: "125",
      icon: <User className="w-6 h-6" />,
      color: "orange",
      period: "This Month"
    },
    {
      id: 1,
      title: "Total Direct Users",
      value: `${data?.referredUsers?.length}`,
      icon: <User className="w-6 h-6" />,
      color: "yellow",
      period: "This Month"
    },
  ];



  const getColorClasses = (color) => {
    const colors = {
      blue: {
        bg: "from-blue-500 to-blue-600",
        light: "bg-blue-50",
        text: "text-blue-600",
        border: "border-blue-200"
      },
      green: {
        bg: "from-green-500 to-green-600",
        light: "bg-green-50",
        text: "text-green-600",
        border: "border-green-200"
      },
      purple: {
        bg: "from-purple-500 to-purple-600",
        light: "bg-purple-50",
        text: "text-purple-600",
        border: "border-purple-200"
      },
      orange: {
        bg: "from-orange-500 to-orange-600",
        light: "bg-orange-50",
        text: "text-orange-600",
        border: "border-orange-200"
      },
      yellow: {
        bg: "from-yellow-500 to-yellow-600",
        light: "bg-yellow-50",
        text: "text-yellow-600",
        border: "border-yellow-200"
      },
      red: {
        bg: "from-red-500 to-red-600",
        light: "bg-red-50",
        text: "text-red-600",
        border: "border-red-200"
      },
      pink: {
        bg: "from-pink-500 to-pink-600",
        light: "bg-pink-50",
        text: "text-pink-600",
        border: "border-pink-200"
      },
      indigo: {
        bg: "from-indigo-500 to-indigo-600",
        light: "bg-indigo-50",
        text: "text-indigo-600",
        border: "border-indigo-200"
      },
      gray: {
        bg: "from-gray-500 to-gray-600",
        light: "bg-gray-50",
        text: "text-gray-600",
        border: "border-gray-200"
      }
    };
    return colors[color];
  };


  const copyReferralLink = () => {
    const link = `${window.location.origin}/register?ref=${data?.referralCode}`;
    navigator.clipboard.writeText(link);
    toast.success("Referral link copied to clipboard.");
  }


  return (
    <div className="min-h-screen ">
      <div className="max-w-7xl mx-auto space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {incomeData.map((item) => {
            const colors = getColorClasses(item.color);
            return (
              <div
                key={item.id + item.title}
                className="group relative bg-white/30 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden hover:-translate-y-2"
              >
                <div className={`absolute z--2 inset-0 bg-gradient-to-br ${colors.bg} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                <div className="relative p-6">
                  <div className={`${colors.light} ${colors.text} w-14 h-14 rounded-xl flex items-center justify-center mb-4 group-hover:bg-white/20 group-hover:text-white transition-all duration-300`}>
                    {item.icon}
                  </div>
                  <h3 className="text-gray-200 text-sm font-medium mb-2 group-hover:text-white/90 transition-colors duration-300">
                    {item.title}
                  </h3>

                  <div className="flex items-center justify-between">
                    <div className="flex items-baseline gap-2">
                      <p className="text-3xl font-bold text-gray-100 group-hover:text-white transition-colors duration-300">
                        {item.value}
                      </p>
                    </div>
                    <span className="text-xs text-gray-200 group-hover:text-white/70 transition-colors duration-300">
                      {item.period}
                    </span>
                  </div>
                </div>
                <div className={`absolute z-10 -right-4 -bottom-4 w-24 h-24 bg-gradient-to-br ${colors.bg} rounded-full opacity-30 group-hover:opacity-50  transition-opacity duration-300`}></div>
              </div>
            );
          })}
        </div>

        {/* Profile Data Section */}
        <div className="mt-10 bg-white/10 p-6 rounded-xl shadow-lg backdrop-blur-lg">
          <h2 className="text-xl font-semibold text-gray-200 mb-4">Profile Details</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="border border-gray-600 flex items-center justify-between p-4 rounded-lg text-gray-100">
              <p className="text-sm text-gray-200">Username</p>
              <h3 className="text-lg font-medium text-[var(--btnColor)]">{data?.username}</h3>
            </div>
            <div className="border border-gray-600 flex items-center justify-between p-4 rounded-lg text-gray-100">
              <p className="text-sm text-gray-200">Email</p>
              <h3 className="text-lg font-medium text-[var(--btnColor)]">{data?.email}</h3>
            </div>

            <div className="border border-gray-600 flex items-center justify-between p-4 rounded-lg text-gray-100">
              <p className="text-sm text-gray-200">Phone</p>
              <h3 className="text-lg font-medium text-[var(--btnColor)]">{data?.phone}</h3>
            </div>

            <div className="border border-gray-600 flex items-center justify-between p-4 rounded-lg text-gray-100">
              <p className="text-sm text-gray-200">Role</p>
              <h3 className="text-lg font-medium text-[var(--btnColor)] capitalize">{data?.role}</h3>
            </div>

            <div className="border border-gray-600 flex items-center justify-between p-4 rounded-lg text-gray-100">
              <p className="text-sm text-gray-200">Referred Users Count</p>
              <h3 className="text-lg font-medium text-[var(--btnColor)]">{data?.referredUsers?.length}</h3>
            </div>

            <div className="border border-gray-600 flex items-center justify-between p-4 rounded-lg text-gray-100">
              <p className="text-sm text-gray-300">Created At</p>
              <h3 className="text-lg font-medium text-[var(--btnColor)]">
                {new Date(data?.createdAt).toLocaleDateString()}
              </h3>
            </div>

            <div className="border border-gray-600 flex items-center justify-between p-4 rounded-lg text-gray-100 md:col-span-2">
              <p className="text-sm text-gray-300">Referral Link</p>
              <div className='flex items-center gap-4'>
                <h3 className="text-lg font-medium text-[var(--btnColor)]">{backendConfig.origin}/{data?.referralCode}</h3>
                <Copy onClick={copyReferralLink} />
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default UserDashboard;