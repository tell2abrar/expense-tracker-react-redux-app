export default (state = [], action)=>{
    switch(action.type){
        case 'ADD_ICOME':
            return [...state,action.payload.income];
        case 'DELETE_ICOME':
            const id = action.payload.id;
            const newState = state.filter(income=>income.id !== id);
            return newState;
        default:
            return state;
    }
};