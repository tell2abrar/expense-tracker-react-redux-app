import React from 'react';
import './Month.css';


const getMonth = ()=>{
    const monthIndex = new Date().getMonth();
    switch(monthIndex){
        case 0:
            return "Januaray";
        case 1:
            return "Feburary";
        case 2:
            return "March";
        case 3:
            return "April";
        case 4:
            return "May";
        case 5:
            return "June";
        case 6:
            return "July";
        case 7:
            return "August";
        case 8:
            return "September";
        case 9:
            return "October";
        case 10:
            return "November";
        case 11:
            return "December";
        default:
            return null;
    }

}

const Month = ()=>{
   

    return (
        <h1 className="Month">
            Available Budget in {getMonth()}
        </h1>
    );
};

export default Month;