import BalancesList from "./BalancesList"

const BalancesListComponent = ({currency = 'KES'}) => {
    return (
        <>
            {
                BalancesList.map((bal) => {
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

export default BalancesListComponent