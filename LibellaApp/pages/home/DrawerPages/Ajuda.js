import * as React from 'react';
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TextInput, View, TouchableOpacity, Image } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

const AjudaPage = () => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={"white"} style="auto" />
      <Text style={styles.font}>Como podemos ajudar?</Text>
      <View style={styles.inputbox}>
        <View style={styles.inputView}>
          <TextInput
            style={styles.input}
            placeholder="Buscar"
          />
        </View>
      </View>
      <View style={styles.containerTopics}>
        <Text style={{
          color: "black",
          fontSize: 15
        }}>Tópicos</Text>
         <View style={styles.containerTopics2}></View>
      </View>
    </View>

  );
}

export default AjudaPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F2F2F2",
    alignItems: "center",
    justifyContent: "flex-start",
    gap: 45,
    top: 20,
    paddingHorizontal: 30,
  },
  containerTopics: {
    width: '100%',
    height: '35%',
    backgroundColor: 'red',
    gap: 10,
    padding: 20,
    borderRadius: 10,
  },
  containerTopics2: {
    width: '100%',
    height: '55%',
    backgroundColor: 'blue',
    gap: 10,
    padding: 20,
    borderRadius: 10,
  },
  font: {
    color: "#6D45C2",
    fontSize: 20,
  },
  inputbox: {
    justifyContent: "center",
    gap: 27,
  },
  input: {
    fontFamily: 'Poppins_300Light',
    fontSize: 16,
    flex: 1,
  },
  inputView: {
    height: 56,
    width: 310,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 30,
    paddingHorizontal: 30,
    backgroundColor: '#F8F8F8',
  },


});