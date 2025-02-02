import { routes } from "@/lib/routes";
import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function Items() {
  return (
    <View style={styles.container}>
      <Text style={styles.customText}>Hello from Items List!!</Text>
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
