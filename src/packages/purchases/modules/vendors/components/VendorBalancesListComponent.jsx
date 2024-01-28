import VendorBalancesList from "./VendorBalancesList"

const VendorBalancesListComponent = () => {
  return (
    <>
        {
            VendorBalancesList.map((bal) => {
                return (
                    <div key={bal.key}>
                        <p>Ksh {bal.amount}</p>
                        <p>{bal.cap}</p>
                    </div>
                )
            })
        }
    </>
  )
}

export default VendorBalancesListComponent