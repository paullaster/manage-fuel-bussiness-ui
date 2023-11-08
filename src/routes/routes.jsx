import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import App from '../App'
import { ErrorComponent } from '../components';
import { Admin, User } from '../packages/dashboard';

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route element={<App />} errorElement={<ErrorComponent />} path='/'>
            <Route element={<Admin />} path='admin/:id'></Route>
            <Route element={<User />} path='user/:id'></Route>
        </Route>
    )
);


export default router;