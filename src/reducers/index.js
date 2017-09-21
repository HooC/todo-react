const inicialState = []

const reducer = (state = [], action) => {
    
    switch(action.type) {
        case ("ADD_NEW") :
            return [...state, {id: state.length !== 0 ? state[state.length - 1].id + 1 : 0, name: action.payload, check: false}];
            break;
        case ("REMOVE_ITEM") :
            return state.filter(elem => elem.name != action.payload);
            break;
        case ("CHECK_ITEM") : 
            return state.map( (item) => {
                
                return item.id === action.payload ? Object.assign({}, item, {check: !item.check}) : Object.assign({}, item);
            })

            break;
        default :
            return state;
    }

    return state;
}

export default reducer;