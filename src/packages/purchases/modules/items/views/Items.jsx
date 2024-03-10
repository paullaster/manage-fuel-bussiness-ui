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
      caption: "Bills",
      link: "/dashboard/purchases/bills?type=items",
      description: "View bill items"
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
