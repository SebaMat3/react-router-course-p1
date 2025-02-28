//import { useAuth } from '../../hooks/useAuth'; 
import { useOutletContext } from 'react-router-dom'; 
import { useEffect, useState } from 'react'; // Import useState and useEffect
import { useParams } from 'react-router-dom'; // Import useParams
import { fetchUserByUsername } from '../../hooks/auth/users'; // Import fetchUserByUsername
//import { users } from '../../hooks/auth/users';

function ProfilePage() {
  const auth = useOutletContext();
  //const auth = useAuth(); 
  const currentUser = auth.user; 
  const { username } = useParams(); 

  const [profileUser, setProfileUser] = useState(null); // State to hold profile user data
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null);     // Error state
  const [isEditing, setIsEditing] = useState(false); // ADD isEditing state
  const [editName, setEditName] = useState(''); // State for editing name
  const [editBio, setEditBio] = useState('');   // State for editing bio
  const [editEmail, setEditEmail] = useState(''); // State for editing email

  useEffect(() => {
    const loadProfile = async () => {

      setLoading(true);
      setError(null);
      try {
        const user = await fetchUserByUsername(username); // Fetch user data

        if (user) {
          setProfileUser(user);
          setEditName(user.name);     // Initialize edit form state
          setEditBio(user.bio);       // Initialize edit form state
          setEditEmail(user.email);     // Initialize edit form state
        } else {
          setError({ message: 'User not found' }); // Set error if user not found
        }
      } catch (err) {

        setError(err); 
      } finally {
        setLoading(false); // Set loading to false regardless of result
      }
    };

    loadProfile();
  }, [username]); // Effect runs when username in params changes

  const handleEditClick = () => { // ADD handleEditClick function
    setIsEditing(true);
  };

  const handleCancelEdit = () => { // ADD handleCancelEdit function
    setIsEditing(false);
  };
  /**
   * Future: In a real application, this function would:
   * 1. Send the updated profile data (editName, editBio, editEmail) to a backend server.
   * 2. The backend would then update the user's profile in the database.
   * 3. Upon successful update, the backend would return the updated user data.
   * 4. We would then update the local profileUser state with the data received from the backend.
   */
  const handleSaveProfile = (e) => { // ADD handleSaveProfile function
    e.preventDefault(); // Prevent default form submission

    // Temporarily update profileUser state with edited values
    setProfileUser(prevUser => ({
      ...prevUser,
      name: editName,
      bio: editBio,
      email: editEmail,
    }));
    setIsEditing(false); // Exit edit mode after "saving"
  };

  if (loading) {
    return <p>Loading profile...</p>; // Or a loading spinner
  }

  if (error) {
    return <p className="error">Error loading profile: {error.message}</p>;
  }

  if (!profileUser) {
    return <p>Could not load profile.</p>; // Fallback in case user is still null after loading
  }


  const canEdit = currentUser && (currentUser.name === profileUser.name || currentUser.role.admin);

  return (
    <>
      <h2>Profile 👤</h2>
      <h2>Welcome to {profileUser.name}'s profile</h2>

      {isEditing ? ( // Conditional rendering based on isEditing
        <div>
          <h3>Edit Profile</h3>
          <form onSubmit={handleSaveProfile}> {/* Edit Form */}
            <label htmlFor="edit-name">Name:</label>
            <input
              type="text"
              id="edit-name"
              name="name"
              value={editName}
              onChange={(e) => setEditName(e.target.value)}
            />

            <label htmlFor="edit-bio">Bio:</label>
            <textarea
              id="edit-bio"
              name="bio"
              value={editBio}
              onChange={(e) => setEditBio(e.target.value)}
            />

            <label htmlFor="edit-email">Email:</label>
            <input
              type="email"
              id="edit-email"
              name="email"
              value={editEmail}
              onChange={(e) => setEditEmail(e.target.value)}
            />


            <div className="edit-buttons">
              <button type="submit">Save Changes</button>
              <button type="button" onClick={handleCancelEdit}>Cancel Edit</button>
            </div>
          </form>
        </div>
      ) : (
        <div>
          <p>Username: {profileUser.name}</p>
          <p>Role: {profileUser.role.description}</p>
          <p>Email: {profileUser.email}</p>     {/* Display Email */}
          <p>Bio: {profileUser.bio}</p>       {/* Display Bio */}
          {canEdit && (
            <div>
              <button onClick={handleEditClick}>Edit Profile</button> {/* Edit button - toggles edit mode */}
            </div>
          )}
        </div>
      )}
    </>
  );
}

export { ProfilePage };