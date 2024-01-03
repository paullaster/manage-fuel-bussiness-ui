import shared from "../../../shared";
import fuelPurchase from "@/assets/images/fuel_purchase.svg";

const FuelPurchase = () => {
  const actionInfo = [
    {
      caption: "new fuel purchase",
      link: "/dashboard/purchases/fuel/create",
      description: "Enter the details and create your fuel purchase"
    },
    {
      caption: "import fuel purchase",
      link: "",
      description: "Import your existing fuel purchase with a single click"
    },
    {
      caption: "Receipt",
      link: "",
      description: "Save time by uploading receipt images"
    },
    {
      caption: "Debit notes",
      link: "",
      description: "Issue debit notes to your vendors for return goods"
    },
    {
      caption: "Purchase orders",
      link: "",
      description: "Initiate purchase for items ready to be shipped and delivery"
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