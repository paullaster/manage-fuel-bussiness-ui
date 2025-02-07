import { useCallback, useEffect } from "react";
import VendorBalancesListComponent from "./VendorBalancesListComponent";

const BioAndBalancesComponent = ({bio}) => {
  const getNameInitials = useCallback(() => {
//     console.log(bio)
    const nameArr = bio?.vendor_name.split(' ');
    const initials = nameArr ? nameArr[0].charAt(0) + nameArr[1].charAt(0) : 'VN';
    return initials;
  }, [bio?.vendor_name]);
  useEffect(() => {}, [bio])
  return (
    <div className="bioAndBalances">
        <div className="bio">
            <p className="initials">
                {getNameInitials()}
            </p>
            <p className="contact">
                <span>
                    {bio?.vendor_email}
                </span>
                <span>
                    {
                        bio?.vendor_phone
                    }
                </span>
            </p>
        </div>
        <div className="balances">
            <VendorBalancesListComponent currency={bio?.currency['currency_code']}/>
        </div>
    </div>
  )
}

export default BioAndBalancesComponent