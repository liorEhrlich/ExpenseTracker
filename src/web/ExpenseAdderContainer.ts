import { Dispatch } from "react";
import { ExpensesAction } from "../core/actions/actionTypes";
import { Moment } from "moment";
import { addExpense } from "../core/actions/actionCreators";
import { Expense } from "../core/types/types";
import { connect } from "react-redux";
import ExpenseAdder from "./ExpenseAdder";
import store from "../core/store/configureStore";

const mapDispatchToProps = (dispatch: Dispatch<ExpensesAction>) => {
    return {
        onAddExpense: (expense: Expense) => {
            dispatch(addExpense(expense))
            alert(`You have added a new expense of type ${expense.expenseName}`)
        }
    }
}

export default connect(
    null,
    mapDispatchToProps
)(ExpenseAdder)