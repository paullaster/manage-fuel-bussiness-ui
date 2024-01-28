import { useCallback, useEffect } from "react";

const BioAndBalancesComponent = ({bio}) => {
console.log(bio);
  const getNameInitials = useCallback(() => {
//     console.log(bio)
//     // const nameArr = bio['vendor_name']?.split(' ');
//     // const initials = nameArr[0].charAt(0) + nameArr[1].charAt(0);
    return 'PO';
  }, [bio?.vendor_name]);
  useEffect(() => {}, [bio])
  return (
    <div>
        <div>
            <p>
                {getNameInitials()}
            </p>
            <p>

            </p>
        </div>
        <div></div>
    </div>
  )
}

export default BioAndBalancesComponent