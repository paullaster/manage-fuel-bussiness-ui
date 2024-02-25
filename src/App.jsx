import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import { StateProvider } from './store';
import { AuthContext } from './store';
import { useEffect, useState } from 'react';
import { Hide } from './utils';

const App = () => {

  const [auth, setAuth] = useState({ user: null, isAuthenticated: false });
  const navigate = useNavigate();
  const location = useLocation();

  if (Hide('/account') && auth.isAuthenticated) navigate('/dasboard');

  if (!auth.isAuthenticated && Hide('/dashboard')) return navigate('/account/login');

  useEffect(() => {

  }, [auth, location])

  return (
    <AuthContext.Provider value={{ account: auth, authSetter: setAuth }}>
      <StateProvider>
        <Outlet />
      </StateProvider>
    </AuthContext.Provider>
  )
}

export default App
