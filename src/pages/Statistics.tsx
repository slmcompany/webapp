import React from 'react';
import Navbar from '../components/Navbar';

interface StatItem {
  id: number;
  title: string;
  value: string;
  change: string;
  isIncrease: boolean;
}

export const Statistics: React.FC = () => {
  // Mock data - replace with actual API call later
  const stats: StatItem[] = [
    {
      id: 1,
      title: "Doanh thu tháng",
      value: "12.500.000đ",
      change: "+15%",
      isIncrease: true
    },
    {
      id: 2,
      title: "Số đơn hàng",
      value: "45",
      change: "+8%",
      isIncrease: true
    },
    {
      id: 3,
      title: "Khách hàng mới",
      value: "28",
      change: "-3%",
      isIncrease: false
    },
    {
      id: 4,
      title: "Tỷ lệ chuyển đổi",
      value: "3.2%",
      change: "+2%",
      isIncrease: true
    }
  ];

  return (
    <div className="min-h-screen bg-white pb-[72px]">
      {/* Header */}
      <div className="px-4 py-3 border-b border-gray-200">
        <h1 className="text-xl font-medium text-[#27273E]">Thống kê</h1>
      </div>

      {/* Stats Grid */}
      <div className="p-4">
        <div className="grid grid-cols-2 gap-4">
          {stats.map((stat) => (
            <div 
              key={stat.id}
              className="bg-white rounded-lg p-4 shadow"
            >
              <h3 className="text-sm text-[#7B7D9D] mb-2">
                {stat.title}
              </h3>
              <div className="flex items-end justify-between">
                <p className="text-lg font-bold text-[#27273E]">
                  {stat.value}
                </p>
                <span className={`text-sm font-medium ${stat.isIncrease ? 'text-green-500' : 'text-red-500'}`}>
                  {stat.change}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navbar */}
      <Navbar />
    </div>
  );
}; 