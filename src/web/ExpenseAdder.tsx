import { FunctionComponent, useState } from "react";
import styled from "styled-components";
import React from 'react';
import ActionButton from "./common/Button";
import { Expense } from "../core/types/types";
import moment from "moment";
import { Link } from "react-router-dom";



interface Props {
    onAddExpense(expenseName: Expense): any;
}

const ExpenseAdder: FunctionComponent<Props> = props => {
    const {onAddExpense} = props;
    const [expense, setExpense] = useState({expenseName:"", amount:0, date: moment()});
    return(
        <form onSubmit={(e)=>{e.preventDefault();onAddExpense(expense)}}>
            <h3>Expense type:</h3>
            <input value={expense.expenseName} onChange={e=>setExpense({expenseName: e.target.value, amount: expense.amount, date: expense.date})}/>
            <h3>Amount:</h3>
            <input value={expense.amount} onChange={e=>setExpense({expenseName: expense.expenseName, amount: Number(e.target.value), date: expense.date})}/>
            <br/>
            <input type="submit" value="save expense" disabled={expense.amount != 0? false: true} />
            <br/>
            <Link to='/home'>
                 <ActionButton name={"go back to home page"}/>
            </Link>
        </form>
    )
}

export default ExpenseAdder