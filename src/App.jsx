import { Outlet, useLocation } from 'react-router-dom';
import { StateProvider, AuthContext, LoadingContext } from './store';
import { useEffect,  useState } from 'react';
import AuthService from './packages/auth/AuthService';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { LoadingScreen } from './components';

const App = () => {

  const [auth, setAuth] = useState({ user: null, isAuthenticated: false });
  const [isLoading, setIsLoading] = useState({ message: 'Loading...', status: false });

  
  useEffect(() => {
    const handleCheckAuth = async () => {
      setAuth({ user: AuthService.getUser(), isAuthenticated: AuthService.isLoggedIn() });
    }
    handleCheckAuth();
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
