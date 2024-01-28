import VendorBalancesList from "./VendorBalancesList"

const VendorBalancesListComponent = ({currency = 'Ksh'}) => {
  return (
    <>
        {
            VendorBalancesList.map((bal) => {
                return (
                    <div key={bal.key}>
                        <p>{currency} {bal.amount}</p>
                        <p>{bal.cap}</p>
                    </div>
                )
            })
        }
    </>
  )
}

export default VendorBalancesListComponent