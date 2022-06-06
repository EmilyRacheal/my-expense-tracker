import React from "react";
import "./Expense.css";

import ExpenseItem from "../ExpenseItem/expenseItem";
import Card from "../Card/Card";

function Expense(props) {
  return (
    <Card className="expenses">
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
}
 
export default Expense;
