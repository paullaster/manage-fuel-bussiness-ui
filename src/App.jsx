import { Navigation, Footer } from './components';
import { Outlet } from 'react-router-dom';

const App = () => {
  return (
    <>
      <header className='header'>
        <Navigation />
      </header>
      <main className='main'>
        <Outlet />
      </main>
      <footer>
        <Footer className='footer'/>
      </footer>
    </>
  )
}

export default App
