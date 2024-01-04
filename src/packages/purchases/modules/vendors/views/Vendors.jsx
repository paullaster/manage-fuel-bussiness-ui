import shared from "../../../shared";
import vendorsImage from "@/assets/images/vendors.svg";

const Vendors = () => {

  const actionInfo = [
    {
      caption: "new vendor",
      link: "/dashboard/purchases/vendor/create",
      description: "Enter the details and create your first vendor"
    },
    {
      caption: "import vendor",
      link: "",
      description: "Import your existing vendor with a single click"
    },
    {
      caption: "Payroll",
      link: "",
      description: "Reduce time spent on employee payments, benefits, and deductions"
    },
  ];

  return (
    <shared.components.PurchasesItemsIndex
      particular="Vendors"
      intro="Vendors are required if you want to create bills. You can see the balance<br />you owe and filter reports by the vendor."
      actionInformation={actionInfo}
      componentImage={vendorsImage}
    />
  )
}

export default Vendors