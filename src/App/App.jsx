//src/App/App.jsx
import { HashRouter, Routes, Route, Outlet } from 'react-router-dom';
// Import route components
import { HomePage } from '../routes/HomePage/HomePage';
import { BlogPage } from '../routes/BlogPage/BlogPage';
import { BlogPost } from '../routes/BlogPost/BlogPost';
import { ProfilePage } from '../routes/ProfilePage/ProfilePage'; 
import { LoginPage } from '../routes/LoginPage/LoginPage';
import { LogoutPage } from '../routes/LogoutPage/LogoutPage';
import { CreateBlog } from '../routes/CreateBlog/CreateBlog';
import { ErrorPage } from '../routes/ErrorPage/ErrorPage'; 
import { Menu } from '../components/Menu/Menu';
import { AuthProvider, AuthRoute, useAuth } from '../hooks/useAuth'; 
import { Footer } from '../components/Footer/Footer'; 


// Layout Component
function Layout() {
  const auth = useAuth();
  console.log('Layout - auth object:', auth); // ADD THIS LINE
  return (
    <>
      <Menu auth={ auth }/>
      <main>
        <Outlet context={ auth } />
      </main>
      <Footer />
    </>
  );
}

function App() {

  return (
    <>
      <HashRouter>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<Layout />} errorElement={<ErrorPage />}>
              <Route index element={<HomePage />} />
              {/* Nested Blog Routes */}
              <Route path="blog" element={<BlogPage  />} >
                <Route index element={
                  <p>Welcome to our blog! Here are our latest posts:</p> 
                } />
                <Route path=":slug" element={<BlogPost/>} />  
                <Route path="create" element={<CreateBlog />} />

              </Route>
              {/* Protected Routes */}
              <Route path="profile/:username" element={<AuthRoute><ProfilePage key={window.location.pathname} /></AuthRoute>} />

              <Route path="login" element={<LoginPage />} />
              <Route path="logout" element={
                <AuthRoute>
                  <LogoutPage />
                </AuthRoute>
              } />
              <Route path="*" element={<ErrorPage />} /> {/* Catch-all for 404s */}
            </Route>
          </Routes>
        </AuthProvider>
      </HashRouter>
    </>
  );
}

export default App;