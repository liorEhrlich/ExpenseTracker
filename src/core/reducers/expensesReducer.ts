import { Expenses } from "../types/types";
import { ExpensesAction, ADD_EXPENSE, DELETE_EXPENSE } from "../actions/actionTypes";
import { omit } from "lodash";

export interface ExpensesState {
    expenses: Expenses
}

const initialStateOfExpenses: ExpensesState = {
    expenses:{}
}

export default function expensesReducer(
    state: ExpensesState = initialStateOfExpenses,
    action: ExpensesAction 
) : ExpensesState {
    switch (action.type) {
        case ADD_EXPENSE:
            return{
                ...state,
                expenses: {
                    ...state.expenses,
                    [action.expense.expenseName]: action.expense
                }
            }
        case DELETE_EXPENSE:
            return{
                ...state,
                expenses: omit(state.expenses, action.expenseName)
            }
        default:
            return state;
    }
}