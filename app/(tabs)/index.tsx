import { Link } from "expo-router";
import { PropsWithChildren } from "react";
import { StyleSheet, Text, View } from "react-native";
import { routes } from "@/lib/routes";

export const CustomText = ({ children }: PropsWithChildren) => (
  <Text style={styles.customText}>{children}</Text>
);

export default function Dashboard() {
  return (
    <View style={styles.container}>
      <CustomText>Hello from Dashboard!!</CustomText>
      <Link href={routes.expenses.list} style={styles.link}>
        Go to Expenses
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
