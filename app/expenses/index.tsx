import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function Expenses() {
  return (
    <View style={styles.container}>
      <Link href={{ pathname: "expenses/new" }} style={styles.link}>
        Create new Expense
      </Link>
      <Text style={styles.customText}>Hello from Expenses!!</Text>
      <Link href={{ pathname: "expenses/1" }} style={styles.link}>
        Go to Expense 1
      </Link>
      <Link href={{ pathname: "expenses/2" }} style={styles.link}>
        Go to Expense 2
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
