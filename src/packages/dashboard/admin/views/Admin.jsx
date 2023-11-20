import { Navigation, Footer } from "../../../../components";
import { Outlet } from "react-router-dom";
import { useGlobalDispatcher, useGlobalState } from "../../../../store";
import { links } from "../links";
import { useEffect } from "react";
import constants  from "../constants";
import { _request } from "../../../../services";
import AdminStateProvider from "../store";

const Admin = () => {

  const appState = useGlobalState();
  const appStateDispatcher = useGlobalDispatcher();

  useEffect(() => {
    appStateDispatcher({ type: 'LINKS', payload: links });

    const controller = new AbortController();
    _request({
      url: constants.company,
      method: 'GET',
      params: {
        page: 1,
        limit: 10,
      },
      headers: { 'Content-Type': 'application/json' },
      signal: controller.signal
    })
      .then((response) => {
        appStateDispatcher({ type: 'COMPANIES', payload: response.Company_data.results });
        appStateDispatcher({ type: 'SETCOMPANIESLISTCOUNT', payload: response.Company_data.count });
        appStateDispatcher({ type: 'SETPREVIOUSSEARCHITEM', payload: response.Company_data.previous });
        appStateDispatcher({ type: 'SETPNEXTSEARCHITEM', payload: response.Company_data.next });
      }).catch((error) => {
        //@TODO: HANDLE TOASTING ERROR MESSAGE
        // appStateDispatcher({ type: 'ERROR', payload: error });
      });
    return () => {
      controller.abort();
    }
  }, [])


  return (
    <>
      <header className='header'>
        <Navigation links={appState.links} />
      </header>
      <main className='main'>
        <AdminStateProvider>
          <div className="container">
            <Outlet />
          </div>
        </AdminStateProvider>
      </main >
      <footer>
        <Footer className='footer' />
      </footer>
    </>
  );
}

export default Admin;