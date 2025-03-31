import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../stores/authStore';
import {
  HomeIcon,
  UserIcon,
  SquaresPlusIcon,
  ChartPieIcon,
  FilmIcon,
  BellIcon,
  DocumentDuplicateIcon,
  EyeIcon
} from '@heroicons/react/24/outline';

// Import images
import solarMaxLogo from '../assets/images/solarmax-logo.png';
import elitonLogo from '../assets/images/eliton-logo.png';
import defaultAvatar from '../assets/images/avatar.png';
import { Carousel } from '../components/Carousel';
import { BestSeller } from '../components/BestSeller';
import EmptyState from '../components/EmptyState';
import Navbar from '../components/Navbar';

const Home: React.FC = () => {
  const navigate = useNavigate();
  const { user } = useAuthStore();

  return (
    <div className="min-h-screen bg-[#ED1C24] flex flex-col pb-[60px]">
      {/* Header */}
      <div className="text-[#FFFFFF]">
        <div className="p-4">
          <div className="flex items-center justify-between">
            <div 
              className="flex items-center gap-3 cursor-pointer active:opacity-70" 
              onClick={() => navigate('/profile')}
            >
              <div className="w-12 h-12 rounded-full overflow-hidden">
                <img 
                  src={user?.avatar || defaultAvatar} 
                  alt={user?.name || 'User'} 
                  className="w-full h-full object-cover" 
                />
              </div>
              <div>
                <h1 className="text-base font-medium">Chào, {user?.name || 'Tùy Phong'}</h1>
                <p className="text-[#FFB800] text-sm">{user?.phone || '0384 123 456'}</p>
              </div>
            </div>
            <div className="flex gap-4">
              <button className="w-10 h-10 rounded-full bg-[rgba(255,255,255,0.2)] flex items-center justify-center">
                <DocumentDuplicateIcon className="w-6 h-6 text-[#FFFFFF]" />
              </button>
              <button className="w-10 h-10 rounded-full bg-[rgba(255,255,255,0.2)] flex items-center justify-center">
                <BellIcon className="w-6 h-6 text-[#FFFFFF]" />
              </button>
            </div>
          </div>
        </div>

        {/* Income Card */}
        <div className="px-4 pb-6">
          <div className="bg-gradient-to-r from-[#F4A261] to-[#E76F51] rounded-2xl p-4 text-[#FFFFFF]">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-lg mb-2">Thu nhập dự kiến T3</p>
                <div className="flex items-center gap-2">
                  <span className="text-3xl font-bold">12.650.000</span>
                  <EyeIcon className="w-5 h-5" />
                </div>
              </div>
              <div className="flex gap-6">
                <button className="flex flex-col items-center">
                  <div className="mb-1">
                    <UserIcon className="w-6 h-6" />
                  </div>
                  <span className="text-sm">Cộng đồng</span>
                </button>
                <button className="flex flex-col items-center">
                  <div className="mb-1">
                    <ChartPieIcon className="w-6 h-6" />
                  </div>
                  <span className="text-sm">Thống kê</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 bg-[#F5F5FA]">
        <div className="p-4">
          {/* Brand Logos */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="bg-[#FFFFFF] rounded-xl p-4 flex items-center justify-center">
              <img src={solarMaxLogo} alt="SolarMax" className="h-8" />
            </div>
            <div className="bg-[#FFFFFF] rounded-xl p-4 flex items-center justify-center">
              <img src={elitonLogo} alt="Eliton" className="h-8" />
            </div>
          </div>

          {/* Carousel */}
          <Carousel />

          {/* Best Sellers */}
          <div className="mb-6">
            <h2 className="text-lg font-medium text-[#27273E] mb-4">Bán chạy</h2>
            <BestSeller />
          </div>

          {/* Solarmax Products */}
          <div className="mb-6">
            <h2 className="text-lg font-medium text-[#27273E] mb-4">Sản phẩm Solarmax</h2>
            <div className="grid grid-cols-2 gap-4">
              {/* Card items */}
            </div>
          </div>

          {/* Empty State */}
          <EmptyState />
        </div>
      </div>

      {/* Bottom Navigation */}
      <Navbar />
    </div>
  );
};

export default Home; 