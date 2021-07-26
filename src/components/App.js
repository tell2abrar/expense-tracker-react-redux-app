import React from 'react';

import './App.css';
import Header from './Header';
import CalculateBudget from './CalculateBudget';
import BudgetDetail from './BudgetDetail';

const App = ()=>{

    return (
        <div className="App">
            <div className="background">
                <Header />
                <CalculateBudget />
                <BudgetDetail />
            </div>
        </div>
    );
};

export default App;