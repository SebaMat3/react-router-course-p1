//src/routes/LogoutPage/LogoutPage.jsx

import { useAuth } from '../../hooks/useAuth'; // Import useAuth hook

function LogoutPage() {
  const auth = useAuth(); // Use the useAuth hook to access auth context

  const logout = (e) => {
    e.preventDefault(); // Prevent default form submission
    auth.logout();      // Call the logout function from auth context
  };

  return (
    <>
      <h2>Logout 👋</h2>
      <form onSubmit={logout}>
        <p>Are you sure you want to logout?</p>
        <button type="submit">Logout</button>
      </form>
    </>
  );
}

export { LogoutPage };