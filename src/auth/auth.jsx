//src/auth/auth.jsx

import React from 'react';
import { useNavigate, Navigate } from 'react-router-dom'; // Add Navigate component import


const AuthContext = React.createContext(); // Create a context for authentication

function AuthProvider({ children }) {
  const [user, setUser] = React.useState(null); // State to hold user info (null if not logged in)
  const navigate = useNavigate(); // Hook to enable programmatic navigation

  const login = ({ username }) => {
    setUser({ username }); // Set user in state upon login
    navigate('/profile'); // Redirect to profile page after login
  };

  const logout = () => {
    setUser(null);    // Clear user state on logout
    navigate('/');      // Redirect to homepage after logout
  };

  // Authentication context value to be provided
  const auth = {
    user,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={auth}> {/* Provide auth context to children */}
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  return React.useContext(AuthContext); // Custom hook to consume auth context
}

// 
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