import React from "react";
import "../NewExpense/newExpense.css";
import Expenseform from "../ExpenseForm/Expenseform";

function NewExpense(props) {
  const saveExpenseDateHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };

  return (
    <div className="new-expense">
      <Expenseform onSaveExpenseData={saveExpenseDateHandler} />
    </div>
  );
}

export default NewExpense;
