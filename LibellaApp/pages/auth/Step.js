import * as React from 'react';
import { StatusBar } from "expo-status-bar";
import {StyleSheet, Text, TextInput, View, TouchableOpacity, Image } from "react-native";
import { LinearGradient } from 'expo-linear-gradient'; /* instalar */

const StepPage = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>STEP PAGE</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Login')}><Text style={styles.text}>LOGIN</Text></TouchableOpacity>
    </View>
  );
}

export default StepPage;

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