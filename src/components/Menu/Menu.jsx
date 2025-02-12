//import React from 'react';
import { NavLink } from 'react-router-dom';

const routes = []; 
routes.push({ to: '/', text: 'Home' });
routes.push({ to: '/blog', text: 'Blog' });
routes.push({ to: '/profile', text: 'Profile' });
routes.push({ to: '/login', text: 'Login' });  // 👈 Added Login
routes.push({ to: '/logout', text: 'Logout' }); // 👈 Added Logout

function Menu() {
  return (
    <nav>
      <ul>
        {routes.map(route => (
          <li key={route.to}> {/* Add a key for React list rendering */}
            <NavLink
              to={route.to}
              end // Use 'end' prop for exact matching
              style={({ isActive }) => ({
                color: isActive ? 'green' : 'red',
              })}
            >
              {route.text}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export { Menu };