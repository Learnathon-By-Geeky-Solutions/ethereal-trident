import { Stack } from "expo-router";

export default function ItemsLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: "All Items" }} />
      <Stack.Screen name="new" options={{ title: "New Item" }} />
      <Stack.Screen name="[itemId]" options={{ title: "Item Details" }} />
    </Stack>
  );
}
