import { useState } from "react";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import "./Expenses.css";
import ExpensesList from "./ExpensesList";

function Expenses(props) {
  const [filterYear, setFilterYear] = useState("2020");

  const saveFilterYear = (selectedYear) => {
    setFilterYear(selectedYear);
  };

  const filteredExpenses = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filterYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selected={filterYear} onYearSelected={saveFilterYear} />
        <ExpensesList filteredExpenses={filteredExpenses} />
      </Card>
    </div>
  );
}

export default Expenses;
