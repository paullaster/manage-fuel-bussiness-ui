import Box from '@mui/material/Box';
import { GridActionsCellItem } from "@mui/x-data-grid";
import { DataTable } from '@/components';
import { useEffect, useMemo, useState } from 'react';
import { fetchVendorsList } from '../../../actions';
import { generator } from '@/utils/';
import { v4 as uuidv4 } from 'uuid';
import { MdOutlineVisibility } from "react-icons/md";

const VendorList = () => {
    const [rows, setRows] = useState([]);

    const columns = useMemo(() => [
        {
            field: 'vendor_name',
            headerName: 'name',
            width: 300,
            headerAlign: 'center',
            sortable: true,
            hideable: false,
            editable: false,
        },
        {
            field: 'vendor_email',
            headerName: 'email ',
            width: 200,
            headerAlign: 'center',
            sortable: false,
            hideable: false,
            editable: false,
        },
        {
            field: 'vendor_phone',
            headerName: 'phone',
            width: 200,
            headerAlign: 'center',
            sortable: false,
            hideable: false,
            editable: false,
        },
        {
            field: 'company_name',
            headerName: 'company name',
            width: 300,
            headerAlign: 'center',
            sortable: true,
            hideable: false,
            editable: false,
        },
        {
            field: 'website',
            headerName: 'website',
            width: 200,
            headerAlign: 'center',
            sortable: false,
            editable: false,
            hideable: false
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
            getActions: (params) => {
                return [
                    <GridActionsCellItem
                        key={uuidv4()}
                        icon={<MdOutlineVisibility size={20}/>}
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
            <DataTable
                columns={columns}
                rows={rows}
                style={{minHeight:400, height:'auto'}}
            />
        </Box>
    )
}

export default VendorList