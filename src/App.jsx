//src/App.jsx
import { HashRouter, Routes, Route } from 'react-router-dom';
// Import route components
import { HomePage } from './routes/HomePage/HomePage';
import { BlogPage } from './routes/BlogPage/BlogPage';
import { ProfilePage } from './routes/ProfilePage/ProfilePage';
import { Menu } from './components/Menu/Menu';

function App() {
  return (
    <>
      {/* Router Provider:  Makes routing context available to components inside */}
      <HashRouter>
        <Menu /> {/* Menu component - will be visible on all routes */}

        {/* Routes Container:  Defines which part of the application dynamically changes based on the URL */}
        <Routes>
          {/* Route Definitions:
              - 'path' prop:  Specifies the URL path to match.
              - 'element' prop:  Specifies the React component to render when the path matches. */}
          <Route path="/" element={<HomePage />} /> {/* Render HomePage when path is '/' (homepage) */}
          <Route path="/blog" element={<BlogPage />} /> {/* Render BlogPage when path is '/blog' */}
          <Route path="/profile" element={<ProfilePage />} /> {/* Render ProfilePage when path is '/profile' */}
        </Routes>
      </HashRouter>
    </>
  );
}

export { App };