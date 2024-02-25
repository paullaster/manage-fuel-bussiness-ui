import { Outlet } from 'react-router-dom';
import { StateProvider } from './store';
import { AuthContext } from './store';
import { useState } from 'react';

const App = () => {
  
  const [auth, setAuth] = useState({user: null, isAuthenticated: false});

  return (
    <AuthContext.Provider value={{user: null, isAuthenticated: false}}>
    <StateProvider>
      <Outlet />
    </StateProvider>
    </AuthContext.Provider>
  )
}

export default App
