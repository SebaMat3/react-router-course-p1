//src/routes/BlogPost/BlogPost.jsx

import {useState} from 'react';
import { useNavigate, useParams, useOutletContext } from 'react-router-dom';
import DOMPurify from 'dompurify';
console.log("Imported blogdata:", blogdata);
//import { roles } from './auth/roles'; // Future: Fetch roles from database
import EditBlog from '../../features/Blog/components/EditBlog/EditBlog';
import DeleteConfirmationModal from '../../features/Blog/components/DeleteConfirmationModal/DeleteConfirmationModal'; // Import the modal
import { blogdata } from '../../Data/blogdata';

function BlogPost() {
  console.log('blogdata before finding post: ', + blogdata); 
  const navigate = useNavigate();
  const { slug } = useParams();

  const auth = useOutletContext(); // Get auth from context 
  const [editing, setEditing] = useState(false); // State to control EditBlog visibility
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false); // State for modal visibility
  
  //const blogpost = blogdata.find(post => post.slug === slug);
  const blogpost = blogdata.find(post => {
    return post.slug === slug;
  });

  console.log('blogdata after finding post: ', + blogdata); 

  if (!blogpost) {
    return <p>Blog post not found 😞</p>;
  }

  const canEdit = auth ? ((auth.user?.name === blogpost.author) || (auth.user?.role?.permissions?.edit ?? false)) : false;
  const canDelete = auth ? ((auth.user?.name === blogpost.author) || (auth.user?.role?.permissions?.delete ?? false)) : false;
  
  console.log('auth:', auth); // Log the auth object
  console.log('blogpost.author:', blogpost.author); // Log the blogpost author
  console.log('auth.user?.name:', auth.user?.name); // Log the current user's username
  console.log('auth.user?.role?.permissions?.edit:', auth.user?.role?.permissions?.edit); // Log edit permission
  console.log('canEdit:', canEdit); // Log the final canEdit value
  console.log('canDelete:', canDelete); // Log the final canDelete value
  
  const handleDelete = () => {
    setIsDeleteModalOpen(true); // Open the modal when Delete is clicked
  };
  const confirmDelete = () => {
    // Find the index of the post to be deleted
    const index = blogdata.findIndex(post => post.slug === slug);
    if (index !== -1) {
      // Remove the post from the blogdata array (in-memory deletion)
      blogdata.splice(index, 1);
    }
    setIsDeleteModalOpen(false); // Close the modal
    navigate('/blog'); // Navigate back to the blog list
  };
  
  const cancelDelete = () => {
    setIsDeleteModalOpen(false); // Close the modal
  };
  const handleEditClick = () => {
    setEditing(true);
  };

  const handleSaveSuccess = (updatedPost) => {
    setEditing(false);
    const updatedBlogdata = blogdata.map((post) => {
      if (post.slug === blogpost.slug) {
        return updatedPost;
      }
      return post; // Keep other posts unchanged
    });
    blogdata.splice(0, blogdata.length, ...updatedBlogdata);
    // Instead of modifying the imported blogdata, we should update the state.
    // However, blogdata is not a state variable, it's imported data.
    // We can't directly update it in a way that React will track.
    // The correct solution depends on where blogdata *should* be managed.
    // 1. If blogdata should be global application state: Use a state management library (Redux, Zustand, etc.).
    // 2. If blogdata is only relevant within the BlogPage/BlogPost hierarchy:  Lift the state up to BlogPage.
    // 3. Since we are using react-router, the best approach is to use a state management library.
    // For this example, I'll show how to navigate correctly, assuming a state management solution will be added later.

    navigate(`/blog/${updatedPost.slug}`); // Navigate to the updated blog post
  };

  const handleCancelEdit = () => {
    setEditing(false);
  };

  const returnToBlog = () => {
    navigate('/blog');
  };

  const sanitizedContent = DOMPurify.sanitize(blogpost.content);

  return (
    <>
      <h3>{blogpost.title}</h3>
      {canDelete && !editing && (
        <button onClick={handleDelete}>🗑️ Delete blogpost</button>
      )}
      {isDeleteModalOpen && (
      <DeleteConfirmationModal
        isOpen={isDeleteModalOpen}
        onConfirm={confirmDelete}
        onCancel={cancelDelete}
        blogPostTitle={blogpost.title}
      />
    )}
      {canEdit && !editing && (
        <button onClick={handleEditClick}>✏️ Edit blogpost</button>
      )}
      <button onClick={returnToBlog}>Go back to Blog</button>
      <p>Author: {blogpost.author}</p>

      <div dangerouslySetInnerHTML={{ __html: sanitizedContent }} /> 

      {editing && (
        <EditBlog
          blogPost={blogpost} // Pass the blogpost object itself
          onSaveSuccess={handleSaveSuccess}
          onCancel={handleCancelEdit}
        />
      )}
    </>
  );
}

export { BlogPost };