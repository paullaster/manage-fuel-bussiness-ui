import _ from "lodash";
import { _request } from "../services";
import { constants } from "../packages/dashboard";

export const StateReducer = (state, action) => {
    switch (action.type) {
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

        case 'SETCOMPANIESLISTCOUNT':
            return state = {
                ...state,
                itemsCount: action.payload,
            };
        case 'SETPREVIOUSSEARCHITEM':
            return state = {
                ...state,
                previousSearchItem: action.payload,
            };
        case 'SETPNEXTSEARCHITEM':
            return state = {
                ...state,
                nextSearchItem: action.payload,
            };
        case 'TOGGLESUBLINK':
            return state = {
                ...state,
                links: state.links.map((link) => {
                    if (link.id === action.payload) {
                        return link = {
                            ...link,
                            showSubs: !link.showSubs,
                        };
                    }
                    return link = {
                        ...link,
                        showSubs: false,
                    };
                }),
            };
        case 'CREATECOMPOSABLEAUTOFILS':
            return state = {
                ...state,
                cardLabelView: action.payload,
            };
        case 'SETCARDLABELVIEW':
            return state = {
                ...state,
                cardLabelView: state.cardLabelView.map((card) => {
                    if (card.card === action.payload) {
                        return card = {
                            ...card,
                            cardView: !card.cardView,
                            addItemView: !card.addItemView,
                        };
                    }
                    return card = {
                        ...card,
                        cardView: true,
                        addItemView: false,
                    };
                })
            };
    }
}