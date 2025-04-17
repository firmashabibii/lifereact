import React from 'react';
import Sidebar from './Sidebar';
import { Outlet } from 'react-router-dom';
console.log('Sidebar:', Sidebar);

const MainLayout = () => {
  return (
    <div style={{ display: 'flex', minHeight: '100vh' }}>
      <Sidebar />
      <div style={{ flex: 1, padding: '20px' }}>
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;