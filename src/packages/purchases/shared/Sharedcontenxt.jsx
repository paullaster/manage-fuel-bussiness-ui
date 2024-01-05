import { createContext, useContext, useReducer } from "react";
import state from "./state";
import { stateActions } from "./StateActions";

const SharedStateContentxt = createContext(null);
const SharedStateActioncontext = createContext(null);

export const SharedStateProvider = ({children}) => {
  const [sharedState, sharedStateAction] = useReducer(
    stateActions,
    state
  );
  return (
    <SharedStateContentxt.Provider value={sharedState}>
        
    </SharedStateContentxt.Provider>
  ) 
}