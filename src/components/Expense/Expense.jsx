import React, { useState } from "react";
import "./Expense.css";

import ExpenseItem from "../ExpenseItem/expenseItem";
import Card from "../Card/Card";

const Expense = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filteredChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filteredChangeHandler}
      />
      <ExpenseItem
        title={props.item[0].title}
        amount={props.item[0].amount}
        date={props.item[0].date}
      />

      <ExpenseItem
        title={props.item[1].title}
        amount={props.item[1].amount}
        date={props.item[1].date}
      />

      <ExpenseItem
        title={props.item[2].title}
        amount={props.item[2].amount}
        date={props.item[2].date}
      />
    </Card>
  );
};

export default Expense;
