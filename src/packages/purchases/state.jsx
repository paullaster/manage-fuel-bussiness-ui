


export default {
    state: {
        vendors: [],
        officers: [],
        bills: [],
        bill: {},
        vendor: {},
        ContactPersonArray: [],
        bills_items: [],
        onDialog: false,
    },
    actions: (state, action) => {
        switch (action.type) {
            case 'SET_VENDORS':
                return {
                    ...state,
                    vendors: action.payload
                };
            case 'SET_OFFICER':
                return {
                    ...state,
                    officers: action.payload,
                }
            case 'SET_BILLS':
                return {
                    ...state,
                    bills: action.payload.filter ? Array.from(new Set(action.payload.bills)) : Array.from(new Set([...state.bills, ...action.payload.bills])),
                }
            case 'SET_BILL_ITEMS':
                return {
                    ...state,
                    bills_items: action.payload.filter ? Array.from(new Set(action.payload.items)) : Array.from(new Set([...state.bills_items, ...action.payload.items])),
                }
            case 'SET_CURRENTSELECTED_BILL':
                return {
                    ...state,
                    bill: action.payload,
                }
            case 'SET_VENDOR':
                return {
                    ...state,
                    vendor: action.payload,
                }
            case 'SET_VENDORS_CONTACT_PERSON':
                return {
                    ...state,
                    ContactPersonArray: action.payload
                };
            case 'SET_ON_DIALOG_STATE':
                return {
                    ...state,
                    onDialog: action.payload
                };
        }
    }
}
