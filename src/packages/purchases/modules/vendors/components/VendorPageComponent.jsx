import { useEffect } from "react";
import { useParams } from "react-router-dom"

const VendorPageComponent = () => {
  const { vendorId } = useParams();

  useEffect(() => {
    
  }, [vendorId]);
  return (
    <div>VendorPageComponent</div>
  )
}

export default VendorPageComponent