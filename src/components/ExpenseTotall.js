import React from 'react';
import { connect } from 'react-redux';
import './ExpenseTotall.css';

const ExpenseTotall = ({totallExpenses,totallExpensePercentage})=>{

    return (
        <div className="expense-totall">
            <p>EXPENSE</p>
            <p>{totallExpenses}</p>
            <p>{totallExpensePercentage===null?"---":`${totallExpensePercentage}%`}</p>
        </div>
    );
};

const mapStateToProps = (state)=>{
    const incomes = state.incomes;
    const expenses = state.expenses;
    let totallExpenses = 0;
    let totallIncome = 0;
    let totallExpensePercentage = null;
    if ( expenses.length > 0 ){
        expenses.forEach(expense => {
            totallExpenses+=parseInt(expense.value);
        });
    }
    if ( incomes.length > 0 ){
        incomes.forEach(income=>{
            totallIncome+=parseInt(income.value);
        })
        totallExpensePercentage = Math.round((totallExpenses/totallIncome)*100);
    }
    return {totallExpenses,totallExpensePercentage} 
}

export default connect(mapStateToProps)(ExpenseTotall);