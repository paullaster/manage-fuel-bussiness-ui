import { createContext } from "react";
export const AuthContext = createContext({user: { account: null, isAuthenticated: false}, setUser: () => ({})});
