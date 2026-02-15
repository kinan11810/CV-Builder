import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './routes';
import { CVProvider } from '../context/CVContext'; // <- المسار المصحح

const App = () => {
  return (
    <CVProvider>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </CVProvider>
  );
};

export default App;
