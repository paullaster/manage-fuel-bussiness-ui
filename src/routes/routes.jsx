import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import App from '../App'
import { ErrorComponent } from '../components';
import { Admin, User, CompanyList, GetCompanies, AddCompany, NewCompany } from '../packages/dashboard';

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route element={<App />} errorElement={<ErrorComponent />} path='/'>
            <Route element={<Admin />} path='admin/:id'>
                <Route element={<CompanyList />} path='companies' action={GetCompanies}/>
                <Route element={<NewCompany />} path='company/new' action={AddCompany} />
            </Route>
            <Route element={<User />} path='user/:id'></Route>
        </Route>
    )
);


export default router;