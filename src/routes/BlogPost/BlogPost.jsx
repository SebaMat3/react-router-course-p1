//src/routes/BlogPost/BlogPost.jsx

//import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { blogdata } from '../../Data/blogdata'; 
import { useAuth } from '../../hooks/useAuth'; 

function BlogPost() {
  const navigate = useNavigate();
  const { slug } = useParams();
  const auth = useAuth(); // 👈 Use useAuth hook to access auth context

  const returnToBlog = () => {
    navigate('/blog');
  };

  const blogpost = blogdata.find(post => post.slug === slug);

  if (!blogpost) {
    return <p>Blog post not found 😞</p>;
  }

  // Logic to check if the user can delete the blogpost
  const canDelete = auth.user?.isAdmin || blogpost.author === auth.user?.username; // 👈 New canDelete logic
  
  return (
    <>
      <h3>{blogpost.title}</h3>
      {/* Conditionally render "Delete" button if user is admin OR author */}
      {canDelete && ( // 👈 Use canDelete variable for conditional rendering
        <button>🗑️ Delete blogpost</button>
      )}
      <button onClick={returnToBlog}>Go back to Blog</button>
      <p>Author: {blogpost.author}</p>
      <p>{blogpost.content}</p>
    </>
  );
}

export { BlogPost };