import "./App.css";
import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  { title: "Toilet Paper", amount: 500, date: new Date(2022, 9, 28) },
  { title: "New TV", amount: 500, date: new Date(2022, 9, 28) },
  { title: "Car Insurrance", amount: 500, date: new Date(2022, 9, 28) },
  { title: "New Desk", amount: 500, date: new Date(2022, 9, 28) },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
