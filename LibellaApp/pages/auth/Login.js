import React, { Component, useState } from 'react';
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TextInput, View, TouchableOpacity, Image, Keyboard, route } from "react-native";

import { LinearGradient } from 'expo-linear-gradient'; /* instalar */

import { AuthContext } from "../../components/navigation/AuthContext";
import Ionicons from "react-native-vector-icons/Ionicons";


export default class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      check_textInputChange: false,
      secureTextEntry: true,
    };
  }

  InsertRecord = () => {
    var Email = this.state.email;
    var Password = this.state.password;

    if ((Email.length == 0) || (Password.length == 0)) {
      alert("Preencha o campo corretamente");
      
    }
    
    else {
      
      var APIURL = "https://libellatcc.000webhostapp.com/login.php";


      var Data = {
        Email: Email,
        Password: Password
      };
      fetch(APIURL, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(Data)
      })
        .then((response) => response.json()) //check response type of API (CHECK OUTPUT OF DATA IS IN JSON)
        .then((response) => {
          alert(response[0].Message);       // If data is in JSON => Display alert msg
          this.props.navigation.navigate("Home"); //Navigate to next screen if authentications are valid
        })
        .catch((error) => {
          alert("Error Occured" + error);
        })
        console.log(Data)
    }
  }

  updateSecureTextEntry() {
    this.setState({
      ...this.state,
      secureTextEntry: !this.state.secureTextEntry
    });
  }
  render() {
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
              onChangeText={email => this.setState({ email })}
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
                onChangeText={password => this.setState({ password })}
                placeholder="Senha"
                secureTextEntry={true}
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

        <TouchableOpacity onPress={() => {
          this.InsertRecord()
        }}>
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
          <TouchableOpacity onPress={() => navigation.navigate('Cadastro')}>
            <Text style={{ color: '#4A2794', fontSize: 16, }}>Cadastre-se!</Text>
          </TouchableOpacity>
        </View>

        <Text style={{ color: '#4A2794', fontSize: 16, }}>{Response}</Text>
      </View>
    );
  }
}


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