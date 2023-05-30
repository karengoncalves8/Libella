import * as React from 'react';
import { StatusBar } from "expo-status-bar";
import {StyleSheet, Text, TextInput, View, TouchableOpacity, Image } from "react-native";

export default function LoginPage() {
  const [text, onChangeNumber] = React.useState('');
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={"white"} style="auto" />

      <Image
          style={styles.img}
          source={require('../assets/img/Logo-roxa.png')}
      />

      <Text style={styles.title}> Login</Text>

      <View style={styles.inputbox}>
        <TextInput
          style={styles.input}
          onChangeText={onChangeNumber}
          value={text}
          placeholder="Email"
        />

        <TextInput
          style={styles.input}
          onChangeText={onChangeNumber}
          value={text}
          placeholder="Senha"
        />
        <Text style={{color:'white', fontSize: 16}}>Esqueceu a senha?</Text>
      </View>

      <TouchableOpacity
            style={{
              alignItems: 'center',
              backgroundColor: ' linear-gradient(red, yellow)',
              borderRadius: 30,
              marginTop: 10,
              padding: 10,
              width: 273,
            }}>
            <Text
              style={styles.button}>
              Conectar
            </Text>
          </TouchableOpacity>

      <Text>Não possui login? Peça ao seu psicólogo que realize o cadastro</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#53A7D7",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
  },
  inputbox: {
    alignItems: "flex-end",
    justifyContent: "center",
    gap: 10,
  },
  input: {
    height: 56,
    width: 286,
    borderRadius: 30,
    paddingHorizontal: 30,
    backgroundColor: '#F8F8F8',
  },
  title: {
    color: 'white',
    fontSize: 36
  },
  img: {
    width:167, 
    height:167,
    resizeMode: 'contain',
  },
  button:{
    backgroundColor: 'purple',
    width:273, 
    height:49,
    textAlign: 'center',
    textAlignVertical: 'center',
    color: '#EBF8F5',
    fontWeight: '600',
    fontSize: 20,
    lineHeight: 30,
  },
});