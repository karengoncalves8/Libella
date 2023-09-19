import React, { Component, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  ScrollView,
  ActivityIndicator,
  Alert
} from "react-native";

import { TextInputMask } from 'react-native-masked-text'; // instalar
import SelectDropdown from 'react-native-select-dropdown'; // instalar

import { AuthContext } from "../../components/navigation/AuthContext";

import FeatherIcon from "react-native-vector-icons/Feather";
import SimpleLineIcon from "react-native-vector-icons/SimpleLineIcons";
import Ionicons from "react-native-vector-icons/Ionicons";
import AntIcon from "react-native-vector-icons/AntDesign";

import { LinearGradient } from 'expo-linear-gradient'; /* instalar */

const CadastroPage = ({ navigation }) => {
  // declarando os estados do brasil em uma váriavel
  const states = ["Alagoas", "Amapá", "Amazonas", "Bahia", "Ceará", "Distrito Federal", "Espírito Santo", "Goías", "Maranhão", "Mato Grosso", "Mato Grosso do Sul", "Minas Gerais", "Pará", "Paraiba", "Paraná", "Pernambuco", "Piauí", "Rio de Janeiro", "Rio Grande do Norte", "Rio Grande do Sul", "Rondônia", "Roraima", "Santa Catarina", "São Paulo", "Sergipe", "Tocantins"]

  const [id, setId] = useState(0);
  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState('');
  const [cpf, setCpf] = useState('');
  const [rg, setRg] = useState('');
  const [crp, setCrp] = useState('');
  const [endereco, setEndereco] = useState('');
  const [estado, setEstado] = useState('');
  const [cidade, setCidade] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const [viewpass, setViewPass] = useState(true);

  const [timeOut, setTimeOut] = useState(10000);
  const [loading, setLoading] = useState(false);
  const [acess, setAcess] = useState(false);
  const [msg, setMsg] = useState('');

  async function cadastrar() {
    if (nome == "" || telefone == "" || cpf == "" || rg == "" || crp == "" || endereco == "" || email == "" || senha == "" || cidade == "" || estado == "") {
      alert("Erro: Preencha todos os campos!")
    }
    else if (telefone.length < 14) {
      Alert.alert("Alerta de dados incorretos!", "Telefone inserido inválido")
    }
    else if (cpf.length < 14) {
      Alert.alert("Alerta de dados incorretos!", "CPF inserido inválido")
    }
    else if (rg.length < 12) {
      Alert.alert("Alerta de dados incorretos!", "RG inserido inválido")
    }
    else if (crp.length < 8) {
      Alert.alert("Alerta de dados incorretos!", "CRP inserido inválido")
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
        body: JSON.stringify({ NomePsicologo: nome, TelefonePsicologo: telefone, CpfPsicologo: cpf, RgPsicologo: rg, CrpPsicologo: crp, CidadePsicologo: cidade, EstadoPsicologo: estado, EnderecoPsicologo: endereco, EmailPsicologo: email, SenhaPsicologo: senha }),
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
          if (mensagem == '"Informações repetidas"') {
            Alert.alert("Informações repetidas!", "Alguma(s) informação(ões) (CPF, Telefone, CRP ou email) inserida(s) já existe em nosso aplicativo \nConfira as informações, e caso já tenha um cadastro volte para tela de login e realize-o!");
          }

          else if (mensagem == '"Informações inseridas com sucesso"') {
            Alert.alert("Cadastro realizado com sucesso", "Faça seu Login!");
            setId(IdPsicologo)
            navigation.navigate('Login')
          }

          else {
            // Aviso de Erro dados inseridos incorretos
            Alert.alert("Erro!", "Revise os dados inseridos!");
          }
        })
        //se ocorrer erro na requisição ou conversão
        .catch((error) => {
          timeout && clearTimeout(timeout);
          if (!wasServerTimeout) {
            Alert.alert("Alerta!", "Tempo de espera do servidor excedido!");
          }

        });
    }
  }

  async function viewPassword() {
    if (viewpass == true) {
      setViewPass(false)
    }

    else if (viewpass == false) {
      setViewPass(true)
    }
  }
  return (
    <ScrollView>
      <View style={styles.container}>

        {/* Text Input Nome Completo */}
        <Ionicons name="person-outline" size={23} color={"white"} style={styles.icons}/>
        <TextInput
          style={styles.Input}
          placeholder="Nome Completo"
          placeholderTextColor="#ffffff"
          onChangeText={(text) => setNome(text)}
          value={nome}
        />

        {/* Text Input Telefone */}
        <FeatherIcon name="phone" size={23} color={"white"} style={styles.icons}/>
        <TextInputMask
          style={styles.Input}
          placeholder="Telefone"
          placeholderTextColor="#ffffff"
          type={'cel-phone'}
          options={{
            maskType: 'BRL',
            withDDD: true,
            dddMask: '(99) '
          }}
          onChangeText={(text) => setTelefone(text)}
          value={telefone}
          keyboardType={'phone-pad'}
        />

        {/* Text Input CPF */}
        <AntIcon name="idcard" size={25} color={"white"} style={styles.icons} />
        <TextInputMask
          style={styles.Input}
          placeholder="CPF"
          placeholderTextColor="#ffffff"
          onChangeText={(text) => setCpf(text)}
          value={cpf}
          keyboardType={'phone-pad'}
          type={'cpf'}
        />

        {/* Text Input CRP */}
        <AntIcon name="idcard" size={25} color={"white"} style={styles.icons} />
        <TextInputMask
          style={styles.Input}
          placeholder="CRP"
          placeholderTextColor="#ffffff"
          onChangeText={(text) => setCrp(text)}
          value={crp}
          type={'custom'}
          options={{
            mask: '99/99999'
          }}
        />

        {/* Text Input RG */}
        <AntIcon name="idcard" size={25} color={"white"} style={styles.icons} />
        <TextInputMask
          style={styles.Input}
          placeholder="RG"
          placeholderTextColor="#ffffff"
          onChangeText={(text) => setRg(text)}
          value={rg}
          keyboardType={'phone-pad'}
          type={'custom'}
          options={{
            mask: '99.999.999-9',
          }}
        />

        {/* Text Input Estado */}
        <Ionicons name="location-outline" size={25} color={"white"} style={styles.icons}/>
        <SelectDropdown
          defaultButtonText={"Estado"}
          buttonStyle={styles.DropDownButton}
          buttonTextStyle={styles.DropDownButtonText}
          dropdownStyle={styles.DropDown}
          data={states}
          onSelect={(selectedItem) => setEstado(selectedItem)}
          buttonTextAfterSelection={(selectedItem, index) => {
            return selectedItem
          }}
          rowTextForSelection={(item, index) => {
            return item
          }}
        />

        {/* Text Input Cidade */}
        <Ionicons name="location-outline" size={25} color={"white"} style={styles.icons}/>
        <TextInput
          style={styles.Input}
          placeholder="Cidade"
          placeholderTextColor="#ffffff"
          onChangeText={(text) => setCidade(text)}
          value={cidade}
        />


        {/* Text Input Endereço */}
        <Ionicons name="location-outline" size={25} color={"white"} style={styles.icons}/>
        <TextInput
          style={styles.Input}
          placeholder="Endereço"
          placeholderTextColor="#ffffff"
          onChangeText={(text) => setEndereco(text)}
          value={endereco}
        />

        {/* Text Input Email */}
        <Ionicons name="ios-mail-outline" size={25} color={"white"} style={styles.icons}
        />
        <TextInput
          style={styles.Input}
          placeholder="Email"
          placeholderTextColor="#ffffff"
          onChangeText={(text) => setEmail(text)}
          value={email}
        />

        {/* Text Input Senha */}
        <SimpleLineIcon name="lock" size={25} color={"white"} style={styles.icons}/>
        <TextInput
          style={styles.Input}
          placeholder="Senha"
          placeholderTextColor="#ffffff"
          onChangeText={(text) => setSenha(text)}
          value={senha}
          secureTextEntry={viewpass}
        />

        {/* Botão para mostra/esconder a senha */}
        <TouchableOpacity onPress={() => viewPassword()}>
          <Ionicons name={viewpass == false ? "eye-off-outline" : "eye-outline"} size={25} color={"white"} style={styles.icon}/>
        </TouchableOpacity>
        
        {/* Botão para realizar o cadastro */}
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

export default CadastroPage;

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


  // DropDownConfigs
  DropDown: {
    padding: 0,
    borderRadius: 5,
    borderBottomColor: "#ffffff",
    borderBottomWidth: 1,
    justifyContent: 'flex-start',
  },

  DropDownButton: {
    backgroundColor: '#ffffff00',
    justifyContent: 'flex-start',
    width: "90%",
    borderRadius: 5,
    borderBottomColor: "#ffffff",
    borderBottomWidth: 1,
    padding: 10,
    marginBottom: 30,
    marginRight: 20,
  },

  DropDownButtonText: {
    color: "white",
    fontSize: 22,
    justifyContent: 'flex-start',
    alignItems: "flex-start",
    textAlign: "left",
    width: '100%',
  }
});