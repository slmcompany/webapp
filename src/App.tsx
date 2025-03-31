import React, { useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Login } from './pages/Login';
import Home from './pages/Home';
import Profile from './pages/Profile';
import { ProtectedRoute } from './components/ProtectedRoute';
import { useAuthStore } from './stores/authStore';
import { Gallery } from './pages/Gallery';
import { Products } from './pages/Products';
import { Statistics } from './pages/Statistics';
import { Customer } from './pages/Customer';
import { UserProfile } from './pages/UserProfile';
import { CustomerAddNew } from './pages/CustomerAddNew';
import { SolarMax } from './pages/SolarMax';
import { Eliton } from './pages/Eliton';

export function App() {
  const { isLoading, getProfile } = useAuthStore();

  useEffect(() => {
    getProfile();
  }, [getProfile]);

  if (isLoading) {
    return null;
  }

  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<ProtectedRoute><Home /></ProtectedRoute>} />
      <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/products" element={<ProtectedRoute><Products /></ProtectedRoute>} />
      <Route path="/customer" element={<ProtectedRoute><Customer /></ProtectedRoute>} />
      <Route path="/customers/:id" element={<ProtectedRoute><UserProfile /></ProtectedRoute>} />
      <Route path="/statistics" element={<ProtectedRoute><Statistics /></ProtectedRoute>} />
      <Route path="/customer-add-new" element={<ProtectedRoute><CustomerAddNew /></ProtectedRoute>} />
      <Route path="/solarmax" element={<ProtectedRoute><SolarMax /></ProtectedRoute>} />
      <Route path="/eliton" element={<ProtectedRoute><Eliton /></ProtectedRoute>} />
      
      <Route path="/media" element={
        <ProtectedRoute>
          <div className="p-4">Trang media đang phát triển</div>
        </ProtectedRoute>
      } />

      {/* Catch all route - redirect to home */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
