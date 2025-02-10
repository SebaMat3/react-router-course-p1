//src/routes/BlogPost/BlogPost.jsx

//import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { blogdata } from '../../Data/blogdata'; // Import blog data

function BlogPost() {
    const navigate = useNavigate();
    const { slug } = useParams(); 
    
    const returnToBlog = () => {
        navigate('/blog');
    };

    const blogpost = blogdata.find(post => post.slug === slug);

    if (!blogpost) {
        return <p>Blog post not found 😞</p>; // Basic error handling
    }

  return (
    <>
      <h3>{blogpost.title}</h3>
      {/* Go back button */}
      <button onClick={returnToBlog}>Go back to Blog</button>
      <p>Author: {blogpost.author}</p>
      <p>{blogpost.content}</p>
    </>
  );
}

export { BlogPost };