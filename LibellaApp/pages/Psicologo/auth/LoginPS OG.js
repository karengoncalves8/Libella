import React, { Component, useState } from 'react';
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TextInput, View, TouchableOpacity, Image, ActivityIndicator, Alert } from "react-native";

import { LinearGradient } from 'expo-linear-gradient'; /* instalar */

import { useAuth } from "../../../components/navigation/Stack/AuthContext";
import Ionicons from "react-native-vector-icons/Ionicons";

import AsyncStorage_ID from '@react-native-async-storage/async-storage';

const LoginPSScreen = ({ navigation }) => {
  const { login } = useAuth();
  const { logged } = useAuth();

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [id, setId] = useState(0);

  const [timeOut, setTimeOut] = useState(10000);
  const [loading, setLoading] = useState(false);
  const [acess, setAcess] = useState(false);
  const [msg, setMsg] = useState('');


  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const SalvarId = (key, value) => {
    AsyncStorage_ID.setItem(key, value)
  }

  async function recuperarId() {
    const value = await AsyncStorage_ID.getItem('IdPsicologo')
    setId(value)
  }

  async function auth() {
    if (email == "" || senha == "") {
      alert("Erro: Preencha todos os campos!")
    }

    else {
      var url = 'https://libellatcc.000webhostapp.com/Login/LoginPsicologo.php';
      var wasServerTimeout = false;
      var timeout = setTimeout(() => {
        wasServerTimeout = true;
        alert('Tempo de espera para busca de informações excedido');
      }, timeOut);

      const resposta = await fetch(url, {
        method: 'POST', //tipo de requisição
        body: JSON.stringify({ EmailPsicologo: email, SenhaPsicologo: senha }),
        headers: {
          'Content-Type': 'application/json',
        },
      })

        .then((response) => {
          timeout && clearTimeout(timeout);
          if (!wasServerTimeout) {
            return response.json();
          }
        })
        .then((responseJson) => {
          var mensagem = JSON.stringify(responseJson.informacoes[0].msg)
          if (mensagem == '"Login Realizado com sucesso"') {
            var urlBD = 'https://libellatcc.000webhostapp.com/Login/getInformaçõesBD.php';
            var wasServerTimeout = false;
            var timeout = setTimeout(() => {
              wasServerTimeout = true;
              alert('Tempo de espera para busca de informações excedido');
            }, timeOut);

            const resposta = fetch(urlBD, {
              method: 'POST', //tipo de requisição
              body: JSON.stringify({ EmailPsicologo: email, SenhaPsicologo: senha }),
              headers: {
                'Content-Type': 'application/json',
              },
            })

              .then((response) => {
                timeout && clearTimeout(timeout);
                if (!wasServerTimeout) {
                  return response.json();
                }
              })
              .then((responseJson) => {
                // IMPORTANTE recolhendo o id do banco de dados
                var PsicologoInfos = (responseJson.psicologo[0].IdPsicologo)
                // Salvando o Id para outras páginas
                SalvarId('IdPsicologo', PsicologoInfos)
              })
              //se ocorrer erro na requisição ou conversão
              .catch((error) => {
                timeout && clearTimeout(timeout);
                if (!wasServerTimeout) {
                  //Error logic here
                }

                alert('erro' + error)
              });
            login({ email, senha });
            logged()
          }

          else {
            Alert.alert('Erro de Login', 'Revise seu email e senha e tente novamente!');
          }
        })
        //se ocorrer erro na requisição ou conversãok
        .catch((error) => {
          timeout && clearTimeout(timeout);
          if (!wasServerTimeout) {
            //Error logic here
          }

          //  alert('erro'+error)
        });

    }
  }
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={"white"} style="auto" />

      <Image
        style={styles.img}
        source={require('../../../assets/img/Logos/Logo-roxa.png')}
      />

      <Text style={styles.title}>Login</Text>

      <View style={styles.inputbox}>
        <View style={styles.inputView}>
          <TextInput
            style={styles.input}
            onChangeText={(text) => setEmail(text)}
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
              onChangeText={(text) => setSenha(text)}
              value={senha}
              placeholder="Senha"
              secureTextEntry={!showPassword}
            />
            <Ionicons
              name={showPassword ? 'eye-off-outline' : 'eye-outline'}
              size={35}
              color={"black"}
              style={styles.icon}
              onPress={toggleShowPassword}
            />
          </View>
          <Text style={styles.text}>Esqueceu a senha?</Text>
        </View>
      </View>

      <TouchableOpacity onPress={() => auth()}>
        <LinearGradient
          colors={['#764DCC', '#4A2794']}
          style={styles.button}>
          <Text style={{
            textAlign: 'center',
            color: '#EBF8F5',
            fontSize: 20,
            lineHeight: 30,
          }}>
            LOGIN
          </Text>
        </LinearGradient>
      </TouchableOpacity>

      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Text style={styles.text}>Não tem uma conta? </Text>
        <TouchableOpacity onPress={() => navigation.navigate('CadastroPS')}>
          <Text style={{ color: '#4A2794', fontSize: 16, }}>Cadastre-se!</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default LoginPSScreen;
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
    color: 'white',
    fontSize: 16,
  },
}
);