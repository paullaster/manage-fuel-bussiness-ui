import { GridActionsCellItem, GridToolbarContainer } from "@mui/x-data-grid";
import { DataTable } from '@/components';
import { useCallback, useMemo, useContext, useEffect } from 'react';
import { fetchVendorsList } from '../../../actions';
import { v4 as uuidv4 } from 'uuid';
import { MdOutlineVisibility, MdDelete, MdOutlineRefresh } from "react-icons/md";
import shared from '../../../shared';
import { useNavigate } from "react-router-dom";
import { deleteItem } from '../../../../../store';
import constants from '../../../constants';
import Button from '@mui/material/Button';
import { usePurchasesState } from '../../../Context';
import { LoadingContext } from '@/store';
import { toast } from 'react-toastify';


const VendorListGridToolBar = ({ }) => {


    return (
        <GridToolbarContainer>
            <Button color="primary" startIcon={<MdOutlineRefresh size={25} />} >
                refresh list
            </Button>
        </GridToolbarContainer>
    )
}

const VendorList = () => {
    const navigate = useNavigate()
    const purchasesState = usePurchasesState();
    const { setLoader } = useContext(LoadingContext);

    const handleViewClick = (params) => {
        const url = `/dashboard/purchases/vendor/vendors/${params.id}`;
        console.log(url);
        navigate(url);
    };

    const handleDelete = useCallback((params) => {
        deleteItem(constants.vendor, { vendor_id: params.id })
            .then(( ) => {
                setLoader({message: '', status: ''});
                toast.success('Vendor deleted successfully');
            })
            .catch((error) => {
                setLoader({message: '', status: false});
                toast.error(error.message);
            });
    });

    const columns = useMemo(() => [
        {
            field: 'vendor_name',
            headerName: 'Name',
            width: 300,
            headerAlign: 'center',
            sortable: true,
            hideable: false,
            editable: false,
            align: 'center',
        },
        {
            field: 'vendor_email',
            headerName: 'Email ',
            width: 200,
            headerAlign: 'center',
            sortable: false,
            hideable: false,
            editable: false,
            align: 'center',
        },
        {
            field: 'vendor_phone',
            headerName: 'Phone',
            width: 200,
            headerAlign: 'center',
            sortable: false,
            hideable: false,
            editable: false,
            align: 'center',
        },
        {
            field: 'company_name',
            headerName: 'Company name',
            width: 300,
            headerAlign: 'center',
            sortable: true,
            hideable: false,
            editable: false,
            align: 'center',
        },
        {
            field: 'website',
            headerName: 'Website',
            width: 200,
            headerAlign: 'center',
            sortable: false,
            editable: false,
            hideable: false,
            align: 'center',
        },
        {
            field: 'actions',
            headerName: 'Actions',
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
                        icon={<MdDelete size={20} />}
                        label="Delete"
                        onClick={() => {
                            handleDelete(params)
                        }}
                    />
                ]
            }
        },
    ], []);


    return (
        <section className='listOfVendors'>
            <shared.components.SectionIntroduction text="List of Vendors" />
            <DataTable
                columns={columns}
                rows={purchasesState.vendors}
                style={{ minHeight: 400, height: 'auto' }}
                initialState={{ pagination: { paginationModel: { page: 0, pageSize: 10 } } }}
                pageSizeOptions={[5, 10, 20, 30, 50]}
                slots={{ toolbar: VendorListGridToolBar }}
                slotProps={{ toolbar: {} }}
            />
        </section>
    )
}

export default VendorList