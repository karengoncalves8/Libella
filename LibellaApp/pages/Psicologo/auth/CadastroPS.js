import React, { Component, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  ScrollView,
  ActivityIndicator,
  Image
} from "react-native";


import { useAuth } from "../../../components/navigation/Stack/AuthContext";

import FeatherIcon from "react-native-vector-icons/Feather";
import SimpleLineIcon from "react-native-vector-icons/SimpleLineIcons";
import Ionicons from "react-native-vector-icons/Ionicons";
import AntIcon from "react-native-vector-icons/AntDesign";

import { LinearGradient } from 'expo-linear-gradient'; /* instalar */

const CadastroScreen = ({ navigation }) => {
  const { logged } = useAuth();

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

  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

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
            logged()
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

      < Image
        style={styles.img}
        source={require('../../../assets/img/Logos/Logo-roxa.png')}
      />

      <Text style={styles.title}> Cadastro </Text>

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
          secureTextEntry={!showPassword}
        />

        <Ionicons
          name={showPassword ? 'eye-off-outline' : 'eye-outline'}
          size={25}
          color={"white"}
          style={styles.icon}
          onPress={toggleShowPassword}
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
    backgroundColor: "#53A7D7",
    paddingHorizontal: 30,
    paddingVertical: 30,
  },

  icons: {
    left: -130,
    top: 39,
  },

  icon: {
    top: -38,
    left: 130,
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
    paddingLeft: 50,
    paddingVertical: 10,
    textAlign: "left",
    borderRadius: 20,
    width: "90%",
    borderColor: "#ffffff",
    borderWidth: 1,
  },

  img: {
    width: 167,
    height: 167,
    resizeMode: 'contain',
  },

  title: {
    color: 'white',
    fontSize: 36,
  },
});