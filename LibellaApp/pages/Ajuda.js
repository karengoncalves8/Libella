import * as React from 'react';
import { StatusBar } from "expo-status-bar";
import {StyleSheet, Text, TextInput, View, TouchableOpacity, Image } from "react-native";

const AjudaPage = () => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={"white"} style="auto" />
      <Text>Ajuda</Text>
    </View>
  );
}

export default AjudaPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F2F2F2",
    alignItems: "center",
    justifyContent: "center",
    gap: 27,
    paddingHorizontal: 30,
  },
 
});