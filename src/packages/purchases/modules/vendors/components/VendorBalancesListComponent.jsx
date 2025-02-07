import VendorBalancesList from "./VendorBalancesList"

const VendorBalancesListComponent = ({currency = 'Ksh'}) => {
  return (
    <>
        {
            VendorBalancesList.map((bal) => {
                return (
                    <div key={bal.key}>
                        <p className="currencyAndBal">{currency} {bal.amount}</p>
                        <p className="balanceCap">{bal.cap}</p>
                    </div>
                )
            })
        }
    </>
  )
}

export default VendorBalancesListComponent