import React from 'react'

const BalancesListComponent = ({currency = 'KES'}) => {
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

export default BalancesListComponent