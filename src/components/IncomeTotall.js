import React from 'react';
import './IncomeTotall.css';

const IncomeTotall = ()=>{
    return (
        <div className="income-totall">
            <p>INCOME</p>
            <p>0</p>
            <p style={{visibility: 'hidden'}}>0%</p>
        </div>
    );
};

export default IncomeTotall;