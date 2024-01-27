import { useEffect } from "react";
import { useParams } from "react-router-dom"
import { fetchVendorsList } from "../../../actions";

const VendorPageComponent = () => {
  const { vendorId } = useParams();

  useEffect(() => {
    fetchVendorsList({vendor_id: vendorId})
    .then((res) => {

    })
    .catch((error) => {
        
    })
  }, [vendorId]);
  return (
    <div>VendorPageComponent</div>
  )
}

export default VendorPageComponent