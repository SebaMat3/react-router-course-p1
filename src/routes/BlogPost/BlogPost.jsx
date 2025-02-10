//src/routes/BlogPost/BlogPost.jsx

import { useParams } from 'react-router-dom'; // 👈 Import useParams hook
import { blogdata } from '../../Data/blogdata'; // Import blog data

function BlogPost() {
  // Use useParams to get the dynamic parameters from the URL
  const { slug } = useParams(); // Destructure 'slug' from the parameters object

  // Find the blog post in blogdata array that matches the slug from URL
  const blogpost = blogdata.find(post => post.slug === slug);

  // If blogpost is not found (e.g., invalid slug), you might want to handle it
  if (!blogpost) {
    return <p>Blog post not found 😞</p>; // Basic error handling
  }

  // Now we can render the blog post content
  return (
    <>
      <h3>{blogpost.title}</h3>
      <p>Author: {blogpost.author}</p>
      <p>{blogpost.content}</p>
      {/* You can add more details like publication date, tags, etc. */}
    </>
  );
}

export { BlogPost };