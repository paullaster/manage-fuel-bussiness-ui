import { createContext, useContext, useReducer } from "react";

/**
 * CREATE CONTENXT
 */
const AdminStateContext = createContext(null);
const AdminStateDispatchContext = createContext(null);


/**

 * STATE
 */
const AdminState = {
    tank_data: {
        number_of_tanks: 0,
        tank_data: [
            {
                tank_number: 1,
                tank_capacity: 2000
            }
        ]
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
            console.log(action.payload);
            return state = {
                ...state,
                formData: { ...state.formData, ...action.payload },
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