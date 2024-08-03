import { Text } from "react-native";

function RenderExpenseItem(itemsData) {
  return <Text>{itemsData.item.description}</Text>;
}

export default RenderExpenseItem;
