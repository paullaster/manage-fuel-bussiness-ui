import { createContext, useContext, useReducer } from "react";
import { StateReudcer } from "./StateReducer";

const stateContext = createContext(null);
const dispatcherContext = createContext(null);

export const StateProvider = ({children}) => {
    const [stateItem, stateItemDispatcher] = useReducer(
        StateReudcer,
        {
            links: [],
        }
    );

    return (
        <stateContext.Provider value={stateItem}>
            <dispatcherContext.Provider value={stateItemDispatcher}>
                {children}
            </dispatcherContext.Provider>
        </stateContext.Provider>
    )
}

export const state = () => useContext(stateContext);
export const dispatcher = () => useContext(dispatcherContext);
