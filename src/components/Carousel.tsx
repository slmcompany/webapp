import React, { useEffect, useState } from 'react';
import { Carousel as AntCarousel } from 'antd';
import { useNavigate } from 'react-router-dom';
import { Banner, bannerApi } from '../mocks/bannerApi';
import { RightOutlined } from '@ant-design/icons';

export const Carousel: React.FC = () => {
  const [banners, setBanners] = useState<Banner[]>([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBanners = async () => {
      try {
        const data = await bannerApi.getActiveBanners();
        setBanners(data);
      } catch (error) {
        console.error('Error fetching banners:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchBanners();
  }, []);

  if (loading) {
    return (
      <div className="mb-6">
        <div className="bg-white rounded-xl w-full aspect-[343/150] animate-pulse" />
      </div>
    );
  }

  if (banners.length === 0) {
    return null;
  }

  return (
    <div className="mb-6">
      <AntCarousel
        autoplay
        dots={{ className: 'custom-dots' }}
      >
        {banners.map((banner) => (
          <div key={banner.id}>
            <div className="px-1">
              <div 
                className="bg-white rounded-xl overflow-hidden cursor-pointer relative w-full"
                onClick={() => banner.link && navigate(banner.link)}
              >
                <img 
                  src={banner.image} 
                  alt={banner.title} 
                  className="w-full aspect-[343/150] object-cover"
                />
                <div className="absolute bottom-0 right-0 p-4 text-right">
                  <h3 className="text-white text-xl font-normal leading-[1.4] tracking-[-0.2px] mb-2 drop-shadow-lg">
                    {banner.title}
                  </h3>
                  <button className="bg-[#FDB022] text-white text-[8px] leading-[1.5] px-2 py-1 rounded-2xl border border-[#FEF0C7] inline-flex items-center gap-1">
                    Bắt đầu ngay
                    <RightOutlined className="text-[8px]" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </AntCarousel>
    </div>
  );
}; 