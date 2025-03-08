import { Stack } from "expo-router";

export default function ExepensesLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: "All Expenses" }} />
      <Stack.Screen name="new" options={{ title: "New Expense" }} />
      <Stack.Screen name="[expenseId]" options={{ title: "Expense Details" }} />
    </Stack>
  );
}
