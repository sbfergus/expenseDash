import Expenses from "./components/Expenses/Expenses";

function App() {
  const expenses = [
    {
      id: "e1",
      title: "Car Insurance",
      amount: 209.49,
      date: new Date(2022, 2, 28),
    },
    {
      id: "e2",
      title: "New TV",
      amount: 799.99,
      date: new Date(2022, 4, 4),
    },
    {
      id: "e3",
      title: "Utilities",
      amount: 35.79,
      date: new Date(2022, 7, 15),
    },
  ];

  return (
    <div>
      <h2> Let 's get started!</h2>
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
