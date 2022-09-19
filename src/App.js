import "./App.css";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const App = () => {
  const expenses = [
    { title: "Toilet Paper", amount: 500, date: new Date(2022, 9, 28) },
    { title: "New TV", amount: 500, date: new Date(2022, 9, 28) },
    { title: "Car Insurrance", amount: 500, date: new Date(2022, 9, 28) },
    { title: "New Desk", amount: 500, date: new Date(2022, 9, 28) },
  ];

  const addExpenseHandler = (expense) => {
    console.log("In app.js");
    console.log(expense);
  };

  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
