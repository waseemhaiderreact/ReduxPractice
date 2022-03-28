
const initalstate = {
    cardData: []
}


export function carditem(state=initalstate, action) {
    switch (action.type) {
        case 'adddata':
            return state.cardData=action.data;

        default:
            return state;
    }
}