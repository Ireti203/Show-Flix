// import React from 'react';

// import { Link } from 'react-router-dom';

// import { routes } from '../config/Router';

// import '../styles/Header.css';

// const Header = () => {
//   return (
//     <header>
//       <nav>
//         <div className='logo'>Movie App</div>
//         <div className='nav-item'>
//           <div className='nav-links'>
//             {routes.map((route) => {
//               if (route.isHeaderElement) {
//                 return (
//                   <li key={route.title}>
//                     <Link to={route.path} className='link'>
//                       {route.title}
//                     </Link>
//                   </li>
//                 );
//               }
//             })}
//           </div>
//         </div>
//       </nav>
//     </header>
//   );
// };

// export default Header;

import React from 'react';
import Logo from '../utils/Logo.svg'
import Search from '../utils/Search.svg'
import Heart from '../utils/Heart.svg'
import '../styles/Layout.css';

const Sidebar = () => {
	return (
		<div className='sidebar'>
            <img src = {Logo} className = 'logo' alt = ''></img>
            <div className='search-icon'>
            <div className='search-box'>
            <img src = {Search} alt =''></img>
            </div>
            <h1 className = "search-text">Search</h1>
            </div>
            <div className='watch-list'>
            <img src = {Heart} className = 'watchlist-icon' alt = ''></img>
            <h1 className = "watchlist-text">Watchlist</h1>
            </div>
		</div>
	);
};

export default Sidebar;