import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

// Import icons
import homeIcon from '../assets/images/nav-icon-1.png';
import customerIcon from '../assets/images/nav-icon-2.png';
import productIcon from '../assets/images/nav-icon-3.png';
import statisticIcon from '../assets/images/nav-icon-4.png';
import galleryIcon from '../assets/images/nav-icon-5.png';

const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const navItems = [
    {
      path: '/',
      icon: homeIcon,
      label: 'Trang chủ'
    },
    {
      path: '/customer',
      icon: customerIcon,
      label: 'Khách hàng'
    },
    {
      path: '/products',
      icon: productIcon,
      label: 'Sản phẩm'
    },
    {
      path: '/statistics',
      icon: statisticIcon,
      label: 'Thống kê'
    },
    {
      path: '/gallery',
      icon: galleryIcon,
      label: 'Thư viện'
    }
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-[#FFFFFF] border-t border-[#C4C4D4]">
      <div className="flex justify-between px-6">
        {navItems.map((item) => (
          <button 
            key={item.path}
            className="flex flex-col items-center py-3"
            onClick={() => navigate(item.path)}
          >
            <div className={`w-14 h-8 flex items-center justify-center rounded-[20px] ${isActive(item.path) ? 'bg-[#FFECED]' : ''}`}>
              <img 
                src={item.icon} 
                alt={item.label} 
                className={`w-5 h-5 ${isActive(item.path) ? 'opacity-100' : 'opacity-50'}`} 
              />
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Navbar; 