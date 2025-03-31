import React from 'react';

// Import empty state illustration
import chatIcon from '../assets/images/chat-icon.png';

const EmptyState: React.FC = () => {
  return (
    <div className="flex flex-col items-center bg-white">
      <div>
        <img src={chatIcon} alt="Chat icon" className="w-[200px] h-auto" />
      </div>
      <div className="flex flex-col items-center gap-2 w-full px-4">
        <h3 className="text-[#7B7D9D] text-base font-medium text-center leading-6 -tracking-[0.01em]">
          Bắt đầu Bán hàng ngay~!
        </h3>
        <p className="text-[#7B7D9D] text-xs text-center leading-[1.67]">
          Mở khóa Thư viện Nội dung của SLM ngay khi có hợp đồng đầu tiên thành công để "bỏ túi" thêm thật nhiều bí kíp, giúp bạn tự tin hơn trên con đường chinh phục đỉnh cao bán hàng nhé!
        </p>
      </div>
      <div className="flex gap-4 px-4 pb-4">
        <button className="flex items-center gap-2 px-3 py-2 border border-[#ED1C24] rounded-md">
          <span className="text-[#ED1C24] text-sm font-medium">Chính sách Đại lý</span>
        </button>
        <button className="flex items-center gap-2 px-3 py-2 bg-[#ED1C24] rounded-md">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="3" y="3" width="14" height="14" rx="3" stroke="currentColor" strokeWidth="1.5"/>
            <path d="M7 10H13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            <path d="M10 13L10 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
          <span className="text-white text-sm font-medium">Xem Sản phẩm</span>
        </button>
      </div>
    </div>
  );
};

export default EmptyState; 