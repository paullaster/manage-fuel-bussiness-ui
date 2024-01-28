import { useCallback, useEffect } from "react";

const BioAndBalancesComponent = ({bio}) => {
console.log(bio);
  const getNameInitials = useCallback(() => {
//     console.log(bio)
    const nameArr = bio?.vendor_name.split(' ');
    console.log(nameArr)
    const initials = nameArr ? nameArr[0].charAt(0) + nameArr[1].charAt(0) : 'VN';
    return initials;
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