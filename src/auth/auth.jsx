//src/auth/auth.jsx

import React from 'react';
import { useNavigate, Navigate } from 'react-router-dom'; // Add Navigate component import

const adminList = ['Irisval','RetaxMaster', 'freddier'];

const AuthContext = React.createContext(); // Create a context for authentication

function AuthProvider({ children }) {
  const [user, setUser] = React.useState(null); // State to hold user info (null if not logged in)
  const navigate = useNavigate(); // Hook to enable programmatic navigation

  const login = ({ username }) => {
    //Check if the logging-in user is in the adminList
    const isAdmin = adminList.find(admin => admin === username);
    // Set user object with username and isAdmin property
    setUser({ username, isAdmin }); // 👈  Adding isAdmin property to user object
    navigate('/profile'); 
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