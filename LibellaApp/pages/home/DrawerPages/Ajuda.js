import * as React from 'react';
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TextInput, View, TouchableOpacity, Image } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

const AjudaPage = () => {
  return (
    <View style={styles.container}>
      <Text style={{
        color: "#6D45C2",
        fontSize: 24,
        fontFamily: 'Comfortaa_500Medium',
      }}>Como podemos ajudar?</Text>
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
          fontSize: 20,
          fontWeight: 700,
        }}>Tópicos</Text>
        <View style={styles.containerTopics2}>
          <View style={styles.containerTopics3}></View>
          <View style={styles.containerTopics3}></View>
          <View style={styles.containerTopics3}></View>
          <View style={styles.containerTopics3}></View>
        </View>
      </View>
      <View style={styles.containerFale}>
        <Text style={{
          color: "#313131",
          fontSize: 16,
          fontWeight: 700,
        }}>Não achou o que queria?<Text style={{
          color: "#6D45C2",
          fontSize: 16,
          fontWeight: 700,
        }}> Fale Conosco!</Text></Text>
        <View style={{
          width: '100%',
          padding: 10,
          borderRadius: 0,
          backgroundColor: 'red',
          backgroundColor: "white",
          borderRadius: 10,
          padding: 5,
        }}>
          <Text style={{
            color: "#313131",
            
            textAlign: 'center',
            fontSize: 14,
            fontWeight: 700,
            
            
          }}>libella@gmail.com</Text>
        </View>
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
    gap: 36,
    paddingHorizontal: 30,
    marginTop: 40,
  },
  containerTopics: {
    width: '100%',
    height: '45%',
    backgroundColor: '#F2F2F2',
    gap: 10,

    borderRadius: 10,
  },
  containerTopics2: {
    width: '100%',
    height: '75%',
    gap: 0,
    borderRadius: 10,
  },
  containerTopics3: {
    width: '100%',
    height: '25%',
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 0,
    borderBottomWidth: 0.5,
  },
  containerFale: {
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    width: '100%',
    gap: 10,
    backgroundColor: "#F2F2F2",
  },
  inputbox: {
    justifyContent: "center",
    gap: 27,
    width: "100%",
  },
  input: {
    fontFamily: 'Poppins_300Light',
    fontSize: 16,
    
    flex: 1,
  },
  inputView: {

    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 30,
    paddingHorizontal: 30,
    backgroundColor: '#F8F8F8',
  },


});