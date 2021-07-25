import { updateExpensePercentage } from "../actions";

export default (state = [], action)=>{
    switch(action.type){
        case 'ADD_EXPENSE':
            return [...state,action.payload.expense];
        case 'UPDATE_EXPENSE_PERCENTAGE':
            return action.payload.expense;
        case 'DELETE_EXPENSE':
            const id = action.payload.id;
            const newExpenses = state.filter(expense=>expense.id !== id);
            return newExpenses;
        default:
            return state;
    }
};