import ReportVendorInformation from "./ReportVendorInformation";
import ReportBillInformation from "./ReportBillInformation";

const ReportRelatedInformationComponent = () => {
  return (
    <div className="reportRelatedInformation">
        <ReportVendorInformation />
        <ReportBillInformation />
    </div>
  )
}

export default ReportRelatedInformationComponent