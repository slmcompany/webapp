import React from 'react';
import Navbar from '../components/Navbar';
import Image from '../components/Image';
import { Carousel } from '../components/Carousel';
import { Link } from 'react-router-dom';

// Import logos
import solarMaxLogo from '../assets/images/solarmax-logo.png';
import elitonLogo from '../assets/images/eliton-logo.png';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  type?: string;
  typeColor?: string;
  typeBgColor?: string;
}

interface ProductSection {
  title: string;
  subtitle?: string;
  seeAllLink?: string;
  products: Product[];
}

export const Products: React.FC = () => {
  const formatPrice = (price: number) => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  };

  const sections: ProductSection[] = [
    {
      title: "Sản phẩm mới",
      products: []
    },
    {
      title: "Bán chạy",
      products: [
        {
          id: 1,
          name: "Hệ Độc lập Một pha 8kW",
          price: 124570689,
          image: "/images/not-exist.png",
          type: "ĐỘC LẬP",
          typeColor: "#12B669",
          typeBgColor: "#ECFDF3"
        },
        {
          id: 2,
          name: "Hệ Bám tải Một pha 8kW",
          price: 124570689,
          image: "/images/not-exist.png",
          type: "BÁM TẢI",
          typeColor: "#F04437",
          typeBgColor: "#FEF3F2"
        },
        {
          id: 3,
          name: "Hệ Độc lập Ba pha 8kW Áp cao",
          price: 124570689,
          image: "/images/not-exist.png",
          type: "ĐỘC LẬP",
          typeColor: "#12B669",
          typeBgColor: "#ECFDF3"
        },
        {
          id: 4,
          name: "Dragonfly Gold",
          price: 124570689,
          image: "/images/not-exist.png",
          type: "ELI-01",
          typeColor: "#12B669",
          typeBgColor: "#ECFDF3"
        },
        {
          id: 5,
          name: "Dragonfly Silver",
          price: 124570689,
          image: "/images/not-exist.png",
          type: "ELI-01",
          typeColor: "#12B669",
          typeBgColor: "#ECFDF3"
        },
        {
          id: 6,
          name: "Minions Gold",
          price: 124570689,
          image: "/images/not-exist.png",
          type: "ELI-02",
          typeColor: "#F04437",
          typeBgColor: "#FEF3F2"
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white pb-[72px]">
      {/* Search Bar */}
      <div className="px-4 py-2">
        <div className="flex items-center gap-2 px-4 py-3 border border-[#ABACC2] rounded-[100px] bg-white">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.5 17.5L13.875 13.875M15.8333 9.16667C15.8333 12.8486 12.8486 15.8333 9.16667 15.8333C5.48477 15.8333 2.5 12.8486 2.5 9.16667C2.5 5.48477 5.48477 2.5 9.16667 2.5C12.8486 2.5 15.8333 5.48477 15.8333 9.16667Z" stroke="#7B7D9D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <input 
            type="text" 
            placeholder="Bạn muốn tìm sản phẩm nào?"
            className="flex-1 text-sm text-[#7B7D9D] outline-none"
          />
        </div>
      </div>

      {/* Banner */}
      <div className="h-[100px] bg-[#F5F5F8] flex items-center justify-center text-[#7B7D9D]">
        banner
      </div>

      {/* Brand Logos */}
      <div className="px-4">
        <div className="grid grid-cols-2 gap-2">
          <Link to="/solarmax" className="bg-white rounded-lg shadow p-4 flex items-center justify-center">
            <Image src={solarMaxLogo} alt="SolarMax" className="h-8 object-contain" />
          </Link>
          <Link to="/eliton" className="bg-white rounded-lg shadow p-4 flex items-center justify-center">
            <Image src={elitonLogo} alt="Eliton" className="h-8 object-contain" />
          </Link>
        </div>
      </div>

      {/* Product Sections */}
      {sections.map((section, index) => (
        <div key={index} className="mt-6">
          <div className="px-4">
            <h2 className="text-2xl font-medium text-black">{section.title}</h2>
          </div>

          {section.title === "Sản phẩm mới" ? (
            <div className="mt-4">
              <Carousel />
            </div>
          ) : (
            <>
              {/* Solarmax Products */}
              <div className="mt-2">
                <div className="px-4 flex justify-between items-center">
                  <h3 className="text-sm font-medium text-[#7B7D9D]">ĐIỆN MẶT TRỜI SOLARMAX</h3>
                  <a href="/solar" className="flex items-center gap-2 text-[#ED1C24] text-sm font-medium">
                    Tất cả
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10 17.5C14.1421 17.5 17.5 14.1421 17.5 10C17.5 5.85786 14.1421 2.5 10 2.5C5.85786 2.5 2.5 5.85786 2.5 10C2.5 14.1421 5.85786 17.5 10 17.5Z" stroke="#ED1C24" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M8.75 12.9167L11.6667 10L8.75 7.08334" stroke="#ED1C24" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </a>
                </div>
                <div className="mt-3 px-4">
                  <div className="flex gap-3 overflow-x-auto pb-4 -mx-4 px-4 scrollbar-hide">
                    {section.products.slice(0, 3).map((product) => (
                      <div 
                        key={product.id}
                        className="flex-shrink-0 w-[142px] bg-white rounded-lg overflow-hidden shadow"
                      >
                        <div className="relative">
                          <Image 
                            src={product.image}
                            alt={product.name}
                            className="w-full h-[142px] object-cover"
                          />
                          {product.type && (
                            <span 
                              className="absolute top-2 left-2 px-1.5 py-0.5 text-[8px] font-medium rounded"
                              style={{
                                color: product.typeColor,
                                backgroundColor: product.typeBgColor
                              }}
                            >
                              {product.type}
                            </span>
                          )}
                        </div>
                        <div className="p-3">
                          <h3 className="text-xs text-[#27273E] mb-2 line-clamp-2">
                            {product.name}
                          </h3>
                          <p className="text-xs font-bold text-[#ED1C24] flex gap-0.5">
                            <span>{formatPrice(product.price)}</span>
                            <span>đ</span>
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Eliton Products */}
              <div className="mt-6">
                <div className="px-4 flex justify-between items-center">
                  <h3 className="text-sm font-medium text-[#7B7D9D]">THANG MÁY ELITON</h3>
                  <a href="/elevator" className="flex items-center gap-2 text-[#ED1C24] text-sm font-medium">
                    Tất cả
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10 17.5C14.1421 17.5 17.5 14.1421 17.5 10C17.5 5.85786 14.1421 2.5 10 2.5C5.85786 2.5 2.5 5.85786 2.5 10C2.5 14.1421 5.85786 17.5 10 17.5Z" stroke="#ED1C24" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M8.75 12.9167L11.6667 10L8.75 7.08334" stroke="#ED1C24" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </a>
                </div>
                <div className="mt-3 px-4">
                  <div className="flex gap-3 overflow-x-auto pb-4 -mx-4 px-4 scrollbar-hide">
                    {section.products.slice(3).map((product) => (
                      <div 
                        key={product.id}
                        className="flex-shrink-0 w-[142px] bg-white rounded-lg overflow-hidden shadow"
                      >
                        <div className="relative">
                          <Image 
                            src={product.image}
                            alt={product.name}
                            className="w-full h-[142px] object-cover"
                          />
                          {product.type && (
                            <span 
                              className="absolute top-2 left-2 px-1.5 py-0.5 text-[8px] font-medium rounded"
                              style={{
                                color: product.typeColor,
                                backgroundColor: product.typeBgColor
                              }}
                            >
                              {product.type}
                            </span>
                          )}
                        </div>
                        <div className="p-3">
                          <h3 className="text-xs text-[#27273E] mb-2 line-clamp-2">
                            {product.name}
                          </h3>
                          <p className="text-xs font-bold text-[#ED1C24] flex gap-0.5">
                            <span>{formatPrice(product.price)}</span>
                            <span>đ</span>
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      ))}

      {/* Navbar */}
      <Navbar />
    </div>
  );
}; 