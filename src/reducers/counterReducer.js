export default (state = 0, action)=>{
    switch(action.type){
        case 'CHANGE_COUNTER':
            return ++state;
        default:
            return state;
    }
};