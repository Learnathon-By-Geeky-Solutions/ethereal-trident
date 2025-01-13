import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen
        name="expenses/all"
        options={{ title: "All Expenses", headerTitleStyle: { fontSize: 20 } }}
      />
      <Stack.Screen
        name="expenses/[expenseId]"
        options={{
          title: "Expense Details",
          headerTitleStyle: { fontSize: 20 },
        }}
      />
      <Stack.Screen
        name="items/[itemId]"
        options={{
          title: "Item Details",
          headerTitleStyle: { fontSize: 20 },
        }}
      />
      <Stack.Screen
        name="expenses/new"
        options={{
          title: "New Expense",
          headerTitleStyle: { fontSize: 20 },
        }}
      />
      <Stack.Screen
        name="items/new"
        options={{
          title: "New Item",
          headerTitleStyle: { fontSize: 20 },
        }}
      />
    </Stack>
  );
}
