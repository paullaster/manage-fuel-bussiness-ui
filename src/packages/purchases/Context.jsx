import { createContext, useContext, useReducer } from "react";
import state from "./state";

const PurchaseStateContext = createContext(null);
const PurchaseDispatcherContext = createContext(null);

export const PurchasesStateProvider = ({children}) => {
    const [stateItem, stateItemDispatcher] = useReducer(
        state.actions,
        state.state
    );

    return (
        <PurchaseStateContext.Provider value={stateItem}>
            <PurchaseDispatcherContext.Provider value={stateItemDispatcher}>
                {children}
            </PurchaseDispatcherContext.Provider>
        </PurchaseStateContext.Provider>
    )
}

export const usePurchasesState = () => useContext(PurchaseStateContext);
export const usePurchasesDispatcher = () => useContext(PurchaseDispatcherContext);