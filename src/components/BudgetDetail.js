import React from 'react';

import './BudgetDetail.css';
import Expenses from './Expenses';
import Incomes from './Incomes';

const BudgetDetail = ()=>{
    return (
        <div className="budget-detail">
            <Incomes />
            <Expenses />
        </div>
    );
};

export default BudgetDetail;