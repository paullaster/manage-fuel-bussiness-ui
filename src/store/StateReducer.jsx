import _ from "lodash";

export const StateReducer = (state, action) => {
    switch (action.type) {
        case 'SETAUTH':
            return {
                ...state,
                isAuthenticated: action.payload,
            };
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
            return {
                ...state,
                companies: action.payload
            };

        case 'SETCOMPANIESLISTCOUNT':
            return {
                ...state,
                itemsCount: action.payload,
            };
        case 'SETPREVIOUSSEARCHITEM':
            return {
                ...state,
                previousSearchItem: action.payload,
            };
        case 'SETPNEXTSEARCHITEM':
            return {
                ...state,
                nextSearchItem: action.payload,
            };
        case 'TOGGLESUBLINK':
            return {
                ...state,
                links: state.links.map((link) => {
                    if (link.id === action.payload) {
                        return {
                            ...link,
                            showSubs: !link.showSubs,
                        };
                    }
                    return {
                        ...link,
                        showSubs: false,
                    };
                }),
            };
        case 'CREATECOMPOSABLEAUTOFILS':
            return {
                ...state,
                cardLabelView: action.payload,
            };
        case 'SETCARDLABELVIEW':
            return {
                ...state,
                cardLabelView: state.cardLabelView.map((card) => {
                    if (card.card === action.payload) {
                        return {
                            ...card,
                            cardView: !card.cardView,
                            addItemView: !card.addItemView,
                        };
                    }
                    return {
                        ...card,
                        cardView: true,
                        addItemView: false,
                    };
                })
            };
        case 'PURCHASE_CODE':
            return {
                ...state,
                transactionCode: action.payload,
            };
        case 'SET_TANK_DATA':
            return {
              ...state,
                tankData: action.payload,
            };
    }
}