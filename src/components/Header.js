import React from 'react';
import './Header.css';
import Month from '../components/Month';
import Savings from '../components/Savings';
import IncomeTotall from '../components/IncomeTotall';
import ExpenseTotall from '../components/ExpenseTotall';

const Header = ()=>{
    return (
        <div className="header">
            <Month />
            <Savings />
            <IncomeTotall />
            <ExpenseTotall />
        </div>
    );
};

export default Header;