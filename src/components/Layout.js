import React from 'react';

import Sidebar from './Sidebar';
import '../styles/Layout.css';

const Layout = ({ children }) => {
  return (
    <div className=''>
      <Sidebar />
      {children}
    </div>
  );
};

export default Layout;