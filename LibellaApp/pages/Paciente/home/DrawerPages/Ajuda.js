import * as React from 'react';

import { StyleSheet, Text, TextInput, View, TouchableOpacity, Image } from "react-native";

import FeatherIcon from 'react-native-vector-icons/Feather'

const AjudaScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={{
        color: "#6D45C2",
        fontSize: 24,
        fontFamily: 'Comfortaa_500Medium',
      }}>Como podemos ajudar?</Text>
      <View style={styles.inputbox}>
        <View style={styles.inputView}>
          <FeatherIcon
            name="search"
            size={25}
            color={"#00000040"}
            style={styles.icon}
          />
          <TextInput style={styles.input}
            placeholder="Buscar"
            ></TextInput>
        </View>
      </View>
      <View style={styles.containerTopics}>
        <Text style={{
          color: "black",
          fontSize: 20,
          fontWeight: 700,
        }}>Tópicos</Text>
        <View style={styles.containerTopics2}>
          <View style={styles.containerTopics3}>
            <Text style={styles.font} > Registrar humor</Text>
          </View>
          <View style={styles.containerTopics3}>
            <Text style={styles.font}> Entregar atividade</Text>
          </View>
          <View style={styles.containerTopics3}>
            <Text style={styles.font}> Alterar Senha</Text>
          </View>
          <View style={styles.containerTopics3}>
            <Text style={styles.font}> Bloquear Notificações</Text>
          </View>
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

export default AjudaScreen;

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
  inputbox: {
    justifyContent: "center",
    gap: 27,
    width: "100%",
  },
  input: {
    fontFamily: 'Poppins_300Light',
    color:"red",
    fontSize: 16,
    marginLeft:8,
    flex: 1,
  },
  inputView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
    paddingHorizontal: 30,
    backgroundColor: '#F8F8F8',
  },
  containerTopics: {
    width: '100%',
    height: '46%',
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
    padding: 0,
    borderBottomWidth: 0.5,
    justifyContent: 'center',
  },
  containerFale: {
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    width: '100%',
    gap: 10,
    backgroundColor: "#F2F2F2",
  },
  font: {
    color: "#313131",
    fontSize: 14,
    fontWeight: 700,
    fontFamily: 'Poppins_300Light',
    marginLeft: 5,
  }


});