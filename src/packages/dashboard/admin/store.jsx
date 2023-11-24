import { createContext, useContext, useReducer } from "react";

/**
 * CREATE CONTENXT
 */
const AdminStateContext = createContext(undefined);
const AdminStateDispatchContext = createContext(undefined);


/**

 * STATE
 */
const AdminState = {
    formData: {
        uuid: undefined,
        company_name: undefined,
        brand_name: undefined,
        station_name: undefined,
        station_management_type: undefined,
    }
};


/**
 * state reducer
 * @param {*Object} state 
 * @param {*Object} action 
 */
const AdminStateReducer = (state, action) => {
    switch (action.type) {
        case 'SAVE_COMPANY_DATA':
            return state = {
                ...state,
                formData: action.payload,
            };
        case 'SAVE_TANK_AND_PUMP_DATA':

    }
};


/**
 * CREATE PROVIDER
 */
const AdminStateProvider = ({ children }) => {
    const [state, dispatcher] = useReducer(
        AdminStateReducer,
        AdminState
    );

    return (
        <AdminStateContext.Provider value={state}>
            <AdminStateDispatchContext.Provider value={dispatcher}>
                {children}
            </AdminStateDispatchContext.Provider>
        </AdminStateContext.Provider>
    );
};

export const useAdminState = () => useContext(AdminStateContext);
export const useAdminStateDispatch = () => useContext(AdminStateDispatchContext);

export default AdminStateProvider;