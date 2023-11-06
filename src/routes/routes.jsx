import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom';
import App from '../App'
import { ErrorComponent } from '../components';
import { Landing } from '../packages/Landing';

const  router = createBrowserRouter(
    createRoutesFromElements(
        <Route element={<App />} errorElement={<ErrorComponent />} path='/'>
            <Route element={<Landing/>} index />
            <Route path='/dashboard'>
                <Route path='/admin'></Route>
                <Route path='/users'></Route>
            </Route>
        </Route>
    )
);


export default router;