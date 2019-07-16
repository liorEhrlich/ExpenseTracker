import { Expense } from "../types/types";

export const ADD_EXPENSE = "expensesActionTypes/ADD_EXPENSE"
export const DELETE_EXPENSE = "expensesActionTypes/DELETE_EXPENSE"


export interface AddExpenseAction{
    type: typeof ADD_EXPENSE;
    expense: Expense;
}

export interface DeleteExpenseAction{
    type: typeof DELETE_EXPENSE;
    expenseName: string;
}

export type ExpensesAction = 
| AddExpenseAction
| DeleteExpenseAction