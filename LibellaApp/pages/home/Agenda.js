import * as React from 'react';
import { StatusBar } from "expo-status-bar";
import {StyleSheet, Text, TextInput, View, TouchableOpacity, Image } from "react-native";
import { LinearGradient } from 'expo-linear-gradient'; /* instalar */

const AgendaPage = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>AGENDA</Text>
    </View>
  );
}

export default AgendaPage;

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