import React from 'react';
import { BrandPage } from '../components/BrandPage';
import elitonLogo from '../assets/images/eliton-logo.png';

export const Eliton: React.FC = () => {
  const sections = [
    {
      title: "Bán chạy",
      products: [
        {
          id: 5,
          name: "Dragonfly Gold",
          price: 124570689,
          image: "/images/not-exist.png",
          type: "ELI-01",
          typeColor: "#12B669",
          typeBgColor: "#ECFDF3",
          powerConsumption: "Tải trọng: 450kg",
          roi: "Số người: 6"
        },
        {
          id: 6,
          name: "Dragonfly Silver",
          price: 124570689,
          image: "/images/not-exist.png",
          type: "ELI-01",
          typeColor: "#12B669",
          typeBgColor: "#ECFDF3",
          powerConsumption: "Tải trọng: 750kg",
          roi: "Số người: 10"
        },
        {
          id: 7,
          name: "Minions Gold",
          price: 124570689,
          image: "/images/not-exist.png",
          type: "ELI-02",
          typeColor: "#F04437",
          typeBgColor: "#FEF3F2",
          powerConsumption: "Tải trọng: 1600kg",
          roi: "Số người: 21"
        }
      ]
    },
    {
      title: "Thang máy gia đình",
      products: [
        {
          id: 1,
          name: "Thang máy gia đình cơ bản",
          price: 124570689,
          image: "/images/not-exist.png",
          type: "ELI-01",
          typeColor: "#12B669",
          typeBgColor: "#ECFDF3",
          powerConsumption: "Tải trọng: 450kg",
          roi: "Số người: 6"
        },
        {
          id: 2,
          name: "Thang máy gia đình cao cấp",
          price: 124570689,
          image: "/images/not-exist.png",
          type: "ELI-01",
          typeColor: "#12B669",
          typeBgColor: "#ECFDF3",
          powerConsumption: "Tải trọng: 750kg",
          roi: "Số người: 10"
        }
      ]
    },
    {
      title: "Thang máy bệnh viện",
      products: [
        {
          id: 3,
          name: "Thang máy bệnh viện tiêu chuẩn",
          price: 124570689,
          image: "/images/not-exist.png",
          type: "ELI-02",
          typeColor: "#F04437",
          typeBgColor: "#FEF3F2",
          powerConsumption: "Tải trọng: 1600kg",
          roi: "Số người: 21"
        },
        {
          id: 4,
          name: "Thang máy bệnh viện lớn",
          price: 124570689,
          image: "/images/not-exist.png",
          type: "ELI-02",
          typeColor: "#F04437",
          typeBgColor: "#FEF3F2",
          powerConsumption: "Tải trọng: 2000kg",
          roi: "Số người: 26"
        }
      ]
    }
  ];

  return (
    <BrandPage
      brandName="Eliton"
      productCount={12}
      headerColor="bg-[#0F974A]"
      sections={sections}
      brandImage={elitonLogo}
    />
  );
}; 