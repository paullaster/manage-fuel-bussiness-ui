import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import { StateProvider } from './store';
import { AuthContext } from './store';
import { useEffect, useState } from 'react';

const App = () => {
  
  const [auth, setAuth] = useState({user: null, isAuthenticated: false});
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {

  },[auth, location])

  return (
    <AuthContext.Provider value={{user: null, isAuthenticated: false}}>
    <StateProvider>
      <Outlet />
    </StateProvider>
    </AuthContext.Provider>
  )
}

export default App
