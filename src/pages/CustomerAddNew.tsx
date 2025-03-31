import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import solarMaxLogo from '../assets/images/solarmax-logo.png';
import elitonLogo from '../assets/images/eliton-logo.png';

interface CustomerFormData {
  name: string;
  phone: string;
  gender: 'male' | 'female' | 'other';
  email: string;
  address: string;
  city: string;
  district: string;
  ward: string;
  note: string;
  interestedProduct: 'solar' | 'eliton' | null;
}

export const CustomerAddNew: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<CustomerFormData>({
    name: '',
    phone: '',
    gender: 'male',
    email: '',
    address: '',
    city: '',
    district: '',
    ward: '',
    note: '',
    interestedProduct: null
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Handle form submission
    console.log(formData);
  };

  const handleProductSelect = (product: 'solar' | 'eliton') => {
    setFormData(prev => ({
      ...prev,
      interestedProduct: prev.interestedProduct === product ? null : product
    }));
  };

  return (
    <div className="min-h-screen bg-white">
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
          <h1 className="text-lg font-medium text-[#27273E] absolute left-1/2 -translate-x-1/2 whitespace-nowrap overflow-hidden text-ellipsis max-w-[240px]">
            Thêm khách hàng tiềm năng
          </h1>
          <button className="w-8 h-8 flex items-center justify-center">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#7B7D9D" strokeWidth="1.5">
              <circle cx="12" cy="12" r="10"/>
              <path d="M12 16v-4m0-4h.01"/>
            </svg>
          </button>
        </div>
      </div>

      {/* Form */}
      <div className="p-4">
        <form onSubmit={handleSubmit} className="space-y-8 mb-48">
          {/* Customer Information */}
          <div className="space-y-4">
            <h2 className="text-xs font-bold text-[#7B7D9D]">THÔNG TIN KHÁCH HÀNG</h2>
            
            <div className="space-y-3">
              {/* Name */}
              <div>
                <div className="flex items-center border border-[#ABACC2] rounded-md px-4 py-3 bg-white">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#7B7D9D" strokeWidth="1.5">
                    <circle cx="12" cy="8" r="4"/>
                    <rect x="4" y="14" width="16" height="8" rx="4"/>
                  </svg>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="ml-2 flex-1 text-sm text-[#27273E] outline-none"
                    placeholder="Họ và tên*"
                    required
                  />
                </div>
              </div>

              {/* Phone */}
              <div>
                <div className="flex items-center border border-[#ABACC2] rounded-md px-4 py-3 bg-white">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#7B7D9D" strokeWidth="1.5">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
                  </svg>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="ml-2 flex-1 text-sm text-[#27273E] outline-none"
                    placeholder="Số điện thoại*"
                    required
                  />
                </div>
              </div>

              {/* Gender */}
              <div>
                <div className="flex items-center border border-[#ABACC2] rounded-md px-4 py-3 bg-white">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#7B7D9D" strokeWidth="1.5">
                    <path d="M12 2a9 9 0 100 18 9 9 0 000-18z"/>
                    <path d="M12 15a3 3 0 100-6 3 3 0 000 6z"/>
                  </svg>
                  <select
                    value={formData.gender}
                    onChange={(e) => setFormData({...formData, gender: e.target.value as 'male' | 'female' | 'other'})}
                    className="ml-2 flex-1 text-sm text-[#27273E] outline-none bg-transparent appearance-none"
                  >
                    <option value="male">Nam</option>
                    <option value="female">Nữ</option>
                    <option value="other">Khác</option>
                  </select>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="text-[#7B7D9D] pointer-events-none">
                    <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>

              {/* Email */}
              <div>
                <div className="flex items-center border border-[#ABACC2] rounded-md px-4 py-3 bg-white">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#7B7D9D" strokeWidth="1.5">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <path d="M22 6l-10 7L2 6"/>
                  </svg>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="ml-2 flex-1 text-sm text-[#27273E] outline-none"
                    placeholder="Email"
                  />
                </div>
              </div>

              {/* Address */}
              <div>
                <div className="flex items-center border border-[#ABACC2] rounded-md px-4 py-3 bg-white">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#7B7D9D" strokeWidth="1.5">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                  <input
                    type="text"
                    value={formData.address}
                    onChange={(e) => setFormData({...formData, address: e.target.value})}
                    className="ml-2 flex-1 text-sm text-[#27273E] outline-none"
                    placeholder="Số Nhà, Tên Đường"
                  />
                </div>
              </div>

              {/* City & District */}
              <div className="grid grid-cols-2 gap-3">
                <div className="flex items-center border border-[#ABACC2] rounded-md px-4 py-3 bg-white relative">
                  <select
                    value={formData.city}
                    onChange={(e) => setFormData({...formData, city: e.target.value})}
                    className="w-full text-sm text-[#27273E] outline-none bg-transparent appearance-none"
                  >
                    <option value="" className="text-[#7B7D9D]">Tỉnh/TP</option>
                    <option value="hcm">TP Hồ Chí Minh</option>
                    <option value="hn">Hà Nội</option>
                  </select>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="absolute right-4 top-1/2 -translate-y-1/2 text-[#7B7D9D] pointer-events-none">
                    <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="flex items-center border border-[#ABACC2] rounded-md px-4 py-3 bg-white relative">
                  <select
                    value={formData.district}
                    onChange={(e) => setFormData({...formData, district: e.target.value})}
                    className="w-full text-sm text-[#27273E] outline-none bg-transparent appearance-none"
                  >
                    <option value="" className="text-[#7B7D9D]">Quận, Huyện</option>
                    <option value="q1">Quận 1</option>
                    <option value="q2">Quận 2</option>
                  </select>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="absolute right-4 top-1/2 -translate-y-1/2 text-[#7B7D9D] pointer-events-none">
                    <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>

              {/* Ward */}
              <div>
                <div className="flex items-center border border-[#ABACC2] rounded-md px-4 py-3 bg-white relative">
                  <select
                    value={formData.ward}
                    onChange={(e) => setFormData({...formData, ward: e.target.value})}
                    className="w-full text-sm text-[#27273E] outline-none bg-transparent appearance-none"
                  >
                    <option value="" className="text-[#7B7D9D]">Phường, Xã</option>
                    <option value="bn">Phường Bến Nghé</option>
                    <option value="bt">Phường Bến Thành</option>
                  </select>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="absolute right-4 top-1/2 -translate-y-1/2 text-[#7B7D9D] pointer-events-none">
                    <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Interested Products */}
          <div className="space-y-4">
            <h2 className="text-xs font-bold text-[#7B7D9D] leading-[1.67]">SẢN PHẨM QUAN TÂM</h2>
            <div className="flex flex-col gap-2">
              <div 
                onClick={() => handleProductSelect('solar')}
                className={`bg-white rounded-lg shadow-[0px_1px_3px_0px_rgba(39,39,62,0.16)] p-4 flex items-center relative h-[72px] cursor-pointer transition-colors ${
                  formData.interestedProduct === 'solar' ? 'border border-[#12B669]' : ''
                }`}
              >
                <img src={solarMaxLogo} alt="Solar" className="h-8" />
                {formData.interestedProduct === 'solar' && (
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 w-6 h-6 bg-[#12B669] rounded-xl flex items-center justify-center">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M13.3332 4L5.99984 11.3333L2.6665 8" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                )}
              </div>
              {formData.interestedProduct === 'solar' && (
                <div className="flex">
                  <button className="flex items-center gap-2 py-2 px-4 bg-[#f5f5f8] rounded-full text-sm text-[#7B7D9D]">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="#7B7D9D" strokeWidth="1.5">
                      <path d="M10 4V16M4 10H16" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    Thêm sản phẩm
                  </button>
                </div>
              )}
              <div 
                onClick={() => handleProductSelect('eliton')}
                className={`bg-white rounded-lg shadow-[0px_1px_3px_0px_rgba(39,39,62,0.16)] p-4 flex items-center relative h-[72px] cursor-pointer transition-colors ${
                  formData.interestedProduct === 'eliton' ? 'border border-[#12B669]' : ''
                }`}
              >
                <img src={elitonLogo} alt="Eliton" className="h-8" />
                {formData.interestedProduct === 'eliton' && (
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 w-6 h-6 bg-[#12B669] rounded-xl flex items-center justify-center">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M13.3332 4L5.99984 11.3333L2.6665 8" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                )}
              </div>
              {formData.interestedProduct === 'eliton' && (
                <div className="flex">
                  <button className="flex items-center gap-2 py-2 px-4 bg-[#f5f5f8] rounded-full text-sm text-[#7B7D9D]">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="#7B7D9D" strokeWidth="1.5">
                      <path d="M10 4V16M4 10H16" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    Thêm sản phẩm
                  </button>
                </div>
              )}
              {!formData.interestedProduct && (
                <div className="flex">
                  <button className="flex items-center gap-2 py-2 px-4 bg-[#f5f5f8] rounded-full text-sm text-[#7B7D9D]">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="#7B7D9D" strokeWidth="1.5">
                      <path d="M10 4V16M4 10H16" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    Thêm sản phẩm
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Note */}
          <div className="space-y-4">
            <h2 className="text-xs font-bold text-[#7B7D9D]">GHI CHÚ</h2>
            <div className="flex items-center border border-[#ABACC2] rounded-md px-4 py-3 bg-white">
              <textarea
                value={formData.note}
                onChange={(e) => setFormData({...formData, note: e.target.value})}
                className="w-full text-sm text-[#27273E] outline-none resize-none"
                placeholder="Thêm ghi chú về khách hàng"
                rows={4}
              />
            </div>
          </div>
        </form>
      </div>

      {/* Footer */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-[#C4C4D4]">
        <div className="p-4 text-[10px] text-[#27273E] leading-relaxed">
          Tôi xác nhận thông tin đã cung cấp là chính xác và phù hợp với yêu cầu của SLM Agent App, đồng thời Xác nhận rằng Tôi đã Đọc và Chấp thuận các Điều khoản & Điều kiện của ứng dụng trước khi tiến hành gửi.
        </div>
        <div className="flex gap-4 px-4 py-3">
          <button
            type="button"
            onClick={() => navigate(-1)}
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
      </div>
    </div>
  );
}; 