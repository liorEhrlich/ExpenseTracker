import React from 'react';
import {BrowserRouter as Routing, Route, Link, Redirect} from "react-router-dom"
import ExpenseAdder from './web/ExpenseAdderContainer';
import HomePage from './web/HomePage';
import ExpenseHistory from './web/ExpenseHistoryContainer';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body{
    background-color: #69BABB;
    color: white;
    position: fixed;
    top: 30%;
    left: 45%;
    transform: translate(-30%, -50%);
  }
`;


const App: React.FC = () => {
  return (
    <Routing>
      <GlobalStyle/>
      <Redirect from='/' to="/home"/>
      <Route exact strict path={`/home`} component={HomePage}/>
      <Route exact strict path={`/addExpense`} component={ExpenseAdder}/>
      <Route exact strict path={`/history`} component={ExpenseHistory}/>
    </Routing>
  );
}

export default App;
