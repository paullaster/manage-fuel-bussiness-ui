import { createContext, useContext, useReducer } from "react";
import { StateReducer } from "./StateReducer";
import state from "./state";

const StateContext = createContext(null);
const DispatcherContext = createContext(null);

export const StateProvider = ({children}) => {
    const [stateItem, stateItemDispatcher] = useReducer(
        StateReducer,
        state
    );

    return (
        <StateContext.Provider value={stateItem}>
            <DispatcherContext.Provider value={stateItemDispatcher}>
                {children}
            </DispatcherContext.Provider>
        </StateContext.Provider>
    )
}

export const useGlobalState = () => useContext(StateContext);
export const useGlobalDispatcher = () => useContext(DispatcherContext);