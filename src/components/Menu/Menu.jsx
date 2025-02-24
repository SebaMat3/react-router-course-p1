//src/components/Menu/Menu.jsx

import { NavLink} from 'react-router-dom';
//import { useAuth } from '../../hooks/useAuth';

const routes = []; 
routes.push({ to: '/', text: 'Home', private: false });
routes.push({ to: '/blog', text: 'Blog', private: false });
routes.push({ to: '/blog/create', text: 'Create Post', private: true, create: true }); 
routes.push({ to: '/profile', text: 'Profile', private: true });
routes.push({ to: '/login', text: 'Login', private: false, publicOnly:true });  
routes.push({ to: '/logout', text: 'Logout', private: true }); 
routes.push({ to: '/beta', text: 'Beta Features', private: true, beta: true }); 
routes.push({ to: '/premium', text: 'Premium Content', private: true, premium: true }); 

function Menu({ auth }) {
  

  return (
    <nav>
      <ul>
        {routes.map(route => {
          if (route.publicOnly && auth.user) return null;
          if (route.private && !auth.user) return null;
          if (route.create && !auth.user?.role.permissions.create_blogposts) return null;
          if (route.beta && !auth.user?.role.permissions.beta_access) return null; // Check beta access
          if (route.premium && !auth.user?.role.permissions.premium_access) return null; // Check premium access
          
          return (
            <li key={route.to}> 
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
          )    
        })}
      </ul>
    </nav>
  );
}

export { Menu };