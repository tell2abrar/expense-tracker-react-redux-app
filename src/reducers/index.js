import { combineReducers } from "redux";
import typeReducer from "./typeReducer";
import descriptionReducer from './descriptionReducer';
import valueReducer from "./valueReducer";
import counterReducer from "./counterReducer";
import incomeReducer from "./incomeReducer";
import expenseReducer from "./expenseReducer";

export default combineReducers({
    counter:counterReducer,
    type:typeReducer,
    desc:descriptionReducer,
    value:valueReducer,
    incomes:incomeReducer,
    expenses:expenseReducer
});