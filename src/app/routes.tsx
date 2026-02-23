import React from 'react';
import { Routes, Route } from 'react-router-dom';
import CVbuilderPage from '../pages/CVbuilder';
import PaymentPage from '../pages/Payment';
import Login from '../pages/Auth/Login'; // ✅ استيراد صفحة Login

const AppRoutes = () => {
  return (
    <Routes>
      {/* الصفحة الرئيسية - CV Builder */}
      <Route path="/" element={<CVbuilderPage />} />

      {/* صفحة الدفع المستقلة */}
      <Route path="/payment" element={<PaymentPage />} />

      {/* صفحة تسجيل الدخول */}
      <Route path="/login" element={<Login />} /> {/* ✅ مسار Login */}
    </Routes>
  );
};

export default AppRoutes;
