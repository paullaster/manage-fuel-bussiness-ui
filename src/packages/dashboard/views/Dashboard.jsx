import { Outlet } from "react-router-dom";
import purchases from "../../purchases";
import { useGlobalDispatcher, useGlobalState } from "@/store";
import { useEffect } from "react";
import { Navigation, Footer } from "@/components";
// import { _request } from "@/services";

const Dashboard = () => {

   const appStateDispatcher = useGlobalDispatcher();
   const appState = useGlobalState();

   useEffect(() => {
      appStateDispatcher({
        type: "LINKS",
        payload: purchases.links
      });
   },[]);


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
  )
}

export default Dashboard;