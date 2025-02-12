//src/App.jsx
import { HashRouter, Routes, Route } from 'react-router-dom';
// Import route components
import { LoginPage } from './routes/LoginPage/LoginPage';
import { LogoutPage } from './routes/LogoutPage/LogoutPage'; 
import { ProfilePage } from './routes/ProfilePage/ProfilePage'; // Ensure ProfilePage is still imported
import { HomePage } from './routes/HomePage/HomePage';
import { BlogPage } from './routes/BlogPage/BlogPage';
import { Menu } from './components/Menu/Menu';
import { BlogPost } from './routes/BlogPost/BlogPost';
import { AuthProvider } from './auth/auth'; // Make sure AuthProvider is imported


function App() {
  return (
    <>
      <HashRouter>
        <AuthProvider> {/* AuthProvider should wrap your routing */}
          <Menu />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/blog" element={<BlogPage />} >
              <Route path=":slug" element={<BlogPost />} />
            </Route>
            <Route path='/login' element={<LoginPage />} />
            <Route path='/logout' element={<LogoutPage />} />
            <Route path='/profile' element={<ProfilePage />} /> {/* Profile route */}
            <Route path='/*' element={<p>Page Not Found</p>} />
          </Routes>
        </AuthProvider>
      </HashRouter>
    </>
  );
}

export default App;