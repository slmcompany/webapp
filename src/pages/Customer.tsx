import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import { customerService } from '../services/customerService';
import { User } from '../mocks/handlers/auth';

const Customer: React.FC = () => {
  const [customers, setCustomers] = useState<User[]>([]);

  useEffect(() => {
    const fetchCustomers = async () => {
      const response = await customerService.getAllCustomers();
      setCustomers(response);
    };
    fetchCustomers();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-4">Customers</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {customers.map((customer) => (
            <div key={customer.id} className="bg-white rounded-lg shadow p-4">
              <h2 className="text-lg font-semibold">{customer.name}</h2>
              <p className="text-gray-600">{customer.phone}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Customer; 