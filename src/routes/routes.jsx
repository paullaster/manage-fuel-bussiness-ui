import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom';
import App from '../App'
import { ErrorComponent } from '../components';
import { Landing } from '../packages/Landing';
import { Admin, Dashboard } from '../packages/dashboard';

const  router = createBrowserRouter(
    createRoutesFromElements(
        <Route element={<App />} errorElement={<ErrorComponent />} path='/'>
            <Route element={<Landing/>} index />
            <Route path='dashboard' >
                <Route element={<Dashboard />} index />
                <Route element={<Admin />} path='admin/:id'></Route>
                <Route path='users/:id'></Route>
            </Route>
        </Route>
    )
);


export default router;