import { Navigation, Footer } from './components';
import { Outlet } from 'react-router-dom';

const App = () => {
  return (
    <>
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default App
