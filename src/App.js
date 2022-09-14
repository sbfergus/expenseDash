import ExpenseItem from "./components/ExpenseItem";

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
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      />
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      />
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      />
    </div>
  );
}

export default App;
