import * as React from 'react';
import { StatusBar } from "expo-status-bar";
import {StyleSheet, Text, TextInput, View, TouchableOpacity, Image } from "react-native";
import { LinearGradient } from 'expo-linear-gradient'; /* instalar */

const LoginPage = ({navigation}) => {
  const [email, onChangeEmail] = React.useState('');
  const [senha, onChangeSenha] = React.useState('');
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={"white"} style="auto" />

      <Image
          style={styles.img}
          source={require('../assets/img/Logo-roxa.png')}
      />

      <Text style={styles.title}> Login</Text>

      <View style={styles.inputbox}>
        <View style={styles.inputView}>
          <TextInput
            style={styles.input}
            onChangeText={onChangeEmail}
            value={email}
            placeholder="Email"
          />
          <Image style={styles.icon} source={require('../assets/icons/email.png')} />
        </View>
      
      <View style={{alignItems: "flex-end", gap: 10}}>
        <View style={styles.inputView}>
          <TextInput
            style={styles.input}
            onChangeText={onChangeSenha}
            value={senha}
            placeholder="Senha"
          />
          <Image style={styles.icon} source={require('../assets/icons/eye.png')} />
        </View>
          <Text style={styles.text}>Esqueceu a senha?</Text>
      </View>
      </View>

    <TouchableOpacity onPress={() => navigation.navigate('Inicio')}>
      <LinearGradient 
      colors={['#764DCC', '#4A2794']}
      style={styles.button}>
            <Text style={{
              textAlign: 'center',
              color: '#EBF8F5',
              fontSize: 20,
              fontFamily: 'PoppinsSemiBold',
              lineHeight: 30,
              }}>
              LOGIN
            </Text>
      </LinearGradient>
    </TouchableOpacity>

      <Text style={styles.text}>Não possui login? Peça ao seu psicólogo que realize o cadastro</Text>
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
    fontFamily: 'PoppinsRegular',
    fontSize: 16,
    flex: 1,
  },
  inputView:{
    height: 56,
    width: 310,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 30,
    paddingHorizontal: 30,
    backgroundColor: '#F8F8F8',
  },
  icon:{
    height: 30,
    width: 35,
    resizeMode: 'contain',
    opacity: 0.5,
  },
  title: {
    color: 'white',
    fontSize: 36,
    fontFamily: 'ComfortaaBold',
  },
  img: {
    width:167, 
    height:167,
    resizeMode: 'contain',
  },
  button:{
    width:310, 
    height:55,
    borderRadius: 30,
    padding: 10,
  },
  text:{
    color:'white', 
    fontSize: 16,
    fontFamily: 'PoppinsRegular',
  },
});