import { useEffect, useState } from "react";
import { MdOutlineStarBorder } from 'react-icons/md';
import { useGlobalDispatcher, useGlobalState } from "@/store";
import { Button, SearchComponent, TableComponent, AutocompleteComponent } from "@/components";
import { Form, redirect, NavLink } from "react-router-dom";
import { _request } from "../../../../../../services";
import { SearchArray, TableHeaders } from "@/utils";

export const UsersComponent = () => {

    const [searchText, setSearchText] = useState('');
    const [companies, setCompanies] = useState([]);
    const appState = useGlobalState();
    // const appStateDispatcher = useGlobalDispatcher();

    /**
     * @todo add cacelling of request using signa
     * const controller = new AbortController();
     */
    useEffect(() => {
        return () => { };
    }, [searchText, appState.companies]);

    const headers = TableHeaders([
        {
            caption: 'Name',
            value: 'company_name',
        },
        {
            caption: 'Brand Name',
            value: 'brand_name',
        },
        {
            caption: 'Station Name',
            value: 'station_name',
        },
        {
            caption: 'Station Management Type',
            value: 'station_management_type',
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

    let items = [...appState.companies];

    const handleSelectedOficer = (e) => {
        e.stopPropagation();
        setSearchText(e.target.value);

        setCompanies(SearchArray(items, searchText));
    }

    return (
        <section className="users">
            <div className="topsection">
                <div className="topsection_div__1">
                    <span className={'text_small'}>Users</span>
                    <Button onClick={() => console.log("Add favorite")} title={'Add favorite'}>
                        <MdOutlineStarBorder size={30} />
                    </Button>
                </div>
                <div className="topsection_div__2">
                    <NavLink className={'btn-element btn_primary'} to={'/dashboard/admin/:id/manage/users/create'} >
                        <span>create new user</span>
                    </NavLink>
                </div>
            </div>
            <AutocompleteComponent
                    list={companies}
                    label={'Search for company here...'}
                    keyField={'officer_name'}
                    handleOnchange={handleSelectedOficer}
                />
            <div>
                <TableComponent headers={headers} items={companies.length > 0 ? companies : items} />
            </div>
        </section>
    )
}