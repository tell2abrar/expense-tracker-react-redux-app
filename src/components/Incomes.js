import React from 'react';
import { connect } from 'react-redux';

import './Incomes.css';
import { deleteIncome } from '../actions';

const Incomes = ({incomes,deleteIncome})=>{

    let listOfIncomes = null;
    if( incomes.length > 0 ){
         listOfIncomes = incomes.map(income=>{
            return (
                <div className="income" key={income.id}>
                    <p className="income__desc">{income.desc}</p>
                    <p className="income__value">{`+ ${income.value}`}</p>
                    <button className="income__btn-delete" onClick={e=>deleteIncome(income.id)}>
                    <i className="fa fa-trash" aria-hidden="true"></i>
                    </button>
                </div>
            );
        });
    }

    return (
        <div className="incomes">
            <h2 className="income__heading">INCOME</h2>

            {listOfIncomes}

            {/* <div className="income">
                <p className="income__desc">Description</p>
                <p className="income__value">+ 500</p>
                <button className="income__btn-delete">
                    <i class="ion-ios-close-outline"></i>
                </button>
            </div> */}

        </div>
    );
};

const mapStateToProps = (state)=>{
    return {incomes:state.incomes}
};

export default connect(mapStateToProps,{deleteIncome})(Incomes);