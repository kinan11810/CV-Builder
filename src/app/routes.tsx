import React from 'react';
import { Routes, Route } from 'react-router-dom';
import CVbuilderPage from '../pages/CVbuilder';
import PaymentPage from '../pages/Payment';

const AppRoutes = () => {
  return (
    <Routes>
      {/* الصفحة الرئيسية - CV Builder */}
      <Route path="/" element={<CVbuilderPage />} />

      {/* صفحة الدفع المستقلة */}
      <Route path="/payment" element={<PaymentPage />} />
    </Routes>
  );
};

export default AppRoutes;
