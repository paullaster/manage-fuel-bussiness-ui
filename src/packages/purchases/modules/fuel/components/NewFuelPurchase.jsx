import { useEffect, useState, useMemo, useCallback } from "react";
import shared from "../../../shared";
import { useGlobalDispatcher, useGlobalState } from '@/store';
import { Form } from "react-router-dom";
import { composableAutofils, purchaseEntryColumns, NewFuelPurchaseInitialValues} from "../setups";
import TankEntries from "./TankEntries";
import TransportationAndOfficer from "./TransportationAndOfficer";
import FormButtonRow from "../../../shared/components/FormButtonRow";
import NewVendor from "../../vendors/components/NewVendor";
import { v4 as uuidv4 } from 'uuid';
import { ArrayFunctions } from "@/utils";
import { GridActionsCellItem } from '@mui/x-data-grid';
import { MdDelete } from "react-icons/md";
import DeleteIcon from '@mui/icons-material/Delete';
import SecurityIcon from '@mui/icons-material/Security';
import FileCopyIcon from '@mui/icons-material/FileCopy';



const NewFuelPurchase = () => {
  const [rows, setRows] = useState([]);
  const appStateDispatcher = useGlobalDispatcher();
  const { cardLabelView } = useGlobalState();
  // const handleDeletingLineItem = useCallback((item) => {
  //   setTableDataRows((prev) => prev.filter((line) => line.id !== item.id));
  // }, []);


  // const columns = useMemo(() => {
  //   return ArrayFunctions({
  //     arrKey: 'field',
  //     itemKey: 'field',
  //     item: { field: 'action' },
  //     propToUpdate: 'getActions',
  //     op: 'equal',
  //     update: (params) => 
  //       <GridActionsCellItem 
  //        icon={<MdDelete />}
  //        label="Delete"
  //        onClick={handleDeletingLineItem(params)}
  //       />,
  //     type: 'map',
  //   }, purchaseEntryColumns);

  // }, []);
  const deleteUser = useCallback(
    (id) => () => {
      setTimeout(() => {
        setRows((prevRows) => prevRows.filter((row) => row.id !== id));
      });
    },
    [],
  );

  const toggleAdmin = useCallback(
    (id) => () => {
      setRows((prevRows) =>
        prevRows.map((row) =>
          row.id === id ? { ...row, isAdmin: !row.isAdmin } : row,
        ),
      );
    },
    [],
  );

  const duplicateUser = useCallback(
    (id) => () => {
      setRows((prevRows) => {
        const rowToDuplicate = prevRows.find((row) => row.id === id);
        return [...prevRows, { ...rowToDuplicate, id: Date.now() }];
      });
    },
    [],
  );
  const columns = useMemo(
    () => [
      { field: 'name', type: 'string' },
      { field: 'age', type: 'number' },
      { field: 'dateCreated', type: 'date', width: 130 },
      { field: 'lastLogin', type: 'dateTime', width: 180 },
      { field: 'isAdmin', type: 'boolean', width: 120 },
      {
        field: 'country',
        type: 'singleSelect',
        width: 120,
        valueOptions: [
          'Bulgaria',
          'Netherlands',
          'France',
          'United Kingdom',
          'Spain',
          'Brazil',
        ],
      },
      {
        field: 'discount',
        type: 'singleSelect',
        width: 120,
        editable: true,
        valueOptions: ({ row }) => {
          if (row === undefined) {
            return ['EU-resident', 'junior'];
          }
          const options = [];
          if (!['United Kingdom', 'Brazil'].includes(row.country)) {
            options.push('EU-resident');
          }
          if (row.age < 27) {
            options.push('junior');
          }
          return options;
        },
      },
      {
        field: 'actions',
        type: 'actions',
        width: 80,
        getActions: (params) => [
          <GridActionsCellItem
            icon={<DeleteIcon />}
            label="Delete"
            onClick={deleteUser(params.id)}
          />,
          <GridActionsCellItem
            icon={<SecurityIcon />}
            label="Toggle Admin"
            onClick={toggleAdmin(params.id)}
            showInMenu
          />,
          <GridActionsCellItem
            icon={<FileCopyIcon />}
            label="Duplicate User"
            onClick={duplicateUser(params.id)}
            showInMenu
          />,
        ],
      },
    ],
    [deleteUser, toggleAdmin, duplicateUser],
  );

  console.log(columns);
  const handleAddNewItem = (event) => {
    event.preventDefault();
    event.stopPropagation();
    setRows((prev) => [...prev, { id: uuidv4(), ...NewFuelPurchaseInitialValues }]);
  };


  useEffect(() => {
    appStateDispatcher({ type: "CREATECOMPOSABLEAUTOFILS", payload: composableAutofils });
  }, []);

  return (
    <section className="newfuelpurchase">
      <shared.components.SectionIntroduction text="New Fuel Purchase" />
      <Form>
        <shared.components.BillingComponent cardLabelView={cardLabelView} >
          <NewVendor />
        </shared.components.BillingComponent>
        <TransportationAndOfficer cardLabelView={cardLabelView} />
        <TankEntries columns={columns} rows={rows} handleAddNewItem={handleAddNewItem} />
        <FormButtonRow />
      </Form>
    </section>
  )
}

export default NewFuelPurchase;
