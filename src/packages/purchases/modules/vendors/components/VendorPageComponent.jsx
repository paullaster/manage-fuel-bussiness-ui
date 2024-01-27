import { useParams } from "react-router-dom"

const VendorPageComponent = () => {
  const { vendorId } = useParams();
  return (
    <div>VendorPageComponent</div>
  )
}

export default VendorPageComponent