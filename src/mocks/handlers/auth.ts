import { http, HttpResponse } from 'msw'

interface LoginRequest {
  phone: string;
  password: string;
}

export interface User {
  id: number;
  name: string;
  phone: string;
  password: string;
  email: string | null;
  address: string | null;
  tax_code: string | null;
  role_id: number;
  role: {
    id: number;
    name: string;
    description: string | null;
  };
  parent_id: number | null;
  commission_rate: number;
  total_commission: number;
  created_at: string;
  level: 'VIP' | 'Thành viên';
  orders: number;
  status: 'active' | 'potential' | 'inactive';
  last_contact: string | null;
  notes: string | null;
}

// Mock database
const users: User[] = [
  {
    id: 1,
    name: "Nguyễn TIến Mạnh",
    phone: "0964920242",
    password: "slm123",
    email: "manh.nt@example.com",
    address: "Hà Nội",
    tax_code: null,
    role_id: 1,
    role: {
      id: 1,
      name: "admin",
      description: "Quản trị viên"
    },
    parent_id: null,
    commission_rate: 5,
    total_commission: 0,
    created_at: "2025-02-26T14:30:00",
    level: "VIP",
    orders: 25,
    status: "active",
    last_contact: null,
    notes: null
  },
  {
    id: 2,
    name: "Trần Bảo Ngọc",
    phone: "0966874083",
    password: "slm123",
    email: "ngoc.tb@example.com",
    address: "Hồ Chí Minh",
    tax_code: "0123456789",
    role_id: 2,
    role: {
      id: 2,
      name: "level1_agent",
      description: "Đại lý cấp 1"
    },
    parent_id: 1,
    commission_rate: 5,
    total_commission: 2500000,
    created_at: "2025-02-26T14:30:00",
    level: "VIP",
    orders: 18,
    status: "active",
    last_contact: "2024-03-15T10:00:00",
    notes: "Đại lý khu vực miền Nam"
  },
  {
    id: 3,
    name: "Đỗ Thuỳ Dung",
    phone: "0394307569",
    password: "slm123",
    email: "dung.dt@example.com",
    address: "Đà Nẵng",
    tax_code: "0987654321",
    role_id: 3,
    role: {
      id: 3,
      name: "level2_agent",
      description: "Đại lý cấp 2"
    },
    parent_id: 2,
    commission_rate: 5,
    total_commission: 1200000,
    created_at: "2025-02-26T14:30:00",
    level: "Thành viên",
    orders: 12,
    status: "active",
    last_contact: "2024-03-16T14:30:00",
    notes: "Đại lý khu vực miền Trung"
  },
  {
    id: 4,
    name: "Nguyễn Đình Linh",
    phone: "0917599966",
    password: "slm123",
    email: "linh.nd@example.com",
    address: "Hải Phòng",
    tax_code: null,
    role_id: 4,
    role: {
      id: 4,
      name: "customer",
      description: "Khách hàng"
    },
    parent_id: 3,
    commission_rate: 0,
    total_commission: 0,
    created_at: "2025-02-26T14:30:00",
    level: "Thành viên",
    orders: 5,
    status: "active",
    last_contact: "2024-03-15T09:00:00",
    notes: "Khách hàng thường xuyên"
  },
  {
    id: 5,
    name: "Lê Thị Mai",
    phone: "0912345678",
    password: "slm123",
    email: "mai.lt@example.com",
    address: "Hà Nội",
    tax_code: null,
    role_id: 4,
    role: {
      id: 4,
      name: "customer",
      description: "Khách hàng"
    },
    parent_id: 2,
    commission_rate: 0,
    total_commission: 0,
    created_at: "2024-03-01T09:00:00",
    level: "Thành viên",
    orders: 0,
    status: "potential",
    last_contact: "2024-03-01T11:00:00",
    notes: "Quan tâm đến sản phẩm B, đang chờ phản hồi báo giá"
  },
  {
    id: 6,
    name: "Phạm Văn Hoàng",
    phone: "0923456789",
    password: "slm123",
    email: "hoang.pv@example.com",
    address: "Hồ Chí Minh",
    tax_code: null,
    role_id: 4,
    role: {
      id: 4,
      name: "customer",
      description: "Khách hàng"
    },
    parent_id: 3,
    commission_rate: 0,
    total_commission: 0,
    created_at: "2024-02-15T14:00:00",
    level: "Thành viên",
    orders: 0,
    status: "potential",
    last_contact: "2024-03-10T15:30:00",
    notes: "Đã gửi báo giá, đang thương lượng giá"
  },
  {
    id: 7,
    name: "Trần Thị Hương",
    phone: "0934567890",
    password: "slm123",
    email: "huong.tt@example.com",
    address: "Hà Nội",
    tax_code: null,
    role_id: 4,
    role: {
      id: 4,
      name: "customer",
      description: "Khách hàng"
    },
    parent_id: 2,
    commission_rate: 0,
    total_commission: 0,
    created_at: "2024-01-15T10:00:00",
    level: "VIP",
    orders: 8,
    status: "active",
    last_contact: "2024-03-18T09:30:00",
    notes: "Khách hàng VIP, mua hàng thường xuyên"
  },
  {
    id: 8,
    name: "Nguyễn Văn Thành",
    phone: "0945678901",
    password: "slm123",
    email: "thanh.nv@example.com",
    address: "Đà Nẵng",
    tax_code: null,
    role_id: 4,
    role: {
      id: 4,
      name: "customer",
      description: "Khách hàng"
    },
    parent_id: 3,
    commission_rate: 0,
    total_commission: 0,
    created_at: "2024-02-01T14:00:00",
    level: "Thành viên",
    orders: 3,
    status: "active",
    last_contact: "2024-03-17T15:45:00",
    notes: "Khách hàng mới, đã mua 3 đơn"
  },
  {
    id: 9,
    name: "Lê Văn Hùng",
    phone: "0956789012",
    password: "slm123",
    email: "hung.lv@example.com",
    address: "Hải Phòng",
    tax_code: null,
    role_id: 4,
    role: {
      id: 4,
      name: "customer",
      description: "Khách hàng"
    },
    parent_id: 2,
    commission_rate: 0,
    total_commission: 0,
    created_at: "2024-01-20T11:00:00",
    level: "Thành viên",
    orders: 2,
    status: "active",
    last_contact: "2024-03-16T10:15:00",
    notes: "Khách hàng mới từ giới thiệu"
  }
];

