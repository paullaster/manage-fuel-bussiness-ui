import { Navigation, Footer } from "../../../../components";
import { Outlet } from "react-router-dom";
import { useGlobalDispatcher, useGlobalState } from "../../../../store";
import { links } from "../links";
import { useEffect } from "react";

const Admin = () => {

  const appState = useGlobalState();
  const appStateDispatcher = useGlobalDispatcher();

  useEffect(() => {
    appStateDispatcher({ type: 'LINKS', payload: links });

    return () => {

    }
  }, [])


  return (
    <>
      <header className='header'>
        <Navigation links={appState.links} />
      </header>
      <main className='main'>
        <div className="container">
          <Outlet />
        </div>
      </main >
      <footer>
        <Footer className='footer' />
      </footer>
    </>
  );
}

export default Admin;