//src/hooks/useAuth.jsx

import React from 'react';
import { useNavigate, Navigate } from 'react-router-dom'; // Add Navigate component import
import { fetchUserByUsername } from './auth/users'; // Simulate fetching user from "database"

//import { getRoles } from './auth/roles'; // Future: Fetch roles from database


const AuthContext = React.createContext(); // Create a context for authentication

function AuthProvider({ children }) {
  const [user, setUser] = React.useState(null); // State to hold user info (null if not logged in)

  const navigate = useNavigate(); // Hook to enable programmatic navigation
/* 
  const roles = {
    admin: {
      type: 'admin',
      permissions: {
        read: true,
        write: true,
        delete: true,
      },
    },
    editor: {
      type: 'editor',
      permissions: {
        read: true,
        write: true,
        delete: false, // Editors can't delete
      },
    },
    student: {
      type: 'student',
      permissions: {
        read: true,
        write: false, // Students can't write
        delete: false,
      },
    },
  };

  const users = [
    { name: 'ivana', role: roles.admin },
    { name: 'fred', role: roles.admin },
    { name: 'cris', role: roles.admin },
    { name: 'rocio', role: roles.student },
    { name: 'leonel', role: roles.editor },
  ]; */

  const login = async ({ username }) => { // Make login async for simulated API calls
    // Simulate fetching user data from a "database" (users.js)
    const userDetails = await fetchUserByUsername(username); // Async function to mimic API call

    if (userDetails) {
        setUser(userDetails); // Set user with roles from "database"
        navigate('/profile');
    } else {
        // Handle invalid login (e.g., display error message)
        console.error("Login failed: User not found");
        // In a real app, you'd likely set an error state to display to the user
    }
  };

  const logout = () => {
    setUser(null);
    navigate('/');
  };

  const auth = {
    user,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={auth}>
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  return React.useContext(AuthContext);
}

function AuthRoute(props) {
  const auth = useAuth();
  if (!auth.user) {
    return <Navigate to="/login" />
  }

  return props.children;
}

export {
  AuthProvider,
  useAuth,
  AuthRoute,
};