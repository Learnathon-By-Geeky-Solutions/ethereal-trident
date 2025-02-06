import { routes } from "@/lib/routes";
import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function NewExpense() {
  return (
    <View style={styles.container}>
      <Text style={styles.customText}>Hello from new expense page!!</Text>
      <Link href={routes.items.new} style={styles.link}>
        Create new Item
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
