import React from "react";
import ExpenseDate from "../ExpenseDate/ExpenseDate";
import "./ExpenseItem.css";
import Card from "../Card/Card";

const ExpenseItem = (props) => {
  let title = props.title;

  const clickHandler = () => {
    title = "updated";
    console.log(title);
  };
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <h2>{props.title}</h2>
      <div className="expense-item_description">
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
};

export default ExpenseItem;
