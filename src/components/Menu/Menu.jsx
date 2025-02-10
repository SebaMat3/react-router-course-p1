//import React from 'react';
import { NavLink } from 'react-router-dom'; // 👈 Import NavLink


function Menu() {
  return (
    <nav>
      <ul>
        <li>
{/*       <NavLink
            to="/"
            className={() => ''} // Example: Dynamic class (can be a function)
            style={() => ({ background: '#fff' })} // Example: Dynamic style (can be a function)
          >
            Home
          </NavLink> */}
          <NavLink
            to="/"
            end // 👈  Important:  Match path exactly
            style={({ isActive }) => ({ // Style function receiving isActive
              color: isActive ? 'green' : 'red', // Green if active, red if not
              fontWeight: isActive ? 'bold' : 'normal', // Bold if active
            })}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/blog">Blog</NavLink>
        </li>
        <li>
          <NavLink to="/profile">Profile</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export { Menu };