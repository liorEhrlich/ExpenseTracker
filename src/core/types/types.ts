import {Moment} from "moment"

export interface Expense{
    amount: number;
    expenseName: string;
    date: Moment
}

export interface Expenses{
    [key: string]: Expense
}