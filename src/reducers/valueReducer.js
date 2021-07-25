export default (state = 0 , action)=>{
    switch(action.type){
        case 'CHANGE_VALUE':
            return action.payload.value;
        case 'RESET_VALUE':
            return 0;
        default:
            return state;
    }
};