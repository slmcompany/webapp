import teamPromo from '../assets/images/team-promo.png';
import salesPromo from '../assets/images/sales-promo.png';

export interface Banner {
  id: number;
  image: string;
  title: string;
  link?: string;
  status: 'active' | 'inactive';
  createdAt: string;
  updatedAt: string;
}

const banners: Banner[] = [
  {
    id: 1,
    image: teamPromo,
    title: 'Tham gia cộng đồng',
    link: '/community',
    status: 'active',
    createdAt: '2024-03-30T10:00:00Z',
    updatedAt: '2024-03-30T10:00:00Z'
  },
  {
    id: 2,
    image: salesPromo,
    title: 'Bán hàng dễ dàng',
    link: '/sales',
    status: 'active',
    createdAt: '2024-03-30T10:00:00Z',
    updatedAt: '2024-03-30T10:00:00Z'
  }
];

export const bannerApi = {
  getActiveBanners: async (): Promise<Banner[]> => {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 500));
    return banners.filter(banner => banner.status === 'active');
  },

  getAllBanners: async (): Promise<Banner[]> => {
    await new Promise(resolve => setTimeout(resolve, 500));
    return banners;
  },

  getBannerById: async (id: number): Promise<Banner | undefined> => {
    await new Promise(resolve => setTimeout(resolve, 500));
    return banners.find(banner => banner.id === id);
  },

  createBanner: async (banner: Omit<Banner, 'id' | 'createdAt' | 'updatedAt'>): Promise<Banner> => {
    await new Promise(resolve => setTimeout(resolve, 500));
    const newBanner: Banner = {
      ...banner,
      id: banners.length + 1,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };
    banners.push(newBanner);
    return newBanner;
  },

  updateBanner: async (id: number, updates: Partial<Banner>): Promise<Banner | undefined> => {
    await new Promise(resolve => setTimeout(resolve, 500));
    const index = banners.findIndex(banner => banner.id === id);
    if (index === -1) return undefined;
    
    banners[index] = {
      ...banners[index],
      ...updates,
      updatedAt: new Date().toISOString()
    };
    return banners[index];
  },

  deleteBanner: async (id: number): Promise<boolean> => {
    await new Promise(resolve => setTimeout(resolve, 500));
    const index = banners.findIndex(banner => banner.id === id);
    if (index === -1) return false;
    
    banners.splice(index, 1);
    return true;
  }
}; 