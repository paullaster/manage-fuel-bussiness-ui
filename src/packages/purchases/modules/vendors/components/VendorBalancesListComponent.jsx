import VendorBalancesList from "./VendorBalancesList"

const VendorBalancesListComponent = () => {
  return (
    <>
        {
            VendorBalancesList.map((bal) => {
                return (
                    <div key={bal.key}>

                    </div>
                )
            })
        }
    </>
  )
}

export default VendorBalancesListComponent