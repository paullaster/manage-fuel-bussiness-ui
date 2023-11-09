import { useRoutes } from "react-router-dom"
import { request } from "../../../../../../services";
import constants from "../constants";
import { state, dispatcher } from "../../../../../../store";
import { useEffect } from "react";

const CompanyList = () => {

  const appState = state();
  const appStateDispatcher = dispatcher();

   const companies = request(constants.getCompanies, 'GET');

   useEffect(() => {
    const controller = new AbortController();
    const companies = request(constants.getCompanies, 'GET', controller.signal);
    appStateDispatcher({type: 'COMPANIES', payload: companies});
    return () => {
       controller.abort();
    }
   },[appState.companies]);
   
  return (
    <div>CompanyList</div>
  )
}

export default CompanyList