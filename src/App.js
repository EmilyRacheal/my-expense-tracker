import "./App.css";

import { useState } from "react";
import Expense from "./components/Expense/Expense.jsx";
import NewExpense from "./components/NewExpense/newExpense";

const App = () => {
  const expense = [
    {
      title: "Car Insurance",
      date: new Date(2022, 5, 31),
      amount: 94.19,
    },
    {
      title: "Toilet Paper",
      date: new Date(2020, 6, 2),
      amount: 35.6,
    },
    {
      title: "up Keep",
      date: new Date(2022, 3, 12),
      amount: 674.4,
    },
  ];

  const addExpenseHandler = () => {
    console.log("in.app.jsx");
    console.log(expense);
  };

  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expense item={expense} />
    </div>
  );
};

export default App;
