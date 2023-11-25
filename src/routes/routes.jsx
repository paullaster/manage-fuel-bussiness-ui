import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import App from '../App'
import { ErrorComponent } from '../components';
import { Landing } from '../packages/Landing';
import { Admin, User, CompanyList, AddCompany, NewCompany, Wizard, TankAndPumpData } from '../packages/dashboard';
import auth from '@/packages/auth';


const router = createBrowserRouter(
    createRoutesFromElements(
        <Route element={<App />} errorElement={<ErrorComponent />} path='/'>
            <Route element={<Landing />} index />
            <Route element={<auth.View />} path='account'>
                <Route element={<auth.components.Login />} path='login' />
                <Route element={<auth.components.Register />} path='register' />
            </Route>
            <Route element={<Admin />} path='admin/:id'>
                <Route element={<CompanyList />} path='company/list' />
                <Route element={<NewCompany />} path='company/new' action={AddCompany} />
                <Route element={<Wizard />} path='company/wizard/:step' action={TankAndPumpData} />
            </Route>
            <Route element={<User />} path='user/:id'></Route>
        </Route>
    )
);


export default router;