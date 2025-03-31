import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import Image from './Image';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  powerConsumption?: string;
  roi?: string;
  type?: string;
  typeColor?: string;
  typeBgColor?: string;
}

interface ProductSection {
  title: string;
  subtitle?: string;
  products: Product[];
}

interface BrandPageProps {
  brandName: string;
  productCount: number;
  headerColor: string;
  sections: ProductSection[];
  brandImage: string;
}

export const BrandPage: React.FC<BrandPageProps> = ({
  brandName,
  productCount,
  headerColor,
  sections,
  brandImage
}) => {
  const navigate = useNavigate();
  
  const formatPrice = (price: number) => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  };

  return (
    <div className="min-h-screen bg-white pb-[72px]">
      {/* Header */}
      <div className={`${headerColor} px-4 py-1`}>
        <div className="flex justify-between items-center">
          <button className="p-1" onClick={() => navigate(-1)}>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12.5 15L7.5 10L12.5 5" stroke="#22272F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <button className="p-1">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.5 13.3333L10 15.8333L12.5 13.3333M10 15.8333V9.16666M15.8333 9.16666C15.8333 7.23475 14.7714 5.45406 13.0355 4.46766C11.2997 3.48127 9.16679 3.48127 7.43093 4.46766C5.69507 5.45406 4.63326 7.23475 4.63326 9.16666" stroke="#22272F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>

      {/* Profile Section */}
      <div className="px-4 py-4">
        <div className="flex justify-between items-end">
          <div className="flex items-center gap-3">
            <div className="w-14 h-14 rounded-full border border-[#ABACC2] overflow-hidden">
              <Image src={brandImage} alt={brandName} className="w-full h-full object-contain" />
            </div>
            <div>
              <h1 className="text-lg font-medium text-[#27273E]">{brandName}</h1>
              <p className="text-sm text-[#7B7D9D]">{productCount} sản phẩm</p>
            </div>
          </div>
          <button className="px-2 py-1 bg-[#27273E]/16 rounded flex items-center gap-2">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18.3334 14.1667V5.83334C18.3334 4.91286 17.5872 4.16667 16.6667 4.16667H3.33335C2.41288 4.16667 1.66669 4.91286 1.66669 5.83334V14.1667C1.66669 15.0871 2.41288 15.8333 3.33335 15.8333H16.6667C17.5872 15.8333 18.3334 15.0871 18.3334 14.1667Z" stroke="#7B7D9D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M6.66669 10C7.12692 10 7.50002 9.62691 7.50002 9.16668C7.50002 8.70644 7.12692 8.33334 6.66669 8.33334C6.20645 8.33334 5.83335 8.70644 5.83335 9.16668C5.83335 9.62691 6.20645 10 6.66669 10Z" stroke="#7B7D9D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M11.6667 8.33334L14.1667 11.6667" stroke="#7B7D9D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M14.1667 8.33334L11.6667 11.6667" stroke="#7B7D9D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className="text-xs font-medium text-[#27273E]">Hotline</span>
          </button>
        </div>

        <button className="mt-3 w-full py-1 px-2 bg-[#27273E]/16 rounded flex items-center justify-between">
          <div className="flex items-center gap-2">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16.6667 4.16667H3.33335C2.41288 4.16667 1.66669 4.91286 1.66669 5.83333V14.1667C1.66669 15.0871 2.41288 15.8333 3.33335 15.8333H16.6667C17.5872 15.8333 18.3334 15.0871 18.3334 14.1667V5.83333C18.3334 4.91286 17.5872 4.16667 16.6667 4.16667Z" stroke="#7B7D9D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M1.66669 8.33333H18.3334" stroke="#7B7D9D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M5.83335 12.5H5.84168" stroke="#7B7D9D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M10 12.5H11.6667" stroke="#7B7D9D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className="text-xs text-[#27273E]">Nội dung của {brandName}</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="text-xs text-[#7B7D9D]">76 bài viết</span>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.5 15L12.5 10L7.5 5" stroke="#7B7D9D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </button>
      </div>

      {/* Bestseller Section */}
      <div className="mt-4 px-4">
        <h2 className="text-2xl font-medium text-[#27273E]">Bán chạy</h2>
        <div className="mt-3 flex gap-3 overflow-x-auto pb-4 -mx-4 px-4 scrollbar-hide">
          {sections.find(s => s.title === "Bán chạy")?.products.map((product) => (
            <div 
              key={product.id}
              className="flex-shrink-0 w-[142px] bg-white rounded-lg overflow-hidden shadow"
            >
              <div className="relative aspect-square">
                <Image 
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
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
                <div className="space-y-1">
                  {product.powerConsumption && (
                    <p className="text-xs text-[#7B7D9D]">{product.powerConsumption}</p>
                  )}
                  {product.roi && (
                    <p className="text-xs text-[#7B7D9D]">{product.roi}</p>
                  )}
                </div>
                <p className="mt-2 text-xs font-bold text-[#ED1C24] flex gap-0.5">
                  <span>{formatPrice(product.price)}</span>
                  <span>đ</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Product Sections */}
      {sections.filter(section => section.title !== "Bán chạy").map((section, index) => (
        <div key={index} className="mt-4 px-4">
          <h2 className="text-2xl font-medium text-[#27273E]">{section.title}</h2>
          {section.subtitle && (
            <h3 className="mt-2 text-xs font-bold text-[#7B7D9D]">{section.subtitle}</h3>
          )}
          <div className="mt-3 grid grid-cols-1 gap-2">
            {section.products.map((product) => (
              <div 
                key={product.id}
                className="bg-white rounded-lg shadow-[0px_1px_3px_0px_rgba(39,39,62,0.16)] overflow-hidden"
              >
                <div className="flex">
                  <div className="relative aspect-square w-[142px]">
                    <Image 
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover"
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
                  <div className="flex-1 p-3 flex flex-col gap-1.5">
                    <h3 className="text-sm font-medium text-[#27273E] leading-[1.4]">
                      {product.name}
                    </h3>
                    <div className="space-y-1">
                      {product.powerConsumption && (
                        <p className="text-xs text-[#7B7D9D] leading-[1.67]">{product.powerConsumption}</p>
                      )}
                      {product.roi && (
                        <p className="text-xs text-[#7B7D9D] leading-[1.67]">{product.roi}</p>
                      )}
                    </div>
                    <div className="mt-auto flex justify-between items-center">
                      <p className="text-xs font-bold text-[#ED1C24] flex gap-0.5">
                        <span>{formatPrice(product.price)}</span>
                        <span>đ</span>
                      </p>
                      <button className="flex items-center gap-0.5 text-xs text-[#7B7D9D]">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M8 3.33334V12.6667M3.33333 8H12.6667" stroke="#7B7D9D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        Thêm vào báo giá
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}

      {/* Navbar */}
      <Navbar />
    </div>
  );
}; 