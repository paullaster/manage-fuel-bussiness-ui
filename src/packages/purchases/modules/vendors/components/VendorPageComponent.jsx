import { useEffect } from "react";
import { useParams } from "react-router-dom"
import { fetchVendorsList } from "../../../actions";

const VendorPageComponent = () => {
  const { vendorId } = useParams();

  useEffect(() => {
    fetchVendorsList({vendor_id: vendorId})
    .then((res) => {
        console.log(res);
    })
    .catch((error) => {
        console.log(error);
    })
  }, [vendorId]);
  return (
    <section className="vendorPage">
        <
        <div></div>
    </section>
  )
}

export default VendorPageComponent