import { createContext, useContext, useReducer } from "react";
import state from "./state";
import { stateActions } from "./StateActions";

const SharedStateContentxt = createContext(null);
const SharedStateActioncontext = createContext(null);

export default SharedStateProvider = ({children}) => {
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