// src/routes/BlogPage/BlogPage.jsx

//import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { blogdata } from '../../Data/blogdata'; // Importing our blog post data

function BlogPage() {
  return (
    <>
      <h2>Blog Page ✍️</h2>
      <ul>
        {blogdata.map(post => (
          <BlogLink key={post.slug} post={post} /> // Using BlogLink component for each post
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