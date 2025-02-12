import { useAuth } from './../../auth/auth'; // 👈 Import useAuth

function ProfilePage() {
  const auth = useAuth(); // 👈 Use useAuth hook

  return (
    <>
      <h2>Profile 👤</h2>
      {auth.user ? ( // ✅ Conditionally render greeting if user is logged in
        <h2>Welcome, {auth.user.username}!</h2>
      ) : (
        <p>Please log in to view your profile.</p> // Or handle unauthenticated state
      )}
    </>
  );
}

export { ProfilePage };