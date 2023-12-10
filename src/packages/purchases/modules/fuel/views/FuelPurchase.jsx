import shared from "../../../shared";
import fuelPurchase from "@/assets/images/fuel_purchase.svg";

const FuelPurchase = () => {
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
    {
      caption: "Payroll",
      link: "",
      description: "Reduce time spent on employee payments, benefits, and deductions"
    },
    {
      caption: "Payroll",
      link: "",
      description: "Reduce time spent on employee payments, benefits, and deductions"
    },
  ];

  return (
    <shared.components.PurchasesItemsIndex
      particular="Fuel Purchase"
      intro="Fuels purchases information"
      actionInformation={actionInfo}
      componentImage={fuelPurchase}
    />
  )
}

export default FuelPurchase