import { http, HttpResponse } from 'msw';

export interface OrderItem {
  id: number;
  product_name: string;
  quantity: number;
  unit_price: number;
  total: number;
}

export interface Order {
  id: number;
  user_id: number;
  order_number: string;
  status: 'pending' | 'processing' | 'completed' | 'cancelled';
  items: OrderItem[];
  total_amount: number;
  created_at: string;
  updated_at: string;
}

export interface QuotationItem {
  id: number;
  product_name: string;
  quantity: number;
  unit_price: number;
  total: number;
}

export interface Quotation {
  id: number;
  user_id: number;
  quotation_number: string;
  status: 'pending' | 'accepted' | 'rejected' | 'expired';
  items: QuotationItem[];
  total_amount: number;
  valid_until: string;
  created_at: string;
  updated_at: string;
}

// Mock data
const orders: Order[] = [
  {
    id: 1,
    user_id: 2,
    order_number: "ORD-2024-001",
    status: "completed",
    items: [
      {
        id: 1,
        product_name: "Sản phẩm A",
        quantity: 2,
        unit_price: 1500000,
        total: 3000000
      },
      {
        id: 2,
        product_name: "Sản phẩm B",
        quantity: 1,
        unit_price: 2000000,
        total: 2000000
      }
    ],
    total_amount: 5000000,
    created_at: "2024-03-15T10:00:00",
    updated_at: "2024-03-15T10:00:00"
  },
  {
    id: 2,
    user_id: 3,
    order_number: "ORD-2024-002",
    status: "processing",
    items: [
      {
        id: 3,
        product_name: "Sản phẩm C",
        quantity: 3,
        unit_price: 800000,
        total: 2400000
      }
    ],
    total_amount: 2400000,
    created_at: "2024-03-16T14:30:00",
    updated_at: "2024-03-16T14:30:00"
  }
];

const quotations: Quotation[] = [
  {
    id: 1,
    user_id: 4,
    quotation_number: "QT-2024-001",
    status: "pending",
    items: [
      {
        id: 1,
        product_name: "Sản phẩm A",
        quantity: 5,
        unit_price: 1500000,
        total: 7500000
      }
    ],
    total_amount: 7500000,
    valid_until: "2024-04-15T00:00:00",
    created_at: "2024-03-15T09:00:00",
    updated_at: "2024-03-15T09:00:00"
  },
  {
    id: 2,
    user_id: 5,
    quotation_number: "QT-2024-002",
    status: "expired",
    items: [
      {
        id: 2,
        product_name: "Sản phẩm B",
        quantity: 2,
        unit_price: 2000000,
        total: 4000000
      },
      {
        id: 3,
        product_name: "Sản phẩm C",
        quantity: 1,
        unit_price: 800000,
        total: 800000
      }
    ],
    total_amount: 4800000,
    valid_until: "2024-03-15T00:00:00",
    created_at: "2024-03-01T11:00:00",
    updated_at: "2024-03-01T11:00:00"
  }
];

export const orderHandlers = [
  // Get all orders
  http.get('/api/orders', ({ request }) => {
    const authHeader = request.headers.get('Authorization');
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return new HttpResponse(null, { status: 401 });
    }
    return HttpResponse.json(orders);
  }),

  // Get orders by user ID
  http.get('/api/users/:userId/orders', ({ params }) => {
    const { userId } = params;
    const userOrders = orders.filter(order => order.user_id === Number(userId));
    return HttpResponse.json(userOrders);
  }),

  // Get all quotations
  http.get('/api/quotations', ({ request }) => {
    const authHeader = request.headers.get('Authorization');
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return new HttpResponse(null, { status: 401 });
    }
    return HttpResponse.json(quotations);
  }),

  // Get quotations by user ID
  http.get('/api/users/:userId/quotations', ({ params }) => {
    const { userId } = params;
    const userQuotations = quotations.filter(quote => quote.user_id === Number(userId));
    return HttpResponse.json(userQuotations);
  })
]; 