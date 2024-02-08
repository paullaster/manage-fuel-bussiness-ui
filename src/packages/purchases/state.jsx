


export default {
    state: {
        vendors: [],
        officers: [],
        bills: [],
        bill: {},
    },
    actions:(state, action) => {
        switch(action.type) {
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
            case 'SET_CURRENTSELECTED_BILL':
                return {
                    ...state,
                    bill: action.payload
                }
        }
    }
}
