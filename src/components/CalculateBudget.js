import React from 'react';
import './CalculateBudget.css';

const CalculateBudget = ()=>{
    return (
        <div className="calculate-budget">
            <div className="form-fields">

                <select className="select-income-or-expense">
                    <option value="inc">+</option>
                    <option value="exo">-</option>
                </select>

                <input type="text" placeholder="Add description"/>
                <input type="number"/>
                
                <button className="submit-btn">
                    <i className="ion-ios-checkmark-outline"></i>
                </button>
            </div>
        </div>
    );
};

export default CalculateBudget;