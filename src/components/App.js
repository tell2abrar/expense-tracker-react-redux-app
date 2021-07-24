import React from 'react';
import './App.css';
import Header from './Header';
import CalculateBudget from './CalculateBudget';

const App = ()=>{

    return (
        <div className="App">
            <div className="background">
                <Header />
                <CalculateBudget />
            </div>
        </div>
    );
};

export default App;