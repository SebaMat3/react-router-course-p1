import { useAuth } from '../../hooks/useAuth'; 

function ProfilePage() {
  const auth = useAuth();

  return (
    <>
      <h2>Profile 👤</h2>    
			<h2>Welcome {auth.user.username}</h2>
    </>
  );
}

export { ProfilePage };