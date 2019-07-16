import {combineReducers} from "redux";
import expensesReducer from "./expensesReducer"

const rootReducer = combineReducers({
    expensesPart: expensesReducer
})

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;