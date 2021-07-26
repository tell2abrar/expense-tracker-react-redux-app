import React from 'react';
import { connect } from 'react-redux';
import './Savings.css';


const Savings = ({savings})=>{
    return (
        <h2 className="savings">
            {savings}
        </h2>
    );
};

const mapStateToProps = (state)=>{
    const incomes = state.incomes;
    const expenses = state.expenses;
    let totallIncome = 0;
    let totallExpense = 0;
    let savings = 0;
    if (incomes.length>0){
        incomes.forEach(income => {
            totallIncome+=parseInt(income.value);
        });
    }
    if (expenses.length>0){
        expenses.forEach(expense => {
            totallExpense+=parseInt(expense.value);
        });
    }
    savings = totallIncome - totallExpense;
    return {savings};
};

export default connect(mapStateToProps)(Savings);