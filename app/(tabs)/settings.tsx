import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function Settings() {
  return (
    <View style={styles.container}>
      <Text style={styles.customText}>Hello from Settings!!</Text>
      <Link style={styles.link} href="/settings/members">
        Go to Members Settings
      </Link>
      <Link style={styles.link} href="/settings/pin">
        Go to Pins Settings
      </Link>
      <Link style={styles.link} href="/settings/reminders">
        Go to Reminders Settings
      </Link>
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
  link: {
    color: "blue",
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: "#f0f0f0",
    marginBottom: 5,
    marginTop: 5,
    fontSize: 16,
  },
});
