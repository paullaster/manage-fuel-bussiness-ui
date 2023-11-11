import _ from "lodash";
import { _request } from "../services";
import { constants } from "../packages/dashboard";

export const StateReducer = (state, action) => {
    switch(action.type) {
        case 'LINKS':
            /**
             * Checking if link exist
             */
            if (state.links && _.findIndex(state.links, (link) => link.to === action.payload.to) === -1) {
                /**
                 * ADD link
                 */
                state = {
                    ...state,
                    links: [...state.links, action.payload],
                }
            }
            return state;
        /**
         * @TODO: Add case for adding sublinks to links
         */
        case 'COMPANIES':
            return state = {
                ...state,
                companies: action.payload
            };
        
    }
}