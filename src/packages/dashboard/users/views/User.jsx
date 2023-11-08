import { Navigation, Footer } from "../../../../components";
import { Outlet } from "react-router-dom";

const User = () => {
    return (
        <>
          <header className='header'>
            <Navigation />
          </header>
          <main className='main'>
            <Outlet />
          </main >
          <footer>
            <Footer className='footer' />
          </footer>
        </>
      )
}

export default User