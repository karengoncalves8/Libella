import { StatusBar } from "expo-status-bar";
import { KeyboardAvoidingView, StyleSheet, Text, View } from "react-native";

export default function WelcomePage() {
  return (
    <View style={styles.container}>
       <Text>Login</Text>
      <StatusBar backgroundColor={"white"} style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#6C4CB0",
    alignItems: "center",
    justifyContent: "center",
  },
});