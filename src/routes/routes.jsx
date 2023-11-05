import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom';
import App from '../App'

const  router = createBrowserRouter(
    createRoutesFromElements(
        <Route element={<App />} errorElement={<ErrorComponent />} path='/'>

        </Route>
    )
);


export default router;