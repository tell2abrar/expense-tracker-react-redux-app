import React from 'react';
import { connect } from 'react-redux';

import './Expenses.css';
import { deleteExpense } from '../actions';

const Expenses = ({expenses,deleteExpense})=>{

    let listOfExpenses = null;
    if ( expenses.length > 0 ){
        listOfExpenses = expenses.map(expense=>{
            return(
                <div className="expense" key={expense.id}>
                    <p className="expense__desc">{expense.desc}</p>
                    <p className="expense__value">{`- ${expense.value}`}</p>
                    <p className="expense__percentage">{expense.percentage==null|Infinity?"---":`${expense.percentage}%`}</p>
                    <button className="expense__btn-delete" onClick={e=>deleteExpense(expense.id)}>
                        <i className="ion-ios-close-outline"></i>
                    </button>
                </div>
            );
            
        });
    }

    return (
        <div className="expenses">
            <h2 className="expense__heading">Expenses</h2>
            {listOfExpenses}
            {/* <div className="expense">
                <p className="expense__desc">Description</p>
                <p className="expense__value">- 500</p>
                <p className="expense__percentage">---</p>
                <button className="expense__btn-delete">
                    <i class="ion-ios-close-outline"></i>
                </button>
            </div> */}

        </div>
    );
};

const mapStateToProps = (state)=>{
    console.log("from Expenses");
    console.log(state.expenses);
    return {expenses:state.expenses}
}

export default connect(mapStateToProps,{deleteExpense})(Expenses);