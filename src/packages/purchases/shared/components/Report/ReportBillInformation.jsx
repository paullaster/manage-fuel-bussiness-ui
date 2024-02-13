import { usePurchasesState } from "../../../Context"

const ReportBillInformation = () => {

  const {bill} =usePurchasesState();
  return (
    <div className="relatedBillInfo">
        <p><span className="caption">Bill Numner:  </span> <span>{bill.bill_number || 'BILL-001'}</span></p>
        <p><span className="caption">Order Number: </span> {bill.order_number || 'ORDE34'}</p>
        <p><span className="caption">Order Number: </span> {bill.po_number || 'ORDE34'}</p>
        <p><span className="caption">Inovice Number: </span> {bill.invoice_number || 'ORDE34'}</p>
        <p><span className="caption">Bill Date: </span> {bill.purchase_date || ''}</p>
    </div>
  )
}

export default ReportBillInformation