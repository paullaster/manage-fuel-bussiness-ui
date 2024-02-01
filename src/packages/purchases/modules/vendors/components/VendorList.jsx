import Box from '@mui/material/Box';
import { GridActionsCellItem } from "@mui/x-data-grid";
import { DataTable } from '@/components';
import {useCallback, useEffect, useMemo, useState } from 'react';
import { fetchVendorsList } from '../../../actions';
import { generator } from '@/utils/';
import { v4 as uuidv4 } from 'uuid';
import { MdOutlineVisibility, MdAutoDelete, MdOutlineRefresh } from "react-icons/md";
import shared from '../../../shared';
import { useNavigate } from "react-router-dom";
import { deleteItem } from '../../../../../store';
import constants from '../../../constants';


const VendorListGridToolBar = ({setRows}) => {
    const handleRefreshVendorList = () => {
        fetchVendorsList({limit: 10})
        .then((res) => {
            console.log(res.vendors.results);
            const vendorsWithID = [];
            for (const vendor of generator(res.vendors.results)) {
                vendor.id = vendor.vendor_id;
                vendorsWithID.push(vendor);
            }
            const vendorsArray = Array.from(new Set(vendorsWithID));
            setRows(vendorsArray);
        })
        .catch((error) => {
            console.log(error);
        });
    }

    return (
        <GridToolbarContainer>
            <Button color="primary" startIcon={<MdOutlineRefresh size={25} />} onClick={handleRefreshVendorList}>
                refresh list
            </Button>
        </GridToolbarContainer>
    )
}

const VendorList = () => {
    const [rows, setRows] = useState([]);
    const navigate = useNavigate()


    const handleViewClick = (params) => {
        const url = `/dashboard/purchases/vendor/vendors/${params.id}`;
        console.log(url);
        navigate(url);
    };

    const handleDelete = useCallback((params) => {
        deleteItem(constants.vendor, {vendor_id: params.id})
        .then((res) => {
            /**
             * @todo: toast success message
             */
            console.log(res.message);
            // const newRows = rows.filter((row) => row.vendor_id !== params.id);
            // setRows(newRows);
        })
        .catch((error) => {
            /**
             * @todo: toast error
             */
            console.log(error);
        });
    });

    const columns = useMemo(() => [
        {
            field: 'vendor_name',
            headerName: 'name',
            width: 300,
            headerAlign: 'center',
            sortable: true,
            hideable: false,
            editable: false,
            align: 'center',
        },
        {
            field: 'vendor_email',
            headerName: 'email ',
            width: 200,
            headerAlign: 'center',
            sortable: false,
            hideable: false,
            editable: false,
            align: 'center',
        },
        {
            field: 'vendor_phone',
            headerName: 'phone',
            width: 200,
            headerAlign: 'center',
            sortable: false,
            hideable: false,
            editable: false,
            align: 'center',
        },
        {
            field: 'company_name',
            headerName: 'company name',
            width: 300,
            headerAlign: 'center',
            sortable: true,
            hideable: false,
            editable: false,
            align: 'center',
        },
        {
            field: 'website',
            headerName: 'website',
            width: 200,
            headerAlign: 'center',
            sortable: false,
            editable: false,
            hideable: false,
            align: 'center',
        },
        {
            field: 'actions',
            headerName: 'actions',
            type: 'actions',
            width: 200,
            headerAlign: 'center',
            sortable: false,
            hideable: false,
            editable: false,
            align: 'center',
            getActions: (params) => {
                return [
                    <GridActionsCellItem
                        key={uuidv4()}
                        icon={<MdOutlineVisibility size={20} />}
                        label="View"
                        onClick={() => {
                            handleViewClick(params)
                        }}
                    />,
                    <GridActionsCellItem
                        key={uuidv4()}
                        icon={<MdAutoDelete size={20} />}
                        label="Delete"
                        onClick={() => {
                            handleDelete(params)
                        }}
                    />
                ]
            }
        },
    ], []);

    useEffect(() => {
        fetchVendorsList({limit: 10})
            .then((res) => {
                console.log(res.vendors.results);
                const vendorsWithID = [];
                for (const vendor of generator(res.vendors.results)) {
                    vendor.id = vendor.vendor_id;
                    vendorsWithID.push(vendor);
                }
                const vendorsArray = Array.from(new Set(vendorsWithID));
                setRows(vendorsArray);
            })
            .catch((error) => {
                console.log(error);
            });

        return () => {

        }
    }, []);

    // useEffect(() => {

    // },[rows]);

    return (
        <Box>
            <shared.components.SectionIntroduction text="List of Vendors" />
            <DataTable
                columns={columns}
                rows={rows}
                style={{ minHeight: 400, height: 'auto' }}
                initialState={{ pagination: { paginationModel: { page: 0, pageSize: 10 } } }}
                pageSizeOptions={[5, 10, 20, 30, 50]}
                slots={{toolbar: VendorListGridToolBar}}
                slotProps={{toolbar:{setRows}}}
            />
        </Box>
    )
}

export default VendorList

