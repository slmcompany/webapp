import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../stores/authStore';
import { PhoneIcon, EyeIcon } from '@heroicons/react/24/outline';

// Import images
import splashBg from '../assets/images/_Splash-screen.png';
import lockIcon from '../assets/images/lock-2.png';
import congDongIcon from '../assets/images/cong-dong.png';

interface LoginForm {
  phone: string;
  password: string;
}

export const Login: React.FC = () => {
  const navigate = useNavigate();
  const { login } = useAuthStore();
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState<LoginForm>({
    phone: '',
    password: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setLoading(true);
      await login(formData.phone, formData.password);
      navigate('/');
    } catch (error) {
      alert('Đăng nhập thất bại');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div 
      className="min-h-screen bg-[#ED1C24] flex flex-col bg-cover bg-center"
      style={{ backgroundImage: `url(${splashBg})` }}
    >
      {/* Login Form */}
      <div className="flex-1 flex items-end px-4 pb-[80px]">
        <div className="w-full bg-[rgba(39,39,62,0.6)] backdrop-blur-sm rounded-xl p-6 shadow-lg">
          <h1 className="text-white text-lg font-normal mb-6 text-center">
            Chào mừng đến với SLM
          </h1>

          <form
            onSubmit={handleSubmit}
            className="bg-transparent"
          >
            <div className="space-y-3 bg-transparent">
              <div className="relative bg-transparent">
                <div className="flex items-center border border-[#ABACC2] rounded-md px-4 py-3 bg-white">
                  <PhoneIcon className="w-5 h-5 text-[#7B7D9D]" />
                  <input
                    className="flex-1 ml-2 border-none p-0 text-base text-[#333] placeholder:text-[#7B7D9D] bg-white outline-none"
                    placeholder="Số điện thoại"
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <div className="relative bg-transparent">
                <div className="flex items-center border border-[#ABACC2] rounded-md px-4 py-3 bg-white">
                  <img src={lockIcon} alt="Lock" className="w-5 h-5" />
                  <input
                    className="flex-1 ml-2 border-none p-0 text-base text-[#333] placeholder:text-[#7B7D9D] bg-white outline-none"
                    placeholder="••••••••••••"
                    type={showPassword ? 'text' : 'password'}
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="text-[#7B7D9D] bg-transparent"
                  >
                    <EyeIcon className="w-5 h-5" />
                  </button>
                </div>
              </div>

              <div className="flex gap-2 mt-4 bg-transparent">
                <button
                  type="submit"
                  disabled={loading}
                  className="flex-1 h-[44px] bg-[#ED1C24] text-white font-medium rounded-md flex items-center justify-center disabled:opacity-70"
                >
                  {loading ? 'Đang đăng nhập...' : 'Đăng nhập'}
                </button>
                <button
                  type="button"
                  className="w-[44px] h-[44px] bg-[#FF9295] rounded-md flex items-center justify-center"
                >
                  <img src={congDongIcon} alt="Cộng đồng" className="w-6 h-6" />
                </button>
              </div>

              <button
                type="button"
                className="text-[#ABACC2] text-sm font-medium mt-2 mx-auto block"
                onClick={() => alert('Tính năng đang phát triển')}
              >
                Quên mật khẩu?
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Footer */}
      <div className="fixed bottom-0 left-0 right-0 text-center pb-11 pt-2">
        <p className="text-white text-xs font-medium">
          © Phát triển bởi SLM Investment JSC.
        </p>
      </div>

      {/* Home Indicator */}
      <div className="fixed bottom-2 left-0 right-0 flex justify-center">
        <div className="w-32 h-1 bg-black rounded-full" />
      </div>
    </div>
  );
}; 