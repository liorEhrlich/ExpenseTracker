import { AppState } from "../core/reducers/rootReducer";
import { getExpenses } from "../core/selectors/expensesSelector";
import { connect } from "react-redux";
import ExpenseHistory from "./ExpenseHistory";
import { ExpensesAction } from "../core/actions/actionTypes";
import { Dispatch } from "react";
import { deleteExpense } from "../core/actions/actionCreators";
import store from "../core/store/configureStore";



const mapStateToProps = (state: AppState) => {
    return {
            expenses: getExpenses(state)
        }
}

const mapDispatchToProps = (dispatch: Dispatch<ExpensesAction>) => {
    return {
        onDeleteExpense: (expenseName: string) => {
            dispatch(deleteExpense(expenseName))
        }
    }
}


    

    export default connect(
        mapStateToProps,
        mapDispatchToProps
    )(ExpenseHistory)