import { useEffect, useState, useMemo } from "react";
import { MdOutlineStarBorder } from 'react-icons/md';
import { useGlobalDispatcher, useGlobalState } from "../../../../../../store";
import { Button, AutocompleteComponent, DataTable, ActionListComponent } from "@/components";
import { Form, redirect, NavLink } from "react-router-dom";
import { _request } from "../../../../../../services";
// import constants from '../constants';
import { SearchArray, TableHeaders } from "../../../../../../utils";

const CompanyList = () => {

  const [searchText, setSearchText] = useState('');
  const [companies, setCompanies] = useState([]);
  const appState = useGlobalState();
  // const appStateDispatcher = useGlobalDispatcher();


  const columns = useMemo(
    () => [
      {
        field: 'company_name',
        headerName: 'Name',
        width: 200,
        type: 'string',
        editable: false,
        hideable: false,

      },
      {
        field: 'brand_name',
        headerName: 'Brand',
        width: 200,
        editable: false,
        hideable: false,
        headerAlign: 'center',
        type: 'string',
        align: 'center',
      },
      {
        field: 'station_name',
        headerName: 'Station',
        width: 200,
        editable: false,
        hideable: false,
        headerAlign: 'center',
        type: 'string',
        align: 'center',
      },

      {
        field: 'station_management_type',
        headerName: 'Station management type',
        width: 200,
        editable: false,
        hideable: false,
        headerAlign: 'center',
        type: 'string',
        align: 'center',
      },
      {
        field: 'number_of_tanks',
        headerName: 'Number of tanks',
        width: 120,
        editable: false,
        hideable: false,
        type: 'number',
        headerAlign: 'center',
        align: 'center',
      },
      {
        field: 'number_of_pumps',
        headerName: 'Number of pumps',
        sortable: false,
        width: 200,
        hideable: false,
        headerAlign: 'center',
        type: 'number',
        align: 'center',
      },
      {
        field: 'number_of_valves',
        headerName: 'Number of Valves',
        sortable: false,
        width: 200,
        hideable: false,
        headerAlign: 'center',
        type: 'number',
        align: 'center',
      },
      // {
      //   field: 'actions',
      //   type: 'actions',
      //   width: 80,
      //   cellClassName: 'actions',
      //   getActions: (params) => {
      //     const isInEditMode = rowModesModel[params.id]?.mode === GridRowModes.Edit;

      //     if (isInEditMode) {
      //       return [
      //         <GridActionsCellItem
      //           key={uuidv4()}
      //           icon={<MdOutlineSaveAlt />}
      //           label="Save"
      //           sx={{
      //             color: 'primary.main',
      //           }}
      //           onClick={() => handleSaveClick(params)}
      //         />,
      //         <GridActionsCellItem
      //           key={uuidv4()}
      //           icon={<MdCancel />}
      //           label="Cancel"
      //           className="textPrimary"
      //           onClick={() => handleCancelClick(params)}
      //           color="inherit"
      //         />,
      //       ];
      //     }
      //     return [
      //       <GridActionsCellItem
      //         key={uuidv4()}
      //         icon={<MdCreate />}
      //         label="Edit"
      //         onClick={() => handleEditClick(params)}
      //       />,
      //       <GridActionsCellItem
      //         key={uuidv4()}
      //         icon={<MdDelete />}
      //         label="Delete"
      //         onClick={() => deleteItem(params)}
      //       />,
      //     ]
      //   },
      //   hideable: false,
      // },
    ],
    [/*handleSaveClick*/, /*handleCancelClick*/, /*handleEditClick*/, /*deleteItem*/],
  );

  /**
   * @todo add cacelling of request using signal
   * const controller = new AbortController();
   */
  useEffect(() => {
    return () => { };
  }, [columns, searchText, appState.companies]);

  let items = [...appState.companies];

  const handleSearch = (e) => {
    e.stopPropagation();
    setSearchText(e.target.value);

    setCompanies(SearchArray(items, searchText));
  }

  // const gotToNewCreateNewCompany = (e) => {
  //   e.stopPropagation();
  //   console.log('gotToNewCreateNewCompany', e);
  //   return redirect('');
  // };

  return (
    <section className="company">
      <div className="topsection">
        <div className="topsection_div__1">
          <span className={'text_small'}>Company</span>
          <Button onClick={() => console.log("Add favorite")} title={'Add favorite'}>
            <MdOutlineStarBorder size={30} />
          </Button>
        </div>
        <div className="topsection_div__2">
          <NavLink className={'btn-element btn_primary'} to={'/dashboard/admin/:id/manage/company/new'} >
            <span>new company</span>
          </NavLink>
          <NavLink className={'btn-element btn_primary'} to={'/dashboard/admin/:id/manage/company/new'} >
            <span>create new user</span>
          </NavLink>
        </div>
        <ActionListComponent />
      </div>
      <AutocompleteComponent
        list={companies}
        label={'Search for company here...'}
        keyField={'officer_name'}
        handleOnchange={handleSearch}
      />
      <DataTable
      columns={columns}
      rows={companies}
      />
    </section>
  )
};

export default CompanyList;