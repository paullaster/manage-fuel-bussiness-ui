import { Outlet } from "react-router-dom";
import shared from "../shared";


const Purchases = () => {
  return (
    <shared.SharedStateProvider>
      <Outlet />
    </shared.SharedStateProvider>
  )
}

export default Purchases