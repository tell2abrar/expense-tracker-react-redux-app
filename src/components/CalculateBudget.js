import React,{useEffect} from 'react';

import './CalculateBudget.css';
import { connect } from 'react-redux';
import { changeType} from '../actions';
import { changeDescription } from '../actions';
import { changeValue } from '../actions';
import { changeCounter } from '../actions';
import { addIncome } from '../actions';
import { resetValue } from '../actions';
import { resetDescription } from '../actions';
import { addExpense } from '../actions';
import { updateExpensePercentage } from '../actions';


const CalculateBudget = ({type,changeType,desc,changeDescription,value,changeValue,counter,changeCounter,addIncome,resetValue,resetDescription,totallIncome,addExpense,updateExpensePercentage,expenses})=>{

    useEffect(()=>{
        if(expenses.length>0){
            const expensesWithUpdatedPercentage = expenses.map(expense=>{expense.percentage=Math.ceil((expense.value/totallIncome)*100);
            return expense});
            updateExpensePercentage(expensesWithUpdatedPercentage);
        }
    },[totallIncome])

    return (
        <div className="calculate-budget">
            <div className="form-fields">

                <select className="select-income-or-expense" onChange={e=>changeType(e.target.value)}>
                    <option value="inc">+</option>
                    <option value="exp">-</option>
                </select>

                <input type="text" placeholder="Add description" value={desc} onChange={e=>changeDescription(e.target.value)}/>
                <input type="number" placeholder="value" value={value} onChange={e=>changeValue(e.target.value)}/>
                
                <button className="submit-btn" onClick={e=>{
                    if(type === 'inc'){
                        const newIncome = {id:counter,type,desc,value};
                        addIncome(newIncome);
                        changeCounter();
                        resetDescription();
                        resetValue();
                        alert('income is added');
                    }else if(type === 'exp'){
                        const percentage = totallIncome===0?null:((value/totallIncome)*100);
                        const newExpense = {id:counter,type,desc,value,percentage};
                        addExpense(newExpense);
                        changeCounter();
                        resetDescription();
                        resetValue();
                        alert('expense is added');
                    }
                }}>
                    <i className="ion-ios-checkmark-outline"></i>
                </button>
            </div>
        </div>
    );
};

const mapStateToProps = (state)=>{
    console.log(state);

    const incomes = state.incomes;
    let totallIncome = 0;
    if(incomes.length>0){
        incomes.forEach(income => {
            totallIncome+=parseInt(income.value);
        });
    }
    return {type:state.type,desc:state.desc,value:state.value,counter:state.counter,totallIncome,expenses:state.expenses};
}

export default connect(mapStateToProps,
    {changeType,changeDescription,changeValue,changeCounter,addIncome,resetValue,resetDescription,addExpense,updateExpensePercentage})
(CalculateBudget);