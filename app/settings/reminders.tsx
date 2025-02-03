import { StyleSheet, Text, View } from "react-native";

export default function ReminderSettings() {
  return (
    <View style={styles.container}>
      <Text style={styles.customText}>Hello from Reminder Settings!!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  customText: {
    fontSize: 24,
    fontWeight: "bold",
  },
});
