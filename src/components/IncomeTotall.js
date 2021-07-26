import React from 'react';
import { connect } from 'react-redux';
import './IncomeTotall.css';

const IncomeTotall = ({totallIncome})=>{
    return (
        <div className="income-totall">
            <p>INCOME</p>
            <p>{totallIncome}</p>
            <p style={{visibility: 'hidden'}}>0%</p>
        </div>
    );
};

const mapStateToProps = (state)=>{
    const incomes = state.incomes;
    let totallIncome = 0;
    if ( incomes.length > 0 ){
        incomes.forEach(income => {
            totallIncome+=parseInt(income.value);
        });
    }
    return {totallIncome};
};

export default connect(mapStateToProps)(IncomeTotall);