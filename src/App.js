import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

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

  const addExpenseHandler = (expense) => {
    console.log("in App js");
    console.log(expense);
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
