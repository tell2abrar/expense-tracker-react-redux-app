export const changeType = (type)=>{
    return {
        type:'CHANGE_TYPE',
        payload:{
            type
        }
    }
}

export const changeDescription = (desc)=>{
    return {
        type:'CHANGE_DESCRIPTION',
        payload:{
            description:desc
        }
    }
};

export const changeValue = (value)=>{
    return {
        type:'CHANGE_VALUE',
        payload:{
            value
        }
    }
};

export const resetValue = ()=>{
    return {
        type:'RESET_VALUE'
    }
};

export const resetDescription = ()=>{
    return {
        type:'RESET_DESCRIPTION'
    }
};


export const changeCounter = ()=>{
    return {
        type:'CHANGE_COUNTER'
    }
};

export const addIncome = (income)=>{
    return {
        type:'ADD_ICOME',
        payload:{
            income
        }
    }
};

export const deleteIncome = (id)=>{
    return {
        type:'DELETE_ICOME',
        payload:{
            id
        }
    }
};

export const addExpense = (expense)=>{
    return {
        type:'ADD_EXPENSE',
        payload:{
            expense
        }
    }
};

export const updateExpensePercentage = (expense)=>{
    return {
        type:'UPDATE_EXPENSE_PERCENTAGE',
        payload:{
            expense
        }
    }
};

export const deleteExpense = (id)=>{
    return {
        type:'DELETE_EXPENSE',
        payload:{
            id
        }
    }
};