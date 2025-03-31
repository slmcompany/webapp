import solarMaxImage from '../assets/images/ban-chay-sample.png';

export interface ProductCombo {
  id: string;
  name: string;
  description: string;
  originalPrice: number;
  discountedPrice: number;
  discountPercent: number;
  image: string;
  products: {
    id: string;
    name: string;
    image: string;
    quantity: number;
  }[];
  soldCount: number;
  remainingCount: number;
  status: 'active' | 'inactive' | 'out_of_stock';
  createdAt: string;
  updatedAt: string;
  type: 'combo' | 'single';
  badge?: string;
}

const bestSellerProducts: ProductCombo[] = [
  {
    id: '1',
    name: 'Combo On - Grid | 8.5kW | 1 pha',
    description: 'Hệ thống điện mặt trời On-Grid 8.5kW 1 pha chất lượng cao',
    originalPrice: 75200000,
    discountedPrice: 75200000,
    discountPercent: 0,
    image: solarMaxImage,
    products: [
      {
        id: 'p1',
        name: 'Tấm pin mặt trời 610 Wp (JA Solar)',
        image: '/images/products/solar-panel.png',
        quantity: 14
      },
      {
        id: 'p2',
        name: 'Biến tần On - Grid 10 kW (invt)',
        image: '/images/products/inverter.png',
        quantity: 1
      },
      {
        id: 'p3',
        name: 'Hệ khung và giá đỡ nhôm cao cấp',
        image: '/images/products/mounting.png',
        quantity: 1
      },
      {
        id: 'p4',
        name: 'Bộ tủ điện năng lượng mặt trời',
        image: '/images/products/electric-box.png',
        quantity: 1
      }
    ],
    soldCount: 156,
    remainingCount: 50,
    status: 'active',
    createdAt: '2024-03-01T00:00:00Z',
    updatedAt: '2024-03-01T00:00:00Z',
    type: 'combo',
    badge: 'ON-GRID'
  },
  {
    id: '2',
    name: 'Combo On - Grid | 8.5kW | 3 pha',
    description: 'Hệ thống điện mặt trời On-Grid 8.5kW 3 pha chất lượng cao',
    originalPrice: 79500000,
    discountedPrice: 79500000,
    discountPercent: 0,
    image: solarMaxImage,
    products: [
      {
        id: 'p5',
        name: 'Tấm pin mặt trời 610 Wp (JA Solar)',
        image: '/images/products/solar-panel.png',
        quantity: 14
      },
      {
        id: 'p6',
        name: 'Biến tần On - Grid 3 pha 10 kW (invt)',
        image: '/images/products/inverter.png',
        quantity: 1
      },
      {
        id: 'p7',
        name: 'Hệ khung và giá đỡ nhôm cao cấp',
        image: '/images/products/mounting.png',
        quantity: 1
      },
      {
        id: 'p8',
        name: 'Bộ tủ điện năng lượng mặt trời',
        image: '/images/products/electric-box.png',
        quantity: 1
      }
    ],
    soldCount: 134,
    remainingCount: 45,
    status: 'active',
    createdAt: '2024-03-01T00:00:00Z',
    updatedAt: '2024-03-01T00:00:00Z',
    type: 'combo',
    badge: 'ON-GRID'
  },
  {
    id: '3',
    name: 'Combo On - Grid | 11kW | 3 pha',
    description: 'Hệ thống điện mặt trời On-Grid 11kW 3 pha chất lượng cao',
    originalPrice: 92500000,
    discountedPrice: 92500000,
    discountPercent: 0,
    image: solarMaxImage,
    products: [
      {
        id: 'p9',
        name: 'Tấm pin mặt trời 610 Wp (JA Solar)',
        image: '/images/products/solar-panel.png',
        quantity: 18
      },
      {
        id: 'p10',
        name: 'Biến tần On - Grid 3 pha 10 kW (invt)',
        image: '/images/products/inverter.png',
        quantity: 1
      },
      {
        id: 'p11',
        name: 'Hệ khung và giá đỡ nhôm cao cấp',
        image: '/images/products/mounting.png',
        quantity: 1
      },
      {
        id: 'p12',
        name: 'Bộ tủ điện năng lượng mặt trời',
        image: '/images/products/electric-box.png',
        quantity: 1
      }
    ],
    soldCount: 98,
    remainingCount: 35,
    status: 'active',
    createdAt: '2024-03-01T00:00:00Z',
    updatedAt: '2024-03-01T00:00:00Z',
    type: 'combo',
    badge: 'ON-GRID'
  },
  {
    id: '4',
    name: 'Combo Off - Grid | 5kW | 1 pha',
    description: 'Hệ thống điện mặt trời Off-Grid 5kW 1 pha với pin lưu trữ',
    originalPrice: 83300000,
    discountedPrice: 83300000,
    discountPercent: 0,
    image: solarMaxImage,
    products: [
      {
        id: 'p13',
        name: 'Tấm pin mặt trời 610 Wp (JA Solar)',
        image: '/images/products/solar-panel.png',
        quantity: 8
      },
      {
        id: 'p14',
        name: 'Biến tần Off - Grid 1 pha 5 kW (Solis)',
        image: '/images/products/inverter.png',
        quantity: 1
      },
      {
        id: 'p15',
        name: 'Pin lưu trữ áp thấp 5,12 kWh (Dyness)',
        image: '/images/products/battery.png',
        quantity: 1
      },
      {
        id: 'p16',
        name: 'Hệ khung và giá đỡ nhôm cao cấp',
        image: '/images/products/mounting.png',
        quantity: 1
      },
      {
        id: 'p17',
        name: 'Bộ tủ điện năng lượng mặt trời',
        image: '/images/products/electric-box.png',
        quantity: 1
      }
    ],
    soldCount: 76,
    remainingCount: 30,
    status: 'active',
    createdAt: '2024-03-01T00:00:00Z',
    updatedAt: '2024-03-01T00:00:00Z',
    type: 'combo',
    badge: 'OFF-GRID'
  }
];

// Mock API functions
export const bestSellerApi = {
  // Lấy tất cả combo đang active
  getActiveCombos: async (): Promise<ProductCombo[]> => {
    // Giả lập delay API
    await new Promise(resolve => setTimeout(resolve, 800));
    return bestSellerProducts.filter(combo => combo.status === 'active');
  },

  // Lấy chi tiết một combo
  getComboById: async (id: string): Promise<ProductCombo | null> => {
    await new Promise(resolve => setTimeout(resolve, 500));
    const combo = bestSellerProducts.find(c => c.id === id);
    return combo || null;
  },

  // Lấy danh sách combo theo trang
  getCombos: async (page: number = 1, limit: number = 10): Promise<{
    data: ProductCombo[];
    total: number;
    page: number;
    totalPages: number;
  }> => {
    await new Promise(resolve => setTimeout(resolve, 800));
    
    const start = (page - 1) * limit;
    const end = start + limit;
    const data = bestSellerProducts.slice(start, end);
    
    return {
      data,
      total: bestSellerProducts.length,
      page,
      totalPages: Math.ceil(bestSellerProducts.length / limit)
    };
  },

  // Lấy top combo bán chạy nhất
  getTopSellingCombos: async (limit: number = 5): Promise<ProductCombo[]> => {
    await new Promise(resolve => setTimeout(resolve, 500));
    return [...bestSellerProducts]
      .sort((a, b) => b.soldCount - a.soldCount)
      .slice(0, limit);
  }
}; 