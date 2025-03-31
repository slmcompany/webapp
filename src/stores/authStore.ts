import { create } from 'zustand'

interface User {
  id: number;
  name: string;
  phone: string;
  avatar: string;
  role: {
    name: string;
    description: string | null;
    id: number;
  };
  commission_rate: number;
  total_commission: number;
}

interface AuthState {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
  login: (phone: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  getProfile: () => Promise<void>;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  token: localStorage.getItem('token'),
  isAuthenticated: false,
  isLoading: true,
  error: null,

  login: async (phone: string, password: string) => {
    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ phone, password }),
      });

      if (!response.ok) {
        throw new Error('Đăng nhập thất bại');
      }

      const data = await response.json();
      localStorage.setItem('token', data.token);

      set({
        user: data.user,
        token: data.token,
        isAuthenticated: true,
        error: null,
      });
    } catch (error) {
      console.error('Login failed:', error);
      throw error;
    }
  },

  logout: async () => {
    try {
      const response = await fetch('/api/auth/logout', {
        method: 'POST',
      });

      if (!response.ok) {
        throw new Error('Đăng xuất thất bại');
      }

      localStorage.removeItem('token');
      set({
        user: null,
        token: null,
        isAuthenticated: false,
        error: null,
      });
    } catch (error) {
      console.error('Logout failed:', error);
      throw error;
    }
  },

  getProfile: async () => {
    try {
      const token = localStorage.getItem('token');
      
      if (!token) {
        set({ isLoading: false });
        return;
      }

      const response = await fetch('/api/auth/me', {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error('Lấy thông tin người dùng thất bại');
      }

      const user = await response.json();
      set({
        user,
        isAuthenticated: true,
        error: null,
      });
    } catch (error) {
      console.error('Get profile failed:', error);
      localStorage.removeItem('token');
      set({
        user: null,
        token: null,
        isAuthenticated: false,
        error: 'Lấy thông tin người dùng thất bại',
      });
    } finally {
      set({ isLoading: false });
    }
  }
})); 