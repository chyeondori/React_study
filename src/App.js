import "./App.css";
import Expenses from "./components/Expenses/Expenses";

const App = () => {
  const expenses = [
    { title: "My BirthDay", amount: 500, date: new Date(2022, 9, 28) },
    { title: "My BirthDay", amount: 500, date: new Date(2022, 9, 28) },
    { title: "My BirthDay", amount: 500, date: new Date(2022, 9, 28) },
    { title: "My BirthDay", amount: 500, date: new Date(2022, 9, 28) },
  ];

  return (
    <div className="App">
      <h2>리액트 프로젝트</h2>
      <p>프로젝트 설명</p>
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
