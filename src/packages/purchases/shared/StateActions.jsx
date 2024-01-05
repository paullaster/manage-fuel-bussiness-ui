export const stateActions = (state, action) => {
    switch(action.type) {
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
                    return card;
                })
            };
        case  'CREATECOMPOSABLEAUTOFILS':
            return state = {
                ...state,
                cardLabelView: action.payload,
            }

    }
}