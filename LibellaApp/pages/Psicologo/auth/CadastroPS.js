import React, { Component, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  ScrollView,
  ActivityIndicator
} from "react-native";

import { AuthContext } from "../../../components/navigation/Stack/AuthContext";

import FeatherIcon from "react-native-vector-icons/Feather";
import SimpleLineIcon from "react-native-vector-icons/SimpleLineIcons";
import Ionicons from "react-native-vector-icons/Ionicons";
import AntIcon from "react-native-vector-icons/AntDesign";

import { LinearGradient } from 'expo-linear-gradient'; /* instalar */

const CadastroScreen = ({ navigation }) => {
  const [id, setId] = useState('');
  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState('');
  const [cpf, setCpf] = useState('');
  const [rg, setRg] = useState('');
  const [crp, setCrp] = useState('');
  const [endereco, setEndereco] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const [timeOut, setTimeOut] = useState(10000);
  const [loading, setLoading] = useState(false);
  const [acess, setAcess] = useState(false);
  const [msg, setMsg] = useState('');

  async function cadastrar() {
    if (nome == "" || telefone == "" || cpf == "" || rg == "" || crp == "" || endereco == "" || email == "" || senha == "") {
      alert("Erro: Preencha todos os campos!")
    }

    else {

      var url = 'https://libellatcc.000webhostapp.com/Cadastro/CadastroPsicologo.php';
      var wasServerTimeout = false;
      var timeout = setTimeout(() => {
        wasServerTimeout = true;
        alert('Tempo de espera para busca de informações excedido');
      }, timeOut);

      const resposta = await fetch(url, {
        method: 'POST', //tipo de requisição
        body: JSON.stringify({ NomePsicologo: nome, TelefonePsicologo: telefone, CpfPsicologo: cpf, RgPsicologo: rg, CrpPsicologo: crp, EnderecoPsicologo: endereco, EmailPsicologo: email, SenhaPsicologo: senha }),
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
          if (mensagem == '"Informações inseridas com sucesso"') {
            alert(mensagem);
            navigation.navigate('Home')
          }

          else {
            alert("mensagem");
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
    <ScrollView>
      <View style={styles.container}>
        <Ionicons
          name="person-outline"
          size={23}
          color={"white"}
          style={styles.icons}
        />

        <TextInput
          style={styles.Input}
          placeholder="Nome Completo"
          placeholderTextColor="#ffffff"
          onChangeText={(text) => setNome(text)}
          value={nome}
        />

        <FeatherIcon
          name="phone"
          size={23}
          color={"white"}
          style={styles.icons}
        />

        <TextInput
          style={styles.Input}
          placeholder="Telefone"
          placeholderTextColor="#ffffff"
          onChangeText={(text) => setTelefone(text)}
          value={telefone}
          keyboardType={'phone-pad'}
        />

        <AntIcon name="idcard" size={25} color={"white"} style={styles.icons} />

        <TextInput
          style={styles.Input}
          placeholder="CPF"
          placeholderTextColor="#ffffff"
          onChangeText={(text) => setCpf(text)}
          value={cpf}
          keyboardType={'phone-pad'}
        />

        <AntIcon name="idcard" size={25} color={"white"} style={styles.icons} />

        <TextInput
          style={styles.Input}
          placeholder="CRP"
          placeholderTextColor="#ffffff"
          onChangeText={(text) => setCrp(text)}
          value={crp}
        />

        <AntIcon name="idcard" size={25} color={"white"} style={styles.icons} />

        <TextInput
          style={styles.Input}
          placeholder="RG"
          placeholderTextColor="#ffffff"
          onChangeText={(text) => setRg(text)}
          value={rg}
          keyboardType={'phone-pad'}
        />

        <Ionicons
          name="location-outline"
          size={25}
          color={"white"}
          style={styles.icons}
        />

        <TextInput
          style={styles.Input}
          placeholder="Endereço"
          placeholderTextColor="#ffffff"
          onChangeText={(text) => setEndereco(text)}
          value={endereco}
        />

        <Ionicons
          name="ios-mail-outline"
          size={25}
          color={"white"}
          style={styles.icons}
        />

        <TextInput
          style={styles.Input}
          placeholder="Email"
          placeholderTextColor="#ffffff"
          onChangeText={(text) => setEmail(text)}
          value={email}
        />

        <SimpleLineIcon
          name="lock"
          size={25}
          color={"white"}
          style={styles.icons}
        />

        <TextInput
          style={styles.Input}
          placeholder="Senha"
          placeholderTextColor="#ffffff"
          onChangeText={(text) => setSenha(text)}
          value={senha}
          secureTextEntry={true}
        />

        <Ionicons
          name="eye-outline"
          size={25}
          color={"white"}
          style={styles.icon}
        />

        <TouchableOpacity onPress={() => cadastrar()}>

          <LinearGradient
            colors={['#764DCC', '#4A2794']}
            style={styles.button}>
            <Text style={{
              textAlign: 'center',
              color: '#EBF8F5',
              fontSize: 20,
              lineHeight: 30,
            }}>
              CADASTRAR
            </Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default CadastroScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "flex-start",
    padding: 24,
    backgroundColor: "#53A7D7",
  },

  icons: {
    marginRight: 335,
    top: 39,
  },

  icon: {
    top: -65,
    left: 150,
  },

  button: {
    width: 310,
    height: 55,
    borderRadius: 30,
    padding: 10,
    fontWeight: "bold",
  },

  Input: {
    fontSize: 22,
    color: "white",
    padding: 10,
    marginBottom: 30,
    marginLeft: 30,
    textAlign: "left",
    borderRadius: 0,
    width: "90%",
    borderBottomColor: "#ffffff",
    borderBottomWidth: 1,
  },
});