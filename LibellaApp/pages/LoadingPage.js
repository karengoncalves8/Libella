import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";

export default function LoadingPage() {
  return (
    <View style={styles.container}>
       <Text>lo</Text>
       <Image
        source="https://picsum.photos/seed/696/3000/2000"
      />
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
