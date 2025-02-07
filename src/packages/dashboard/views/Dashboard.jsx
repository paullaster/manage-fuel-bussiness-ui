import { Outlet, useLocation, Navigate } from "react-router-dom";
import purchases from "../../purchases";
import { useGlobalDispatcher, useGlobalState, AuthContext } from "@/store";
import { useEffect, useMemo, useContext } from "react";
import { Navigation, Footer } from "@/components";
import { RandomCodeGenerator } from "@/utils";
import AuthService from "../../auth/AuthService";

const Dashboard = () => {

  const appStateDispatcher = useGlobalDispatcher();
  const { links } = useGlobalState();
  const location = useLocation();
  const { account, authSetter } = useContext(AuthContext);
  const { isAuthenticated } = account;

  const transactionCode = useMemo(() => {
    const locationArray = location.pathname.split('/');
    if (locationArray.includes('purchases') && (locationArray.includes('fuel') || locationArray.includes('item')) && locationArray.includes('create')) {
      return RandomCodeGenerator();
    }
  }, [location])

  useEffect(() => {
    appStateDispatcher({
      type: "PURCHASE_CODE",
      payload: transactionCode,
    })
    appStateDispatcher({
      type: "LINKS",
      payload: purchases.links
    });
    /**
     * @TODO take the transanction code state to purchase item of the dashboard instead of having it affected the entire dashboard that is made of many heavy packeges
     * - this is to be done for code refactoring and optimization
     */
  }, [transactionCode]);



  useEffect(() => {
    const handleCheckAuth = async () => {
        authSetter({ user: AuthService.getUser(), isAuthenticated: AuthService.isLoggedIn() });
    }
    handleCheckAuth();
  }, []);


  useEffect(() => {
    const protectedRoute = () => {
      if (!isAuthenticated) {
        return <Navigate to={'/account/login'}  replace />
    }
    }
    protectedRoute();
  }, [isAuthenticated]);


  return (
    <>
      <header className='header'>
        <Navigation links={links} />
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