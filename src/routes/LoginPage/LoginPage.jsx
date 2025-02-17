//src/routes/LoginPage/LoginPage.jsx

import React from 'react';
import { useAuth } from '../../hooks/useAuth'; // Import useAuth hook
import { Navigate } from 'react-router-dom';

function LoginPage() {
  const [username, setUsername] = React.useState(''); // State for username input
  const auth = useAuth(); // Use the useAuth hook to access auth context
	
  const login = (e) => {
    e.preventDefault(); // Prevent default form submission
    auth.login({ username }); // Call the login function from auth context
  };
  
  if(auth.user) {     
    return <Navigate to="/profile" />  
  } 

  return (
    <>
      <h2>Login 🔑</h2>
      <form onSubmit={login}>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={e => setUsername(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
    </>
  );
}

export { LoginPage };