import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../stores/authStore';
import {
  UserCircleIcon,
  CreditCardIcon,
  LockClosedIcon,
  BellIcon,
  InformationCircleIcon,
  QuestionMarkCircleIcon,
  LifebuoyIcon,
  ArrowLeftIcon,
  ArrowRightOnRectangleIcon,
  ArrowPathRoundedSquareIcon,
  ChevronRightIcon,
} from '@heroicons/react/24/outline';

// Import default avatar
import defaultAvatar from '../assets/images/avatar.png';

const Profile: React.FC = () => {
  const navigate = useNavigate();
  const { user, logout } = useAuthStore();

  const handleLogout = async () => {
    await logout();
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white">
        <div className="flex items-center p-4 border-b">
          <button onClick={() => navigate(-1)} className="p-2">
            <ArrowLeftIcon className="w-6 h-6" />
          </button>
          <div className="flex-1 flex flex-col items-center">
            <div className="w-16 h-16 rounded-full border-2 border-white bg-gray-200 overflow-hidden">
              <img 
                src={user?.avatar || defaultAvatar} 
                alt={user?.name || 'User'} 
                className="w-full h-full object-cover" 
              />
            </div>
            <h2 className="text-lg font-medium mt-2">{user?.name || 'Tùy Phong'}</h2>
            <p className="text-sm text-gray-500">{user?.phone || '0384 123 456'}</p>
          </div>
          <div className="w-8" /> {/* Spacing for alignment */}
        </div>

        {/* Role Switch */}
        <div className="bg-white rounded-t-lg mx-4 p-4">
          <div className="flex items-center justify-between">
            <span className="text-sm font-bold text-[#ED1C24]">ĐẠI LÝ CẤP 1</span>
            <div className="flex items-center gap-2 text-[#27273E]">
              <span className="text-sm font-medium">Xem với vai trò Khách hàng</span>
              <ArrowPathRoundedSquareIcon className="w-5 h-5" />
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="space-y-2 mt-2">
        {/* Account Section */}
        <div className="bg-white">
          <div className="px-4 py-2">
            <div className="flex items-center">
              <span className="text-xs font-bold text-gray-500">TÀI KHOẢN</span>
              <span className="ml-2 text-xs font-bold text-red-500">YÊU CẦU THAY ĐỔI</span>
            </div>
          </div>
          
          <div className="divide-y">
            <div className="flex items-center justify-between p-3">
              <div className="flex items-center">
                <UserCircleIcon className="w-6 h-6 text-gray-500" />
                <span className="ml-3 text-sm font-medium">Thông tin cá nhân</span>
              </div>
              <ChevronRightIcon className="w-5 h-5 text-gray-500" />
            </div>

            <div className="flex items-center justify-between p-3">
              <div className="flex items-center">
                <CreditCardIcon className="w-6 h-6 text-gray-500" />
                <span className="ml-3 text-sm font-medium">Tài khoản thụ hưởng</span>
              </div>
              <ChevronRightIcon className="w-5 h-5 text-gray-500" />
            </div>
          </div>
        </div>

        {/* Settings Section */}
        <div className="bg-white">
          <div className="px-4 py-2">
            <span className="text-xs font-bold text-gray-500">CÀI ĐẶT</span>
          </div>
          
          <div className="divide-y">
            <div className="flex items-center justify-between p-3">
              <div className="flex items-center">
                <LockClosedIcon className="w-6 h-6 text-gray-500" />
                <span className="ml-3 text-sm font-medium">Mật khẩu</span>
              </div>
              <ChevronRightIcon className="w-5 h-5 text-gray-500" />
            </div>

            <div className="flex items-center justify-between p-3">
              <div className="flex items-center">
                <BellIcon className="w-6 h-6 text-gray-500" />
                <span className="ml-3 text-sm font-medium">Thông báo</span>
              </div>
              <ChevronRightIcon className="w-5 h-5 text-gray-500" />
            </div>
          </div>
        </div>

        {/* App Info Section */}
        <div className="bg-white">
          <div className="px-4 py-2">
            <span className="text-xs font-bold text-gray-500">THÔNG TIN ỨNG DỤNG</span>
          </div>
          
          <div className="divide-y">
            <div className="flex items-center justify-between p-3">
              <div className="flex items-center">
                <InformationCircleIcon className="w-6 h-6 text-gray-500" />
                <span className="ml-3 text-sm font-medium">Phiên bản ứng dụng</span>
              </div>
              <span className="text-sm text-gray-500">1.0.0</span>
            </div>

            <div className="flex items-center justify-between p-3">
              <div className="flex items-center">
                <QuestionMarkCircleIcon className="w-6 h-6 text-gray-500" />
                <span className="ml-3 text-sm font-medium">Điều khoản sử dụng</span>
              </div>
              <ChevronRightIcon className="w-5 h-5 text-gray-500" />
            </div>

            <div className="flex items-center justify-between p-3">
              <div className="flex items-center">
                <LifebuoyIcon className="w-6 h-6 text-gray-500" />
                <span className="ml-3 text-sm font-medium">Liên hệ hỗ trợ</span>
              </div>
              <div className="w-6 h-6 flex items-center justify-center bg-red-50 rounded-full">
                <div className="w-4 h-4 text-red-500" />
              </div>
            </div>

            <button
              onClick={handleLogout}
              className="flex items-center w-full p-3 text-red-600"
            >
              <ArrowRightOnRectangleIcon className="w-6 h-6" />
              <span className="ml-3 text-sm font-medium">Đăng xuất</span>
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Indicator */}
      <div className="fixed bottom-0 left-0 right-0 flex justify-center pb-2 pt-5">
        <div className="w-32 h-1 bg-black rounded-full" />
      </div>
    </div>
  );
};

export default Profile; 