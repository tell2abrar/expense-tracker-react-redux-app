export default (state='inc', action)=>{
    switch(action.type){
        case 'CHANGE_TYPE':
            if(action.payload.type === 'inc'){
                return 'inc';
            }else if(action.payload.type === 'exp'){
                return 'exp';
            }
            break;
        default:
            return state;
    }
};