import * as React from 'react';
import { StatusBar } from "expo-status-bar";
import {StyleSheet, Text, TextInput, View, TouchableOpacity, Image } from "react-native";
import { LinearGradient } from 'expo-linear-gradient'; /* instalar */

const PacientePage = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>PACIENTES</Text>
    </View>
  );
}

export default PacientePage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F2F2F2",
    alignItems: "center",
    justifyContent: "center",
    gap: 27,
    paddingHorizontal: 30,
  },
    color:'white', 
    fontSize: 16,
  },
);