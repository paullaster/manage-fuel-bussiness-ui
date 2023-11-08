import { Navigation, Footer } from "../../../../components";
import { Outlet } from "react-router-dom";
import { state, dispatcher } from "../../../../store";
import { links } from "../links";

const Admin = () => {

  const appState = state();
  const appStateDispatcher = dispatcher();

  appStateDispatcher({type: 'LINKS', payload: links});

  return (
    <>
      <header className='header'>
        <Navigation links={appState.links}/>
      </header>
      <main className='main'>
        <Outlet />
      </main >
      <footer>
        <Footer className='footer' />
      </footer>
    </>
  );
}

export default Admin;