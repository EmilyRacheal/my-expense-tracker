import React from "react";
import "../NewExpense/newExpense.css";
import Expenseform from "../ExpenseForm/Expenseform";

function NewExpense() {
  return (
    <div className="new-expense">
      <Expenseform />
    </div>
  );
}

export default NewExpense;
