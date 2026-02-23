// src/app/App.tsx
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './routes';
import { CVProvider } from '../context/CVContext';
import { UserProvider } from '../context/UserContext'; // ✅ إضافة UserProvider

const App: React.FC = () => {
  return (
    <UserProvider>
      <CVProvider>
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </CVProvider>
    </UserProvider>
  );
};

export default App;
