import { Outlet } from "react-router-dom";
import { PurchasesStateProvider } from "../Context";


const Purchases = () => {

  return (
    <PurchasesStateProvider>
      <Outlet />
    </PurchasesStateProvider>
  )
}

export default Purchases