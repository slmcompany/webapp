import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { User } from '../mocks/handlers/auth';
import { Drawer } from '../components/Drawer';
import { EditUserInfoDrawer } from '../components/EditUserInfoDrawer';

interface LocationState {
  user: User;
}

export const UserProfile: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { user } = location.state as LocationState;
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleUpdateUser = (updatedUser: User) => {
    // TODO: Handle user update
    setIsDrawerOpen(false);
  };

  if (!user) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center text-red-600">
          <p>Không tìm thấy thông tin khách hàng</p>
          <button 
            onClick={() => navigate('/customer')} 
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Quay lại
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F5F5F8]">
      {/* Header */}
      <div className="bg-white border-b border-[#E5E7EB]">
        <div className="px-4 py-3 flex items-center justify-between relative">
          <button 
            onClick={() => navigate(-1)}
            className="w-8 h-8 flex items-center justify-center"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path 
                d="M15 18L9 12L15 6" 
                stroke="#7B7D9D" 
                strokeWidth="1.5" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <h1 className="text-xl font-medium text-[#27273E] absolute left-1/2 -translate-x-1/2">
            Thông tin khách hàng
          </h1>
          <div className="w-8" /> {/* Spacer */}
        </div>
      </div>

      {/* User Info */}
      <div className="p-4">
        <div className="flex items-end gap-3">
          <div className="flex items-center gap-3 px-1 flex-1">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="8" r="4" stroke="#22272F" strokeWidth="1.5"/>
                <rect x="4" y="14" width="16" height="8" rx="4" stroke="#22272F" strokeWidth="1.5"/>
              </svg>
            </div>
            <div className="flex flex-col justify-center">
              <h2 className="text-base font-medium text-[#27273E]">{user.name}</h2>
              <p className="text-sm text-[#7B7D9D]">{user.phone}</p>
            </div>
          </div>
          <div className="bg-white rounded-[20px] flex items-center gap-1 px-2 py-1">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <rect x="3" y="3" width="10" height="10" rx="5" stroke="#ED1C24" strokeWidth="1"/>
              <path d="M8 5V8L10 10" stroke="#ED1C24" strokeWidth="1"/>
            </svg>
            <span className="text-[8px] font-medium text-[#ED1C24]">Còn 130 ngày</span>
          </div>
        </div>
      </div>

      {/* Contact Info */}
      <div className="bg-white px-4 py-3">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-xs font-bold text-[#7B7D9D]">THÔNG TIN LIÊN HỆ</h3>
          <button 
            onClick={() => setIsDrawerOpen(true)}
            className="text-xs font-medium text-[#ED1C24]"
          >
            Thay đổi
          </button>
        </div>

        <div className="border-b border-[#DCDCE6] py-2.5 flex justify-between">
          <span className="text-xs text-[#7B7D9D]">Họ và tên</span>
          <span className="text-xs text-[#27273E]">{user.name}</span>
        </div>

        <div className="border-b border-[#DCDCE6] py-2.5 flex justify-between">
          <span className="text-xs text-[#7B7D9D]">Số điện thoại</span>
          <span className="text-xs text-[#27273E]">{user.phone}</span>
        </div>

        <div className="border-b border-[#DCDCE6] py-2.5 flex justify-between">
          <span className="text-xs text-[#7B7D9D]">Giới tính</span>
          <span className="text-xs text-[#27273E]">Nam</span>
        </div>

        <div className="border-b border-[#DCDCE6] py-2.5 flex justify-between">
          <span className="text-xs text-[#7B7D9D]">Email</span>
          <span className="text-xs text-[#27273E]">{user.email || 'Chưa cập nhật'}</span>
        </div>

        <div className="py-2.5 flex justify-between">
          <span className="text-xs text-[#7B7D9D]">Địa chỉ liên hệ</span>
          <span className="text-xs text-[#27273E] text-right">{user.address || 'Chưa cập nhật'}</span>
        </div>
      </div>

      {/* Quotations */}
      <div className="mt-3 bg-white px-4 py-3">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-xs font-bold text-[#7B7D9D]">BÁO GIÁ ĐÃ TẠO</h3>
          <button className="flex items-center gap-1.5 text-xs font-medium text-[#ED1C24]">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8H13M8 3V13" stroke="#ED1C24" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
            Tạo báo giá mới
          </button>
        </div>

        {/* Quotation Item */}
        <div className="py-2">
          <div className="flex gap-2">
            <div className="w-6 h-6 bg-[#0F974A] rounded-full"></div>
            <div className="flex-1">
              <div className="flex justify-between">
                <div>
                  <h4 className="text-sm text-[#27273E]">Hệ Độc lập Một pha 8kW</h4>
                  <p className="text-[10px] text-[#7B7D9D]">03:14 - 14/03/2025</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium text-[#27273E]">128.680.000đ</p>
                  <p className="text-[10px] text-[#7B7D9D]">Hoàng Ngọc Tân</p>
                </div>
              </div>
              <div className="flex justify-between items-center mt-1">
                <div className="px-1.5 py-0.5 bg-[#FFFAEB] rounded-lg">
                  <span className="text-[8px] font-medium text-[#F79009]">BÁO GIÁ KHẢO SÁT</span>
                </div>
                <button className="text-xs text-[#2E90FA]">Tải báo giá</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Orders */}
      <div className="mt-3 bg-white px-4 py-3">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-xs font-bold text-[#7B7D9D]">ĐƠN HÀNG</h3>
        </div>

        {/* Order Item */}
        <div className="py-2">
          <div className="flex gap-2">
            <div className="w-6 h-6 bg-[#0F974A] rounded-full"></div>
            <div className="flex-1">
              <div className="flex justify-between">
                <div>
                  <h4 className="text-sm text-[#27273E]">SL-DA900</h4>
                  <p className="text-[10px] text-[#7B7D9D]">03:14 - 14/03/2025</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium text-[#27273E]">120.000.000đ</p>
                  <p className="text-[10px] text-[#7B7D9D]">+6.000.000đ</p>
                </div>
              </div>
              <div className="flex justify-end mt-1">
                <button className="text-[10px] font-medium text-[#ED1C24]">Chi tiết</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Edit User Info Drawer */}
      <Drawer isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)}>
        <EditUserInfoDrawer
          user={user}
          onClose={() => setIsDrawerOpen(false)}
          onSubmit={handleUpdateUser}
        />
      </Drawer>
    </div>
  );
}; 