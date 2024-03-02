import { createContext } from "react";
export const LoadingContext = createContext({loader: {message: 'Loading...', status: false}, setLoader: () => ({})});