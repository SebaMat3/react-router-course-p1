import React from 'react';
import { Link } from 'react-router-dom'; // 👈 Import Link

function Menu() {
  return (
    <nav>
      <ul>
{/*         <li>
          <a href="/#/">Home</a> 
        </li>
        <li>
          <a href="/#/blog">Blog</a> 
        </li>
        <li>
          <a href="/#/profile">Profile</a> 
        </li> 
*/}
        <li>
          {/*  Compare to <a> tags:  href="" becomes to="" */}
          <Link to="/">Home</Link> {/* Navigate to the Home route */}
        </li>
        <li>
          <Link to="/blog">Blog</Link> {/* Navigate to the Blog route */}
        </li>
        <li>
          <Link to="/profile">Profile</Link> {/* Navigate to the Profile route */}
        </li>

      </ul>
    </nav>
  );
}

export { Menu };