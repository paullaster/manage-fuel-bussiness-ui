import { useContext } from "react";
import { useGlobalDispatcher, useGlobalState, LoadingContext, AuthContext } from '@/store';

const OrganizationDetails = () => {

  const  { account} = useContext(AuthContext);
  return (
    <div className="organizationDetails">
        <p>{account?.user?.first_name }</p>
        <p>{account?.user?.location || 'Location' }</p>
        <p>Tax Number: {account?.user?.tax_number || 'Tax Number'}</p>
        <p>{account?.user?.email }</p>
    </div>
  )
}

export default OrganizationDetails