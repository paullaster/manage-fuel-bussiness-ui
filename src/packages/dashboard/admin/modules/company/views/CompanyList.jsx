import { useEffect } from "react";
import { MdOutlineStarBorder } from 'react-icons/md';
import { useGlobalDispatcher, useGlobalState } from "../../../../../../store";
import { Button, SearchComponent } from "../../../../../../components";
import { Form } from "react-router-dom";
import TableComponent from "../../../../../../components/shared/TableComponent";
import TableHeading from "../../../../../../components/TableHeading";
import { _request } from "../../../../../../services";
import constants from '../constants';
import { TableHeaders } from "../../../../../utils";

const CompanyList = () => {

  const appState = useGlobalState();
  const appStateDispatcher = useGlobalDispatcher();

  /**
   * @todo add cacelling of request using signa
   * const controller = new AbortController();
   */
  useEffect(() => {
    const controller = new AbortController();
    _request({ url: constants.getCompanies, method: 'GET', headers: { 'Content-Type': 'application/json' }, signal: controller.signal })
      .then((response) => {
        console.log(response.Company_data.results);
        appStateDispatcher({ type: 'COMPANIES', payload: response.Company_data.results });
      }).catch((error) => {
        //@TODO: HANDLE TOASTING ERROR MESSAGE
        // appStateDispatcher({ type: 'ERROR', payload: error });
      });
    return () => {
      controller.abort();
    }
  }, []);

  const headers = TableHeaders([
    {
      caption: 'ID',
      value: 'id',
    },
    {
      caption: 'Name',
      value: 'company_name',
    },
    {
      caption: 'No. of Tanks',
      value: 'number_of_tanks',
    },
    {
      caption: 'No. of pumps',
      value: 'number_of_pumps',
    },
    {
      caption: 'No. of valves',
      value: 'number_of_valves',
    }
  ]);

  const items = appState.companies.filter((row) => {
    return headers.every((header) => {
      return row[header.value] !== undefined
    });
  });


  return (
    <section className="company">
      <div className="topsection">
        <div className="topsection_div__1">
          <span className={'text_small'}>Company</span>
          <Button clickEvent={() => console.log("Add favorite")}>
            <MdOutlineStarBorder size={30} />
          </Button>
        </div>
        <div className="topsection_div__2">
          <Button className={'btn-element btn_primary'} clickEvent={() => console.log("add new company")}>new company</Button>
        </div>
      </div>
      <div>
        <Form role="search">
          <SearchComponent placeholder={'Search for ...'} />
        </Form>
      </div>
      <div>
        <TableComponent>
          <thead>
            <tr>
              {
                headers.map((header) => {
                  return (
                    <TableHeading key={header.value}>
                        {header.caption}
                    </TableHeading>
                  )
                })
              }
            </tr>
          </thead>
          <tbody>
            {
              items.map((item) =>{
                return (
                  <tr key={item.id}>
                    {headers.map((h) =>{
                      return (
                        <td key={h.value}>
                          {item[h.value]}
                        </td>
                      )
                    })}
                  </tr>
                )
              })
            }
          </tbody>
          <tfooter>

          </tfooter>
        </TableComponent>
      </div>
    </section>
  )
}

export default CompanyList