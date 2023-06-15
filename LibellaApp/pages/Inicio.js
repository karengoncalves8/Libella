import * as React from 'react';
import { StatusBar } from "expo-status-bar";
import {StyleSheet, Text, TextInput, View, TouchableOpacity, Image } from "react-native";

const InicioPage = () => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={"white"} style="auto" />
    </View>
  );
}

export default InicioPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#53A7D7",
    alignItems: "center",
    justifyContent: "center",
    gap: 27,
    paddingHorizontal: 30,
  },
 
});