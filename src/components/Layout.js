import React from 'react';

import Sidebar from './Sidebar';
import '../styles/Style.css';

const Layout = ({ children }) => {
  return (
    <div className=''>
      <Sidebar />
      {children}
    </div>
  );
};

export default Layout;