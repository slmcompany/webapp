import axios from 'axios';
import { User } from '../mocks/handlers/auth';
import { Order, Quotation } from '../mocks/handlers/orders';

// Helper function to get auth token from localStorage
const getAuthToken = () => {
  const token = localStorage.getItem('token');
  return token ? `Bearer ${token}` : '';
};

// Helper function to add auth header to requests
const authHeader = () => ({
  headers: { Authorization: getAuthToken() }
});

export interface EnhancedUser extends User {
  ordersCount: number;
  quotationsCount: number;
  activeQuotations: number;
}

export const customerService = {
  getAllCustomers: async (): Promise<EnhancedUser[]> => {
    try {
      const [usersResponse, ordersResponse, quotationsResponse] = await Promise.all([
        axios.get('/api/users', authHeader()),
        axios.get('/api/orders', authHeader()),
        axios.get('/api/quotations', authHeader())
      ]);

      const users: User[] = usersResponse.data || [];
      const orders: Order[] = Array.isArray(ordersResponse.data) ? ordersResponse.data : [];
      const quotations: Quotation[] = Array.isArray(quotationsResponse.data) ? quotationsResponse.data : [];

      // Enhance user data with orders and quotations count
      return users.map((user: User): EnhancedUser => ({
        ...user,
        ordersCount: orders.filter((order: Order) => order.user_id === user.id).length,
        quotationsCount: quotations.filter((quote: Quotation) => quote.user_id === user.id).length,
        activeQuotations: quotations.filter(
          (quote: Quotation) => 
            quote.user_id === user.id && 
            quote.status === 'pending' &&
            new Date(quote.valid_until) > new Date()
        ).length
      }));
    } catch (error) {
      console.error('Error fetching customers:', error);
      throw error;
    }
  },

  getCustomerById: async (id: number): Promise<User> => {
    try {
      const response = await axios.get(`/api/users/${id}`, authHeader());
      return response.data;
    } catch (error) {
      console.error(`Error fetching customer with id ${id}:`, error);
      throw error;
    }
  },

  getCustomerOrders: async (userId: number): Promise<Order[]> => {
    try {
      const response = await axios.get(`/api/users/${userId}/orders`, authHeader());
      return Array.isArray(response.data) ? response.data : [];
    } catch (error) {
      console.error(`Error fetching orders for user ${userId}:`, error);
      throw error;
    }
  },

  getCustomerQuotations: async (userId: number): Promise<Quotation[]> => {
    try {
      const response = await axios.get(`/api/users/${userId}/quotations`, authHeader());
      return Array.isArray(response.data) ? response.data : [];
    } catch (error) {
      console.error(`Error fetching quotations for user ${userId}:`, error);
      throw error;
    }
  },

  createCustomer: async (customer: Omit<User, 'id'>): Promise<User> => {
    try {
      const response = await axios.post('/api/users', customer, authHeader());
      return response.data;
    } catch (error) {
      console.error('Error creating customer:', error);
      throw error;
    }
  },

  updateCustomer: async (id: number, customer: Partial<User>): Promise<User> => {
    try {
      const response = await axios.put(`/api/users/${id}`, customer, authHeader());
      return response.data;
    } catch (error) {
      console.error(`Error updating customer with id ${id}:`, error);
      throw error;
    }
  },

  deleteCustomer: async (id: number): Promise<void> => {
    try {
      await axios.delete(`/api/users/${id}`, authHeader());
    } catch (error) {
      console.error(`Error deleting customer with id ${id}:`, error);
      throw error;
    }
  }
}; 