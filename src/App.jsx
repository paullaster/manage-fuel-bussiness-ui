import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import { StateProvider } from './store';
import { AuthContext } from './store';
import { useEffect, useState } from 'react';
import AuthService from './packages/auth/AuthService';

const App = () => {

  const [auth, setAuth] = useState({ user: null, isAuthenticated: false });
  const navigate = useNavigate();
  const location = useLocation();

  const Hide = (path) => {
    return location.pathname.includes(path);
  }
  
  useEffect(() => {
    if (Hide('/account') && auth.isAuthenticated) navigate('/dashboard');
  
    if (!auth.isAuthenticated && Hide('/dashboard')) navigate('/account/login');

     setAuth({user: 'user', isAuthenticated: AuthService.isLoggedIn()});

  }, [location])

  useEffect(() => {

  }, [auth]);

  return (
    <AuthContext.Provider value={{ account: auth, authSetter: setAuth }}>
      <StateProvider>
        <Outlet />
      </StateProvider>
    </AuthContext.Provider>
  )
}

export default App
