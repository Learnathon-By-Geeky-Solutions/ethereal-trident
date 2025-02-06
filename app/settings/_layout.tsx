import { Stack } from "expo-router";

export default function SettingsLayout() {
  return (
    <Stack>
      <Stack.Screen name="members" options={{ title: "Members Settings" }} />
      <Stack.Screen name="pin" options={{ title: "Pin Settings" }} />
      <Stack.Screen
        name="reminders"
        options={{ title: "Reminders Settings" }}
      />
    </Stack>
  );
}
