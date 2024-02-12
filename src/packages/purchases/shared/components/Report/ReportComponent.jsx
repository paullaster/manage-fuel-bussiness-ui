import ReportHeader from './ReportHeader';
import ReportMain from './ReportMain';
import ReportFooter from './ReportFooter';
import { forwardRef } from 'react';

const ReportComponent = forwardRef((props, ref) => {
  const { id } = props;
  return (
    <div id={id} ref={ref}>
        <ReportHeader />
        <ReportMain />
        <ReportFooter />
    </div>
  )
})


export default ReportComponent