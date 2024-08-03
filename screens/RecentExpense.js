import { Text } from "react-native";
import ExpensesOutput from "../components/ExpenssesOutput/ExpensesOutput";

function RecentExpense() {
  return <ExpensesOutput expensesPeriod="Last 7 Days" />;
}

export default RecentExpense;
