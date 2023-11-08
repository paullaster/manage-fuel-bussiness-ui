import _ from "lodash"
export const StateReudcer = (state, action) => {
    switch(action.type) {
        case 'LINKS':
            /**
             * Checking if link exist
             */
            if (_.findIndex(state.links, (link) => link.to === action.payload.to) === -1) {
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
        
    }
}