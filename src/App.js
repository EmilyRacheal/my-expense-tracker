import "./App.css";

import { useState } from "react";
import ExpenseItem from "./components/ExpenseItem/expenseItem";

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

  return (
    <div className="App">
      <ExpenseItem
        title={expense[0].title}
        amount={expense[0].amount}
        date={expense[0].date}
      />

      <ExpenseItem
        title={expense[1].title}
        amount={expense[1].amount}
        date={expense[1].date}
      />

      <ExpenseItem
        title={expense[2].title}
        amount={expense[2].amount}
        date={expense[2].date}
      />
    </div>
  );
};

export default App;
