import { createContext } from "react";
export const AuthContext = createContext({account: { user: null, isAuthenticated: false}, authSetter: () => ({})});
