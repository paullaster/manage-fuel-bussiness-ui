import { Outlet, useLocation } from "react-router-dom";
import purchases from "../../purchases";
import { useGlobalDispatcher, useGlobalState } from "@/store";
import { useEffect } from "react";
import { Navigation, Footer } from "@/components";
import { RandomCodeGenerator } from "@/utils";

const Dashboard = () => {

   const appStateDispatcher = useGlobalDispatcher();
   const appState = useGlobalState();
   const location = useLocation();

   useEffect(() => {

     const locationArray = location.pathname.split('/');
     if(locationArray.includes('purchases') && (locationArray.includes('fuel') || locationArray.includes('item')) && locationArray.includes('create')) {
      const code = RandomCodeGenerator()
      appStateDispatcher({
        type: "PURCHASE_CODE",
        payload: code,
      })
     }
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