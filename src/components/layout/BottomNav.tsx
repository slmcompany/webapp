import React from 'react';
import { TabBar } from 'antd-mobile';
import { useNavigate, useLocation } from 'react-router-dom';
import { 
  HomeOutlined,
  UserOutlined,
  InboxOutlined,
  PieChartOutlined,
  PlaySquareOutlined
} from '@ant-design/icons';

export const BottomNav: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const tabs = [
    {
      key: '/home',
      title: 'Trang chủ',
      icon: <HomeOutlined />,
    },
    {
      key: '/profile',
      title: 'Cá nhân',
      icon: <UserOutlined />,
    },
    {
      key: '/products',
      title: 'Sản phẩm',
      icon: <InboxOutlined />,
    },
    {
      key: '/statistics',
      title: 'Thống kê',
      icon: <PieChartOutlined />,
    },
    {
      key: '/media',
      title: 'Media',
      icon: <PlaySquareOutlined />,
    },
  ];

  return (
    <TabBar
      className="border-t border-[#C4C4D4] bg-white pb-safe"
      activeKey={location.pathname}
      onChange={value => navigate(value)}
    >
      {tabs.map(item => (
        <TabBar.Item
          key={item.key}
          icon={item.icon}
          title={item.title}
        />
      ))}
    </TabBar>
  );
}; 