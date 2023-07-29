import * as React from 'react';
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TextInput, View, TouchableOpacity, Image } from "react-native";

import { LinearGradient } from 'expo-linear-gradient'; /* instalar */

import Ionicons from "react-native-vector-icons/Ionicons";

const LoginPage = ({ navigation }) => {
  const [email, onChangeEmail] = React.useState('');
  const [senha, onChangeSenha] = React.useState('');

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={"white"} style="auto" />

      <Image
        style={styles.img}
        source={require('../../assets/img/Logos/Logo-roxa.png')}
      />

      <Text style={styles.title}>Login</Text>

      <View style={styles.inputbox}>
        <View style={styles.inputView}>
          <TextInput
            style={styles.input}
            onChangeText={onChangeEmail}
            value={email}
            placeholder="Email"
          />
          <Ionicons
            name="ios-mail-outline"
            size={35}
            color={"black"}
            style={styles.icon}
          />
        </View>

        <View style={{ alignItems: "flex-end", gap: 10 }}>
          <View style={styles.inputView}>
            <TextInput
              style={styles.input}
              onChangeText={onChangeSenha}
              value={senha}
              placeholder="Senha"
            />
            <Ionicons
              name="eye-outline"
              size={35}
              color={"black"}
              style={styles.icon}
            />
          </View>
          <Text style={styles.text}>Esqueceu a senha?</Text>
        </View>
      </View>

      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <LinearGradient
          colors={['#764DCC', '#4A2794']}
          style={styles.button}>
          <Text style={{
            textAlign: 'center',
            color: '#EBF8F5',
            fontSize: 20,
            lineHeight: 30,
            fontFamily: 'Poppins_700Bold',
          }}>
            LOGIN
          </Text>
        </LinearGradient>
      </TouchableOpacity>

      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Text style={styles.text}>Não tem uma conta? </Text>
        <TouchableOpacity onPress={() => navigation.navigate('Cadastro')}>
          <Text style={{ color: '#4A2794', fontSize: 16, fontFamily: 'Poppins_300Light'}}>Cadastre-se!</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default LoginPage;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#53A7D7",
    alignItems: "center",
    justifyContent: "center",
    gap: 27,
    paddingHorizontal: 30,
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

  icon: {
    opacity: 0.4,
  },

  title: {
    fontFamily: 'Comfortaa_700Bold',
    color: 'white',
    fontSize: 36,
  },

  img: {
    width: 167,
    height: 167,
    resizeMode: 'contain',
  },

  button: {
    width: 310,
    height: 55,
    borderRadius: 30,
    padding: 10,
  },

  text: {
    fontFamily: 'Poppins_300Light',
    color: 'white',
    fontSize: 16,
  },
}
);