// Add new handler to get all users
export const authHandlers = [
  // Login handler
  http.post('/api/auth/login', async ({ request }) => {
    const { phone, password } = await request.json() as LoginRequest
    
    // Check if both phone and password are provided
    if (!phone || !password) {
      return new HttpResponse(
        JSON.stringify({ 
          message: 'Phone and password are required'
        }), 
        { status: 400 }
      )
    }

    const user = users.find(u => u.phone === phone)
    
    // Check if password matches
    if (!user || password !== user.password) {
      return new HttpResponse(
        JSON.stringify({ 
          message: 'Invalid phone number or password'
        }), 
        { status: 401 }
      )
    }

    const token = 'mock-jwt-token-' + user.id

    return HttpResponse.json({
      user,
      token
    })
  }),

  // Get current user handler
  http.get('/api/auth/me', ({ request }) => {
    const authHeader = request.headers.get('Authorization')
    
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return new HttpResponse(null, { status: 401 })
    }

    const user = users[0] // For demo, always return first user
    
    return HttpResponse.json(user)
  }),

  // Get all users handler
  http.get('/api/users', ({ request }) => {
    const authHeader = request.headers.get('Authorization')
    
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return new HttpResponse(null, { status: 401 })
    }
    
    return HttpResponse.json(users)
  }),

  // Logout handler
  http.post('/api/auth/logout', () => {
    return new HttpResponse(null, { status: 200 })
  })
] 