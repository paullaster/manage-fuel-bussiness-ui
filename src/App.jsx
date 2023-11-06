import { Navigation, Footer } from './components';
import { Outlet } from 'react-router-dom';

const App = () => {
  return (
    <>
      <Navigation />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default App
