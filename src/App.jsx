//src/App.jsx
import { HashRouter, Routes, Route } from 'react-router-dom';
// Import route components
import { HomePage } from './routes/HomePage/HomePage';
import { BlogPage } from './routes/BlogPage/BlogPage';
import { ProfilePage } from './routes/ProfilePage/ProfilePage';
import { Menu } from './components/Menu/Menu';
import { BlogPost } from './routes/BlogPost/BlogPost';

function App() {
  return (
    <>
      <HashRouter>
        <Menu />

        <Routes>

          <Route path="/" element={<HomePage />} /> 
          <Route path="/blog" element={<BlogPage />} /> 
          {/* Dynamic route for blog posts - ':slug' is the dynamic parameter */}
          <Route path="/blog/:slug" element={<BlogPost />} /> {/*  'slug' will be accessible in BlogPost */}

          <Route path="/profile" element={<ProfilePage />} /> {/* Render ProfilePage when path is '/profile' */}
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;