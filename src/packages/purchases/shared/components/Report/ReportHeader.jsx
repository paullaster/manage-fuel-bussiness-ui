import defaultImage  from '@/assets/images/defaultLogo.svg';
import OrganizationDetails from './OrganizationDetails';

const ReportHeader = () => {
  return (
    <div>
        <div><img src={defaultImage} alt="vendor logo" /></div>
        <OrganizationDetails />
    </div>
  )
}

export default ReportHeader