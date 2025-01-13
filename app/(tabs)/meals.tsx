import { StyleSheet, Text, View } from "react-native";

export default function Meals() {
  return (
    <View style={styles.container}>
      <Text style={styles.customText}>Hello from Meals!!</Text>
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