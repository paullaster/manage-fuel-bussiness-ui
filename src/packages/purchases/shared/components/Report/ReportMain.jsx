import ReportItemsInformation from './ReportItemsInformation'
import ReportRelatedInformationComponent from './ReportRelatedInformationComponent'

const ReportMain = () => {
  return (
    <div className='reportMainContent'>
        <ReportRelatedInformationComponent />
        <ReportItemsInformation />
    </div>
  )
}

export default ReportMain