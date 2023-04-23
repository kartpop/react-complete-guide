import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [isExpenseFormVisible, setIsExpenseFormVisible] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setIsExpenseFormVisible(false);
  };

  const cancelExpenseDataHandler = () => {
    setIsExpenseFormVisible(false);
  };

  const addExpenseButtonHandler = () => {
    setIsExpenseFormVisible(true);
  };

  const expenseFormElement = (
    <ExpenseForm
      onSaveExpenseData={saveExpenseDataHandler}
      onCancelExpenseData={cancelExpenseDataHandler}
    />
  );

  const addExpenseButtonElement = (
    <button className="new_expense__button" onClick={addExpenseButtonHandler}>
      Add New Expense
    </button>
  );

  return (
    <div className="new-expense">
      {!isExpenseFormVisible && addExpenseButtonElement}
      {isExpenseFormVisible && expenseFormElement}
    </div>
  );
};

export default NewExpense;
