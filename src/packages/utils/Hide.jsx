import { useLocation } from "react-router-dom";

export const Hide = (path) => {
    const  location = useLocation();
    return location.pathname.includes(path);

};