import { AppState } from "../reducers/rootReducer";
import { Expenses } from "../types/types";

export const getExpenses = (state: AppState): Expenses => state.expensesPart.expenses