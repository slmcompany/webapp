import React from 'react';
import { User } from '../mocks/handlers/auth';

interface EditUserInfoDrawerProps {
  user: User;
  onClose: () => void;
  onSubmit: (updatedUser: User) => void;
}

export const EditUserInfoDrawer: React.FC<EditUserInfoDrawerProps> = ({ user, onClose, onSubmit }) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Handle form submission
    onSubmit(user);
  };

  return (
    <div className="flex flex-col pt-2">
      {/* Title */}
      <div className="text-center pb-3">
        <h2 className="text-lg font-bold text-[#27273E]">Cập nhật thông tin liên hệ</h2>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="px-4">
        <div className="space-y-3">
          {/* Name */}
          <div>
            <div className="flex items-center border border-[#ABACC2] rounded-md px-4 py-3">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#7B7D9D" strokeWidth="1.5">
                <circle cx="12" cy="8" r="4"/>
                <rect x="4" y="14" width="16" height="8" rx="4"/>
              </svg>
              <input
                type="text"
                defaultValue={user.name}
                className="ml-2 flex-1 text-sm text-[#27273E] outline-none"
                placeholder="Họ và tên"
              />
            </div>
          </div>

          {/* Phone */}
          <div>
            <div className="flex items-center border border-[#ABACC2] rounded-md px-4 py-3">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#7B7D9D" strokeWidth="1.5">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
              </svg>
              <input
                type="tel"
                defaultValue={user.phone}
                className="ml-2 flex-1 text-sm text-[#27273E] outline-none"
                placeholder="Số điện thoại"
              />
            </div>
          </div>

          {/* Gender */}
          <div>
            <div className="flex items-center border border-[#ABACC2] rounded-md px-4 py-3">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#7B7D9D" strokeWidth="1.5">
                <path d="M12 2a9 9 0 100 18 9 9 0 000-18z"/>
                <path d="M12 15a3 3 0 100-6 3 3 0 000 6z"/>
              </svg>
              <select
                defaultValue="male"
                className="ml-2 flex-1 text-sm text-[#27273E] outline-none bg-transparent"
              >
                <option value="male">Nam</option>
                <option value="female">Nữ</option>
                <option value="other">Khác</option>
              </select>
            </div>
          </div>

          {/* Email */}
          <div>
            <div className="flex items-center border border-[#ABACC2] rounded-md px-4 py-3">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#7B7D9D" strokeWidth="1.5">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <path d="M22 6l-10 7L2 6"/>
              </svg>
              <input
                type="email"
                defaultValue={user.email || ''}
                className="ml-2 flex-1 text-sm text-[#27273E] outline-none"
                placeholder="Email"
              />
            </div>
          </div>

          {/* Address */}
          <div>
            <div className="flex items-center border border-[#ABACC2] rounded-md px-4 py-3">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#7B7D9D" strokeWidth="1.5">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
                <circle cx="12" cy="10" r="3"/>
              </svg>
              <input
                type="text"
                defaultValue={user.address || ''}
                className="ml-2 flex-1 text-sm text-[#27273E] outline-none"
                placeholder="Địa chỉ"
              />
            </div>
          </div>

          {/* City & District */}
          <div className="grid grid-cols-2 gap-3">
            <div className="flex items-center border border-[#ABACC2] rounded-md px-4 py-3">
              <select
                defaultValue="hcm"
                className="flex-1 text-sm text-[#27273E] outline-none bg-transparent"
              >
                <option value="hcm">TP Hồ Chí Minh</option>
                <option value="hn">Hà Nội</option>
              </select>
            </div>
            <div className="flex items-center border border-[#ABACC2] rounded-md px-4 py-3">
              <select
                defaultValue="q1"
                className="flex-1 text-sm text-[#27273E] outline-none bg-transparent"
              >
                <option value="q1">Quận 1</option>
                <option value="q2">Quận 2</option>
              </select>
            </div>
          </div>

          {/* Ward */}
          <div>
            <div className="flex items-center border border-[#ABACC2] rounded-md px-4 py-3">
              <select
                defaultValue="bn"
                className="flex-1 text-sm text-[#27273E] outline-none bg-transparent"
              >
                <option value="bn">Phường Bến Nghé</option>
                <option value="bt">Phường Bến Thành</option>
              </select>
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex gap-4 mt-6 mb-4">
          <button
            type="button"
            onClick={onClose}
            className="flex-1 py-2.5 px-4 border border-[#ABACC2] rounded-md text-sm font-medium text-[#7B7D9D]"
          >
            HỦY
          </button>
          <button
            type="submit"
            className="flex-1 py-2.5 px-4 bg-[#ED1C24] rounded-md text-sm font-medium text-white"
          >
            GỬI THÔNG TIN
          </button>
        </div>
      </form>
    </div>
  );
}; 