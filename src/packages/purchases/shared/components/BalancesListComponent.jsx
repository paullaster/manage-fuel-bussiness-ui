import BalancesList from "./BalancesList"

const BalancesListComponent = ({currency = 'KES'}) => {
    return (
        <div  className="balanceList">
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
        </div>
    )
}

export default BalancesListComponent