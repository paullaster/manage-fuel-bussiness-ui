import Box from '@mui/material/Box';
import { GridActionsCellItem } from "@mui/x-data-grid";
import { DataTable } from '@/components';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { fetchVendorsList } from '../../../actions';
import { generator } from '@/utils/';
import { v4 as uuidv4 } from 'uuid';
import { MdOutlineVisibility } from "react-icons/md";
import shared from '../../../shared';
import { redirect } from 'react-router-dom';

const VendorList = () => {
    const [rows, setRows] = useState([]);


    const handleViewClick = (params) => {
        const url = `/dashboard/purchases/vendor/vendors/${params.id}`;
        redirect(url);
    };

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
                    />
                ]
            }
        },
    ], []);

    useEffect(() => {
        fetchVendorsList()
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
    return (
        <Box>
            <shared.components.SectionIntroduction text="List of Vendors" />
            <DataTable
                columns={columns}
                rows={rows}
                style={{ minHeight: 400, height: 'auto' }}
                initialState={{ pagination: { paginationModel: { page: 0, pageSize: 10 } } }}
                pageSizeOptions={[5, 10, 20, 30, 50]}
            />
        </Box>
    )
}

export default VendorList