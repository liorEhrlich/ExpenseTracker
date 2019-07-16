import { FunctionComponent, useState, useEffect } from "react";
import styled from "styled-components";
import React from 'react';
import { Expenses } from "../core/types/types";
import {isEmpty} from "lodash"
import { Link } from "react-router-dom";
import ActionButton from "./common/Button";

const StyledTable = styled.table`
  border: 1px solid white;
`;

const StyledHeader = styled.th`
  border: 1px solid white;
`;

const StyledRow = styled.tr`
  border: 1px solid white;
`;

const StyledSelectedRow = styled.tr`
  border: 1px solid white;
  background-color:#0C8A9F;
`;

const StyledTBody = styled.tbody`
  cursor: pointer;
`;

const StyledTd = styled.td`
  border: 1px solid white;
  text-align: center;
  margin:5px;
    `;


const columnTitles ={
    "expenseName": "expense name",
    "amount": "amount",
    "date": "date"
}   

interface Props {
    expenses: Expenses;
    onDeleteExpense(expenseName: string): void;
}

const ExpenseHistory: FunctionComponent<Props> = props => {
    const {expenses, onDeleteExpense} = props;
    const [selectedExpense, setSelectedExpense] = useState("");
    if(!isEmpty(expenses))
    return(
      <div>
        <ActionButton name={"delete expense"} onClick={()=>onDeleteExpense(selectedExpense)}/>
        <StyledTable>
            <thead>
                <StyledRow>
                   {Object.values(columnTitles).map(title => {
                       return <StyledHeader>{title}</StyledHeader>
                   })}
                </StyledRow>
             </thead>
         <StyledTBody>
            {Object.values(expenses).map(expense=> {
               if(selectedExpense === expense.expenseName)
                  return <StyledSelectedRow>
                          {Object.values(expense).map(prop => {
                              return <StyledTd onClick={()=>setSelectedExpense(expense.expenseName)}>{String(prop)}</StyledTd>
                          })}
                          </StyledSelectedRow>
                else
                    return <StyledRow>
                      {Object.values(expense).map(prop => {
                          return <StyledTd onClick={()=>setSelectedExpense(expense.expenseName)}>{String(prop)}</StyledTd>
                      })}
                      </StyledRow>
                })
            }
            </StyledTBody>
        </StyledTable>
        <Link to='/home'>
            <ActionButton name={"go back to home page"}/>
         </Link>
   </div>
    )
    else
    return (
      <div>
        <div>You don't have any expenses yet </div>
        <Link to='/home'>
              <ActionButton name={"go back to home page"}/>
          </Link>
      </div>)
}


export default ExpenseHistory