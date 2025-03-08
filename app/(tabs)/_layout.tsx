import { Tabs } from "expo-router";
import TabBar from "@/components/TabBar";

export default function TabsLayout() {
  return (
    <Tabs tabBar={TabBar}>
      <Tabs.Screen
        name="index"
        options={{
          title: "Dashboard",
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="members"
        options={{
          title: "Members",
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="meals"
        options={{
          title: "Meals",
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: "Settings",
          headerShown: false,
        }}
      />
    </Tabs>
  );
}
