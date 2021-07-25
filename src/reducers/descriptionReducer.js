export default (state = '',action)=>{
    switch(action.type){
        case 'CHANGE_DESCRIPTION':
            return action.payload.description;
        case 'RESET_DESCRIPTION':
            return '';
        default:
            return state;
    }
}