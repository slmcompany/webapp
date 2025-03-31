import React from 'react';
import { BrandPage } from '../components/BrandPage';
import solarMaxLogo from '../assets/images/solarmax-logo.png';

export const SolarMax: React.FC = () => {
  const sections = [
    {
      title: "Bán chạy",
      products: [
        {
          id: 5,
          name: "Hệ Độc lập Một pha 8kW",
          price: 124570689,
          image: "/images/not-exist.png",
          type: "ĐỘC LẬP",
          typeColor: "#12B669",
          typeBgColor: "#ECFDF3",
          powerConsumption: "Công suất: 8kW",
          roi: "ROI: 3.5 năm"
        },
        {
          id: 6,
          name: "Hệ Bám tải Một pha 8kW",
          price: 124570689,
          image: "/images/not-exist.png",
          type: "BÁM TẢI",
          typeColor: "#F04437",
          typeBgColor: "#FEF3F2",
          powerConsumption: "Công suất: 8kW",
          roi: "ROI: 4 năm"
        },
        {
          id: 7,
          name: "Hệ Độc lập Ba pha 8kW Áp cao",
          price: 124570689,
          image: "/images/not-exist.png",
          type: "ĐỘC LẬP",
          typeColor: "#12B669",
          typeBgColor: "#ECFDF3",
          powerConsumption: "Công suất: 8kW",
          roi: "ROI: 3.2 năm"
        }
      ]
    },
    {
      title: "Hệ thống điện mặt trời độc lập",
      products: [
        {
          id: 1,
          name: "Hệ Độc lập Một pha 8kW",
          price: 124570689,
          image: "/images/not-exist.png",
          type: "ĐỘC LẬP",
          typeColor: "#12B669",
          typeBgColor: "#ECFDF3",
          powerConsumption: "Công suất: 8kW",
          roi: "ROI: 3 năm"
        },
        {
          id: 2,
          name: "Hệ Độc lập Ba pha 8kW Áp cao",
          price: 124570689,
          image: "/images/not-exist.png",
          type: "ĐỘC LẬP",
          typeColor: "#12B669",
          typeBgColor: "#ECFDF3",
          powerConsumption: "Công suất: 8kW",
          roi: "ROI: 3 năm"
        }
      ]
    },
    {
      title: "Hệ Bám tải",
      products: [
        {
          id: 3,
          name: "Hệ Bám tải Một pha 8kW",
          price: 124570689,
          image: "/images/not-exist.png",
          type: "BÁM TẢI",
          typeColor: "#F04437",
          typeBgColor: "#FEF3F2",
          powerConsumption: "Công suất: 8kW",
          roi: "ROI: 3 năm"
        },
        {
          id: 4,
          name: "Hệ Bám tải Ba pha 8kW",
          price: 124570689,
          image: "/images/not-exist.png",
          type: "BÁM TẢI",
          typeColor: "#F04437",
          typeBgColor: "#FEF3F2",
          powerConsumption: "Công suất: 8kW",
          roi: "ROI: 3 năm"
        }
      ]
    }
  ];

  return (
    <BrandPage
      brandName="SolarMax"
      productCount={12}
      headerColor="bg-[#0F974A]"
      sections={sections}
      brandImage={solarMaxLogo}
    />
  );
}; 