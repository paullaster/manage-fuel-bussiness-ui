import { createContext, useContext, useReducer } from "react";
import state from "./state";
import { stateActions } from "./StateActions";

const SharedStateContentxt = createContext(null);
const SharedStateActioncontext = createContext(null);

const SharedStateProvider = ({children}) => {
  const [sharedState, sharedStateAction] = useReducer(
    stateActions,
    state
  );
  return (
    <SharedStateContentxt.Provider value={sharedState}>
        <SharedStateActioncontext.Provider value={sharedStateAction}>
            {children}
        </SharedStateActioncontext.Provider>
    </SharedStateContentxt.Provider>
  ) 
}


export default SharedStateProvider;
export const useSharedState = () => useContext(SharedStateContentxt);
export const useSharedStateAction = () => useContext(SharedStateActioncontext);