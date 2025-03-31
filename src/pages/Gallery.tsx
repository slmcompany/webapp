import React from 'react';
import Navbar from '../components/Navbar';

export const Gallery: React.FC = () => {
  return (
    <div className="min-h-screen bg-white pb-[72px]">
      <div className="mb-4">
        <h1 className="text-xl font-medium text-[#27273E]">Thư viện ảnh</h1>
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-2 gap-4">
        {/* Placeholder for gallery items */}
        {[1, 2, 3, 4].map((item) => (
          <div 
            key={item}
            className="aspect-square rounded-lg bg-gray-100 overflow-hidden"
          >
            {/* Replace with actual image */}
            <div className="w-full h-full flex items-center justify-center text-gray-400">
              Ảnh {item}
            </div>
          </div>
        ))}
      </div>

      {/* Navbar */}
      <Navbar />
    </div>
  );
}; 