import { Navigation, Footer } from "../../../../components";
import { Outlet } from "react-router-dom";
import { state, dispatcher } from "../../../../store";
import { links } from "../links";
import { useEffect } from "react";

const Admin = () => {

  const appState = state();
  const appStateDispatcher = dispatcher();

  useEffect(() => {
    appStateDispatcher({type: 'LINKS', payload: links});
  
    return () => {
    
    }
  }, [appState.links])
  

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