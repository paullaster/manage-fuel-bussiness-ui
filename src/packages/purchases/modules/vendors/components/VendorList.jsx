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
import { usePurchasesDispatcher, usePurchasesState } from '../../../Context';
import { LoadingContext } from '@/store';
import { toast } from 'react-toastify';
import { generator } from '@/utils/';


const VendorListGridToolBar = ({ handleRefresh }) => {
    const initiateListRefresh = () => {
        handleRefresh();
    }
    return (
        <GridToolbarContainer>
            <Button color="primary" startIcon={<MdOutlineRefresh size={25} onClick={initiateListRefresh} />} >
                refresh list
            </Button>
        </GridToolbarContainer>
    )
}

const VendorList = () => {
    const navigate = useNavigate()
    const purchasesState = usePurchasesState();
    const setVendorsList = usePurchasesDispatcher();
    const { setLoader, loader } = useContext(LoadingContext);
    
    const handleViewClick = (params) => {
        const url = `/dashboard/purchases/vendor/vendors/${params.id}`;
        console.log(url);
        navigate(url);
    };
    
    const handleRefresh = () => {
        setLoader({ message: '', status: true });
        fetchVendorsList()
            .then((res) => {
                const vendorsWithID = [];
                for (const vendor of generator(res.vendors.results)) {
                    vendor.id = vendor.vendor_id;
                    vendorsWithID.push(vendor);
                }
                const vendorsArray = Array.from(new Set(vendorsWithID));
                setVendorsList({ type: 'SET_VENDORS', payload: vendorsArray });
                setLoader({ message: '', status: false });
                toast.success('Vendor list refreshed successfully');
            })
            .catch((error) => {
                setLoader({ message: '', status: false });
                toast.error(error.message);
            });
    }
    
    const handleDelete = useCallback((params) => {
        setLoader({ message: '', status: true });
        deleteItem(constants.vendor, { vendor_id: params.id })
        .then(() => {
            setLoader({ message: '', status: false });
            toast.success('Vendor deleted successfully');
            handleRefresh();
        })
        .catch((error) => {
            setLoader({ message: '', status: false });
            toast.error(error.message);
            });
    });

    const columns = useMemo(() => [
        {
            field: 'vendor_name',
            headerName: 'Name',
            width: 300,
            headerAlign: 'left',
            sortable: true,
            hideable: false,
            editable: false,
            align: 'left',
        },
        {
            field: 'vendor_email',
            headerName: 'Email ',
            width: 300,
            headerAlign: 'left',
            sortable: false,
            hideable: false,
            editable: false,
            align: 'left',
        },
        {
            field: 'vendor_phone',
            headerName: 'Phone',
            width: 200,
            headeralign: 'left',
            sortable: false,
            hideable: false,
            editable: false,
            align: 'left',
        },
        {
            field: 'company_name',
            headerName: 'Company name',
            width: 300,
            headeralign: 'left',
            sortable: true,
            hideable: false,
            editable: false,
            align: 'left',
        },
        {
            field: 'website',
            headerName: 'Website',
            width: 300,
            headeralign: 'left',
            sortable: false,
            editable: false,
            hideable: false,
            align: 'left',
        },
        {
            field: 'actions',
            headerName: 'Actions',
            type: 'actions',
            width: 80,
            headeralign: 'center',
            sortable: false,
            hideable: false,
            editable: false,
            align: 'right',
            getActions: (params) => {
                return [
                    <GridActionsCellItem
                        key={uuidv4()}
                        icon={<MdOutlineVisibility size={20} />}
                        label="View"
                        onClick={() => {
                            handleViewClick(params)
                        }}
                        className="textSecondary"
                        color="red"
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
                slotProps={{ toolbar: { handleRefresh } }}
                checkboxSelection
                loading={loader.status}
            />
        </section>
    )
}

export default VendorList