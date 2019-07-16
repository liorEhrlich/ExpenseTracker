import { FunctionComponent } from "react";
import styled from "styled-components";
import React from 'react';
import { Link } from "react-router-dom";
import ActionButton from "./common/Button";



interface Props {
    name:string
}

const HomePage: FunctionComponent<Props> = props => {
    const {name} = props;
    return(
        <div>
            <h1>Expense Tracker</h1>
            <h3>Spent some cash? let's record it!</h3>
            <Link to={`/addExpense`}>
                <ActionButton name={"Add an Expense"}/>
            </Link>
            <Link to={`/history`}>
                <ActionButton name={"View all expenses"}/>
            </Link>
        </div>
    )
}

export default HomePage