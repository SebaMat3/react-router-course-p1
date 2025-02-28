// src/routes/BlogPage/BlogPage.jsx

//import React from 'react';
import PropTypes from 'prop-types';
import { Link, useOutletContext, Outlet } from 'react-router-dom'; 
import { blogdata } from '../../Data/blogdata';
//import { roles } from '../../hooks/auth/roles';

function BlogPage() {
  const auth = useOutletContext(); // Access auth from context
  const canCreate = auth?.user?.role.permissions.create;

  return (
    <>
      <h2>Blog</h2>

      {canCreate && (
        <Link to="create">Create a new blog post</Link> // Link to a new route (not yet implemented)
      )}
      <Outlet context={auth} /> {/* Pass auth down to BlogPost */}
      <ul>
        {blogdata.map(post => (
          <BlogLink 
            key={post.slug} 
            post={post} 
          /> 
            
        ))}
      </ul>
    </>
  );
}

function BlogLink({ post }) {
  return (
    <li>
      <Link to={`/blog/${post.slug}`}> {/* Creating dynamic link to blog post */}
        {post.title}
      </Link>
    </li>
  );
}

// Add PropTypes validation
BlogLink.propTypes = {
  post: PropTypes.shape({
    slug: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};

export { BlogPage };