import { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { AuthContext } from '../store';

export const useAuthGuard = (redirectTo = '/account/login') => {

    const { account } = useContext(AuthContext);
    const { isAuthenticated } = account;

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
