import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import App from '@/App'
import { ErrorComponent } from '@/components';
import {Landing} from '@/packages/Landing';
import { Admin, User, CompanyList, AddCompany, NewCompany, Wizard, TankAndPumpData, Dashboard, } from '@/packages/dashboard';
import auth from '@/packages/auth';
import Purchases from '@/packages/purchases';


const router = createBrowserRouter(
    createRoutesFromElements(
        <Route element={<App />} errorElement={<ErrorComponent />} path='/'>
            <Route element={<Landing />} index />
            <Route element={<auth.View />} path='account'>
                <Route element={<auth.components.Login />} path='login' />
                <Route element={<auth.components.Register />} path='register' />
            </Route>
            <Route element={<Dashboard />} path='dashboard'>
                <Route element={<Admin />} path='admin/:id'>
                    <Route element={<CompanyList />} path='company/list' />
                    <Route element={<NewCompany />} path='company/new' action={AddCompany} />
                    <Route element={<Wizard />} path='company/wizard/:step' action={TankAndPumpData} />
                </Route>
                <Route element={<User />} path='user/:id'></Route>
                <Route element={<Purchases.Purchases />} path='purchases'>
                    {/* VENDORS */}
                    <Route element={<Purchases.modules.vendors.Vendors />} path='vendor' />
                    <Route element={<Purchases.modules.vendors.components.NewVendor />} path='vendor/create'  action={Purchases.postVendor}/>
                    <Route element={<Purchases.modules.vendors.components.VendorList />} path='vendor/vendors'  />
                    <Route element={<Purchases.modules.vendors.components.VendorPageComponent />} path='vendor/vendors/:vendorId'  />

                    {/* FUEL */}
                    <Route element={<Purchases.modules.fuel.FuelPurchase />} path='fuel' />
                    <Route element={<Purchases.modules.fuel.components.NewFuelPurchase />} path='fuel/create' />

                    {/* ITEM */}
                    <Route element={<Purchases.modules.items.Items />} path='item' />
                    <Route
                        element={<Purchases.modules.items.components.NewItem
                        />}
                        path='item/create'
                        action={Purchases.modules.items.saveNewPurchaseItem}
                    />
                    <Route element={<Purchases.BillRecords />} path='bills'/>
                    <Route element={<Purchases.BillRecordPageComponent />} path='bills/:uuid'/>
                </Route>
            </Route>
        </Route>
    )
);


export default router;