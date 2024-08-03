import { FlatList } from "react-native";
import RenderExpenseItem from "./RenderExpenseItem";

function ExpensesList({ expenses }) {
  return (
    <FlatList
      data={expenses}
      renderItem={RenderExpenseItem}
      keyExtractor={(item) => item.id}
    />
  );
}

export default ExpensesList;
