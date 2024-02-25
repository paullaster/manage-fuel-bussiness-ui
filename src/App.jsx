import { Outlet } from 'react-router-dom';
import { StateProvider } from './store';
import { AuthContext } from './store';

const App = () => {
  return (
    <StateProvider>
      <Outlet />
    </StateProvider>
  )
}

export default App
