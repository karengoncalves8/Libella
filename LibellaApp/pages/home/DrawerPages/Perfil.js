import * as React from 'react';
import { StatusBar } from "expo-status-bar";
import {StyleSheet, Text, TextInput, View, TouchableOpacity, Image } from "react-native";

const PerfilPage = ({navigation}) => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={"white"} style="auto" />
      <Text>PERFIL</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Termos')}><Text style={styles.text}>LOGIN</Text></TouchableOpacity>
    </View>
  );
}

export default PerfilPage;

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