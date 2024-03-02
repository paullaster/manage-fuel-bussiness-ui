import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import { StateProvider, AuthContext, LoadingContext } from './store';
import { useEffect, useState } from 'react';
import AuthService from './packages/auth/AuthService';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { LoadingScreen } from './components';

const App = () => {

  const [auth, setAuth] = useState({ user: null, isAuthenticated: false });
  const [isLoading, setIsLoading] = useState({ message: 'Loading...', status: false });
  const navigate = useNavigate();
  const location = useLocation();

  const Hide = (path) => {
    return location.pathname.includes(path);
  }

  useEffect(() => {
    if (Hide('/account') && auth.isAuthenticated) navigate('/dashboard');
    if (!auth.isAuthenticated && Hide('/dashboard')) navigate('/account/login');
  }, [location, auth]);

  useEffect(() => {
    setAuth({ user: 'user', isAuthenticated: AuthService.isLoggedIn() });

  }, []);

  return (
    <LoadingContext.Provider value={{loader: isLoading, setLoader: setIsLoading }}>
      <LoadingScreen show={isLoading.status}  message={isLoading.message} />
      <AuthContext.Provider value={{ account: auth, authSetter: setAuth }}>
        <StateProvider>
          <Outlet />
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="colored"
            transitionBounce
          />
        </StateProvider>
      </AuthContext.Provider>
    </LoadingContext.Provider>
  )
}

export default App
