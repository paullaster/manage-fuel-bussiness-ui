


export default {
    state: {
        vendors: [],
        officers: [],
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
        }
    }
}
