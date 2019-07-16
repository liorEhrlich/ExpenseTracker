import { 
    AddExpenseAction, ADD_EXPENSE,
    DeleteExpenseAction, DELETE_EXPENSE
} from "./actionTypes";
import { Expense } from "../types/types";

export function addExpense(
    expense: Expense
): AddExpenseAction {
    return{
        type: ADD_EXPENSE,
        expense
    };
}

export function deleteExpense(
    expenseName: string
): DeleteExpenseAction {
    return{
        type: DELETE_EXPENSE,
        expenseName
    };
}


export default{
    addExpense,
    deleteExpense
}