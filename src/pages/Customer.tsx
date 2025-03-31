import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { customerService } from '../services/customerService';
import { User } from '../mocks/handlers/auth';
import { Order, Quotation } from '../mocks/handlers/orders';
import rafikiImage from '../assets/images/rafiki.png';
import achievementImage from '../assets/images/achievement.png';
import tiemNangImage from '../assets/images/tiem-nang.png';
import userPlusIcon from '../assets/images/user-plus.png';
import customerIcon1 from '../assets/images/customer-icon-1.png';
import customerIcon2 from '../assets/images/customer-icon-2.png';
import customerIcon3 from '../assets/images/customer-icon-3.png';

interface EnhancedUser extends User {
  ordersCount: number;
  quotationsCount: number;
  activeQuotations: number;
}

type FilterType = 'all' | 'potential' | 'purchased';

export const Customer: React.FC = () => {
  const [customers, setCustomers] = useState<EnhancedUser[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [filter, setFilter] = useState<FilterType>('all');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCustomers = async () => {
      try {
        const data = await customerService.getAllCustomers();
        const customerData = data.filter(user => user.role.name === 'customer');
        setCustomers(customerData);
      } catch (err) {
        setError('Có lỗi xảy ra khi tải dữ liệu khách hàng');
        console.error('Error fetching customers:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchCustomers();
  }, []);

  const filteredCustomers = React.useMemo(() => {
    switch (filter) {
      case 'potential':
        return customers.filter(c => c.status === 'potential');
      case 'purchased':
        return customers.filter(c => c.orders > 0);
      default:
        return customers;
    }
  }, [customers, filter]);

  const potentialCount = React.useMemo(() => {
    return customers.filter(c => c.status === 'potential').length;
  }, [customers]);

  // Function to get role display text
  const getRoleDisplayText = (role: string): string => {
    switch (role) {
      case 'customer':
        return 'Khách hàng';
      case 'level2_agent':
        return 'Đại lý cấp 2';
      case 'level1_agent':
        return 'Đại lý cấp 1';
      case 'admin':
        return 'Admin';
      default:
        return role;
    }
  };

  // Function to get role style
  const getRoleStyle = (role: string): string => {
    switch (role) {
      case 'admin':
        return 'bg-purple-100 text-purple-800';
      case 'level1_agent':
        return 'bg-blue-100 text-blue-800';
      case 'level2_agent':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-600';
    }
  };

  // Function to get status style
  const getStatusStyle = (status: User['status']): string => {
    switch (status) {
      case 'active':
        return 'bg-emerald-100 text-emerald-800';
      case 'potential':
        return 'bg-amber-100 text-amber-800';
      case 'inactive':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-600';
    }
  };

  // Function to get status display text
  const getStatusDisplayText = (status: User['status']): string => {
    switch (status) {
      case 'active':
        return 'Đang hoạt động';
      case 'potential':
        return 'Tiềm năng';
      case 'inactive':
        return 'Không hoạt động';
      default:
        return status;
    }
  };

  // Function to format date
  const formatDate = (dateString: string | null): string => {
    if (!dateString) return 'N/A';
    return new Date(dateString).toLocaleDateString('vi-VN', {
      year: 'numeric',
      month: 'numeric',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric'
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900 mx-auto"></div>
          <p className="mt-2 text-gray-600">Đang tải dữ liệu...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center text-red-600">
          <p>{error}</p>
          <button 
            onClick={() => window.location.reload()} 
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Thử lại
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white pb-[72px]">
      {/* Header */}
      <div className="px-4 py-3 border-b border-gray-200 flex items-center justify-between relative">
        <div className="w-8" /> {/* Spacer để căn giữa */}
        <h1 className="text-xl font-medium text-[#27273E] absolute left-1/2 -translate-x-1/2">
          Khách hàng
        </h1>
        <button 
          onClick={() => navigate('/customer-add-new')}
          className="w-8 h-8 flex items-center justify-center"
        >
          <img src={userPlusIcon} alt="Add customer" className="w-6 h-6" />
        </button>
      </div>

      {/* Filter Tabs */}
      <div className="flex gap-3 px-4 py-3">
        <button
          onClick={() => setFilter('all')}
          className={`px-3 py-1.5 rounded-full text-xs font-medium ${
            filter === 'all'
              ? 'bg-[#ED1C24] text-white'
              : 'bg-[#F5F5F8] text-[#7B7D9D]'
          }`}
        >
          Tất cả
        </button>
        <button
          onClick={() => setFilter('potential')}
          className={`px-3 py-1.5 rounded-full text-xs font-medium ${
            filter === 'potential'
              ? 'bg-[#ED1C24] text-white'
              : 'bg-[#F5F5F8] text-[#7B7D9D]'
          }`}
        >
          Tiềm năng
        </button>
        <button
          onClick={() => setFilter('purchased')}
          className={`px-3 py-1.5 rounded-full text-xs font-medium ${
            filter === 'purchased'
              ? 'bg-[#ED1C24] text-white'
              : 'bg-[#F5F5F8] text-[#7B7D9D]'
          }`}
        >
          Đã mua hàng
        </button>
      </div>

      {/* Potential Customer Banner */}
      <div className={`mx-4 mb-2 ${
        filter === 'potential' 
          ? 'bg-[#EFF8FF]' 
          : filter === 'purchased'
            ? 'bg-[#ECFDF3]'
            : 'bg-[#FFECED]'
      } rounded-xl`}>
        <div className="flex gap-4 p-4">
          <div className="flex-1">
            <p className={`text-[14px] font-medium ${
              filter === 'potential'
                ? 'text-[#2E90FA]'
                : filter === 'purchased'
                  ? 'text-[#12B669]'
                  : 'text-[#ED1C24]'
            }`}>
              {filter === 'potential' 
                ? 'Giúp khách hàng sở hữu giải pháp tuyệt vời này: Chốt đơn ngay!'
                : filter === 'purchased'
                  ? 'Tiếp tục mang đến những giải pháp giá trị cho nhiều người hơn nữa!'
                  : 'Chủ động thêm thông tin khách hàng để không bỏ lỡ cơ hội.'}
            </p>
            <p className={`text-[8px] ${
              filter === 'potential'
                ? 'text-[#2E90FA]/60'
                : filter === 'purchased'
                  ? 'text-[#12B669]/60'
                  : 'text-[#ED1C24]/60'
            } mt-2`}>
              {filter === 'purchased'
                ? `Thật tuyệt vời, bạn đã có ${filteredCustomers.length} khách hàng chốt đơn trong tháng này. Hãy tiếp tục cố gắng nhé!`
                : `Bạn đang có ${potentialCount.toString().padStart(2, '0')}/20 khách hàng tiềm năng`}
            </p>
            {filter !== 'purchased' && (
              <div className="mt-2 h-1 bg-white rounded">
                <div 
                  className={`h-full ${
                    filter === 'potential' ? 'bg-[#2E90FA]' : 'bg-[#ED1C24]'
                  } rounded`}
                  style={{ width: `${(potentialCount / 20) * 100}%` }}
                />
              </div>
            )}
          </div>
          <div className="w-24 h-24 relative">
            <img 
              src={
                filter === 'purchased' 
                  ? achievementImage 
                  : filter === 'potential'
                    ? tiemNangImage
                    : rafikiImage
              } 
              alt={
                filter === 'purchased' 
                  ? "Achievement illustration" 
                  : filter === 'potential'
                    ? "Potential customer illustration"
                    : "Add customer illustration"
              } 
              className="w-full h-full object-contain"
            />
          </div>
        </div>
        <div className="flex items-center justify-between px-4 py-2 border-t border-white">
          <button 
            onClick={() => navigate('/customer-add-new')} 
            className={`text-xs font-medium ${
            filter === 'potential'
              ? 'text-[#2E90FA]'
              : filter === 'purchased'
                ? 'text-[#12B669]'
                : 'text-[#ED1C24]'
          } flex items-center gap-2`}>
            {filter === 'potential' 
              ? 'Tạo yêu cầu tư vấn' 
              : filter === 'purchased'
                ? 'Tạo yêu cầu tư vấn'
                : 'Thêm khách hàng mới'}
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path 
                d="M3 8H13M13 8L8.5 3.5M13 8L8.5 12.5" 
                stroke={
                  filter === 'potential'
                    ? '#2E90FA'
                    : filter === 'purchased'
                      ? '#12B669'
                      : '#ED1C24'
                }
                strokeWidth="1.25" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Customer List */}
      <div className="px-4 space-y-2">
        {filteredCustomers.map((customer) => (
          <div 
            key={customer.id}
            className="bg-white rounded-lg p-3 shadow-[0px_1px_3px_0px_rgba(39,39,62,0.16)] border border-gray-100"
          >
            <div className="flex justify-between items-start">
              <div 
                className="cursor-pointer" 
                onClick={() => navigate(`/customers/${customer.id}`, { state: { user: customer } })}
              >
                <h3 className="text-sm font-normal text-[#27273E]">
                  {customer.name}
                </h3>
                <p className="text-xs text-[#7B7D9D]">
                  {customer.phone}
                </p>
              </div>
              <div className="flex gap-1">
                {/* Download Icon */}
                <button className="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-gray-50">
                  <img src={customerIcon1} alt="Download" className="w-10 h-10" />
                </button>
                {/* Quote Icon */}
                <button className="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-gray-50">
                  <img src={customerIcon2} alt="Quote" className="w-10 h-10" />
                </button>
                {/* Order Icon */}
                <button className="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-gray-50">
                  <img src={customerIcon3} alt="Order" className="w-10 h-10" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navbar */}
      <Navbar />
    </div>
  );
}; 