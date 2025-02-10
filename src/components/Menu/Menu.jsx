//import React from 'react';
import { NavLink } from 'react-router-dom'; // 👈 Import NavLink

const routes = []; // Define routes array
routes.push({ to: '/', text: 'Home' });
routes.push({ to: '/blog', text: 'Blog' });
routes.push({ to: '/profile', text: 'Profile' });

function Menu() {
  return (
    <nav>
      <ul>
        {routes.map(route => ( // Map over routes array
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