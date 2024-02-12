import { usePurchasesState } from "../../../Context"

const ReportBillInformation = () => {

  const {bill} =usePurchasesState();
  return (
    <div>
        <p><span>Bill Numner  </span> <span>{bill.bill_number || 'BILL-001'}</span></p>
        <p><span>Order Number</span> {bill.order_number || 'ORDE34'}</p>
        <p><span>Order Number</span> {bill.po_number || 'ORDE34'}</p>
        <p><span>Inovice Number</span> {bill.invoice_number || 'ORDE34'}</p>
        <p><span>Bill Date</span> {bill.purchase_date || ''}</p>
    </div>
  )
}

export default ReportBillInformation