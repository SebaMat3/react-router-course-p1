//src/hooks/useAuth.jsx

import React, { useState, createContext, useContext, useCallback } from 'react';
//import { roles } from './auth/roles'; // Future: Fetch roles from database
import { useNavigate, Navigate } from 'react-router-dom'; 
import { fetchUserByUsername } from './auth/users'; // Simulate fetching user from "database"


const AuthContext = createContext(null); // Create a context for authentication

function AuthProvider({ children }) {
  const [user, setUser] = useState(null); // State to hold user info (null if not logged in)
  const navigate = useNavigate(); // Hook to enable programmatic navigation

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

  const logout = useCallback(() => {
    setUser(null);
    navigate('/');
}, [navigate]);

const authContextValue = {
  user,
  login,
  logout,
};

  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  );
}

const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
      throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

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