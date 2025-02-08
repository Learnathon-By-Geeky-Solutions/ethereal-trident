import { routes } from "@/lib/routes";
import { Link, useLocalSearchParams } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function Expense() {
  const params = useLocalSearchParams();

  return (
    <View style={styles.container}>
      <Link href={routes.items.new} style={styles.link}>
        Create a new Item
      </Link>
      <Text style={styles.customText}>
        Hello from Expense no {params.expenseId}
      </Text>
      <Link href={routes.items.detail(1)} style={styles.link}>
        Go to Item 1
      </Link>
      <Link href={routes.items.detail(2)} style={styles.link}>
        Go to Item 2
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
