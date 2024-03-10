import { useContext, useEffect } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { AuthContext } from '../store';
import AuthService from '../packages/auth/AuthService';

const ProtectionMiddleware = ({redirectTo = '/account/login'}) => {

    const { account, authSetter } = useContext(AuthContext);
    const { isAuthenticated } = account;

    useEffect(() => {
        const handleCheckAuth = async () => {
            authSetter({ user: AuthService.getUser(), isAuthenticated: AuthService.isLoggedIn() });
        }
        handleCheckAuth();
      }, []);
      console.log(isAuthenticated);
    if (isAuthenticated && window.location.pathname.includes('/account/')) {
        return <Navigate to={'/dashboard'}  replace />
    }
    if (!isAuthenticated) {
        return <Navigate to={redirectTo} replace />
    }
    return (
        <Outlet />
    )
}

export default ProtectionMiddleware