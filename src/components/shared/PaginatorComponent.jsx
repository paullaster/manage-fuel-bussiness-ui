import { useEffect, useRef, useState } from "react";
import { useGlobalState, useGlobalDispatcher } from "../../store";
import { ItemAndMaximumItemsPerPage, NumberOfPages } from "../../utils";
import { MdSkipPrevious, MdSkipNext } from 'react-icons/md';
import Button from "./Button";
import { _request } from "../../services";


const PaginatorComponent = () => {

    const [selectedPageMaximum, setSelectedPageMaximum] = useState(10);
    const currentPageRef = useRef(1);

    /**
     * CUSTOM
     */
    const appState = useGlobalState();
    const appStateDispatcher = useGlobalDispatcher();

    /**
     * GET NUMBER OF PAGES
     */
    const pages = NumberOfPages(appState.itemsCount, selectedPageMaximum);

    const handlePageLimitSelection = (e) => {
        e.stopPropagation();
        if (e.target.value === 'All') {
            //SHOW ALLL LIST OF ITEMS
            setSelectedPageMaximum(appState.itemsCount);
            return;
        }
        setSelectedPageMaximum(e.target.value);
    };

    /**
     * UPDATE UI INCASE OF MAXIMUM NUMBER ITEMS PER PAGE CHANGES
     */
    useEffect(() => {
        return () => {

        }
    }, [selectedPageMaximum]);

    const handleNextCall = () => {
        if (appState.nextSearchItem) {
            const urlArray = appState.nextSearchItem.split('?');

            const limit = selectedPageMaximum;
            const getPage = urlArray[1].split('&');
            let pageItem = getPage.find((item) => item.startsWith('page='));
            const page = pageItem.split('=')[1];
            currentPageRef.current = page;
            _request({
                url: urlArray[0],
                params: {
                    limit: limit,
                    page: currentPageRef.current,
                }
            })
                .then((response) => {
                    appStateDispatcher({ type: 'COMPANIES', payload: response.Company_data.results });
                    appStateDispatcher({ type: 'SETCOMPANIESLISTCOUNT', payload: response.Company_data.count });
                    appStateDispatcher({ type: 'SETPREVIOUSSEARCHITEM', payload: response.Company_data.previous });
                    appStateDispatcher({ type: 'SETPNEXTSEARCHITEM', payload: response.Company_data.next });
                }).catch((error) => {
                    //@TODO: HANDLE TOASTING ERROR MESSAGE
                    // appStateDispatcher({ type: 'ERROR', payload: error });
                });
        }
    };

    const handlePreviousCall = () => {
        if (appState.previousSearchItem) {
            const urlArray = appState.previousSearchItem.split('?');
            let limit = 0;
            
            const patternRegex = /[&]/;

            if (!urlArray[1].match(patternRegex)) {
                limit = selectedPageMaximum;
                currentPageRef.current -= 1;
            } else {
                limit = selectedPageMaximum;

                const getPage = urlArray[1].split('&');
                let pageItem = getPage.find((item) => item.startsWith('page='));
                const page = pageItem.split('=')[1];

                currentPageRef.current = page;
            }
            _request({
                url: urlArray[0],
                params: {
                    limit: limit,
                    pages: currentPageRef.current,
                }
            })
                .then((response) => {
                    appStateDispatcher({ type: 'COMPANIES', payload: response.Company_data.results });
                    appStateDispatcher({ type: 'SETCOMPANIESLISTCOUNT', payload: response.Company_data.count });
                    appStateDispatcher({ type: 'SETPREVIOUSSEARCHITEM', payload: response.Company_data.previous });
                    appStateDispatcher({ type: 'SETPNEXTSEARCHITEM', payload: response.Company_data.next });
                }).catch((error) => {
                    //@TODO: HANDLE TOASTING ERROR MESSAGE
                    // appStateDispatcher({ type: 'ERROR', payload: error });
                });
        }
    };

    return (
        <div className='pagination'>
            <div className="initial_caption">
                <span>Items per page:</span>
            </div>
            <div className="select_max_item_per_page">
                <select name="itemsPerPage" id="itemsPerPage" onChange={handlePageLimitSelection}>
                    <option value="10">10</option>
                    <option value="25">25</option>
                    <option value="50">50</option>
                    <option value="100">100</option>
                    <option value="All">All</option>
                </select>
            </div>
            <div className="count">
                <span>
                    {ItemAndMaximumItemsPerPage(currentPageRef.current, selectedPageMaximum)}
                </span>
                <span> of </span>
                <span>
                    {
                        appState.itemsCount
                    }
                </span>
            </div>
            <div className="navigate_previous_next">
                <Button title={'previous'} role={'button'} onClick={handlePreviousCall} disabled={!appState.previousSearchItem} ><MdSkipPrevious size={40} /></Button>
                <Button title={'next'} role={'button'} onClick={handleNextCall} disabled={!appState.nextSearchItem}><MdSkipNext size={40} /></Button>
            </div>
        </div>
    )
}

export default PaginatorComponent;