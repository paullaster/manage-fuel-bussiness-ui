import shared from "../../../shared";
import purchseItemImage from "@/assets/images/purchase_item.svg";

const Items = () => {
  const actionInfo = [
    {
      caption: "new item",
      link: "/dashboard/purchases/item/create",
      description: "Enter the details and create your new item"
    },
    {
      caption: "import item",
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
      particular="Purchase Items"
      intro="Purchases items information"
      actionInformation={actionInfo}
      componentImage={purchseItemImage}
    />
  )
}

export default Items
