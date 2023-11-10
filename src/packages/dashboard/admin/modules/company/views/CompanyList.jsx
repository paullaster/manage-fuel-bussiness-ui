import { useEffect } from "react";
import { MdOutlineStarBorder } from 'react-icons/md';
import { useGlobalDispatcher, useGlobalState } from "../../../../../../store";
import { Button, SearchComponent } from "../../../../../../components";
import { Form } from "react-router-dom";


const CompanyList = () => {

  const appState = useGlobalState();
  const appStateDispatcher = useGlobalDispatcher();

  /**
   * @todo add cacelling of request using signa
   * const controller = new AbortController();
   */
  
  useEffect(() => {
    appStateDispatcher({ type: 'COMPANIES'});
  
    return () => {
      
    }
  }, [appState.companies])
  

  return (
    <section className="company">
      <div>
        <div>
            <span>Company</span>
            <Button clickEvent = {() => console.log("Add favorite")}>
                <MdOutlineStarBorder size={30} />
            </Button>
        </div>
        <div>
          <Button clickEvent = {() => console.log("add new company")}>new company</Button>
        </div>
      </div>
      <div>
        <Form role="search">
            <SearchComponent placeholder={'Search for ...'}/>
        </Form>
      </div>
    </section>
  )
}

export default CompanyList