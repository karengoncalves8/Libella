import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from "react-native";

import { AuthContext } from "../../components/navigation/AuthContext";

import FeatherIcon from "react-native-vector-icons/Feather";
import SimpleLineIcon from "react-native-vector-icons/SimpleLineIcons";
import Ionicons from "react-native-vector-icons/Ionicons";
import AntIcon from "react-native-vector-icons/AntDesign";

import { LinearGradient } from 'expo-linear-gradient'; /* instalar */

const CadastroPage = ({ navigation }) => {
  const { Logged } = React.useContext(AuthContext);

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
        />

        <AntIcon name="idcard" size={25} color={"white"} style={styles.icons} />

        <TextInput
          style={styles.Input}
          placeholder="CPF"
          placeholderTextColor="#ffffff"
        />

        <AntIcon name="idcard" size={25} color={"white"} style={styles.icons} />

        <TextInput
          style={styles.Input}
          placeholder="CRP"
          placeholderTextColor="#ffffff"
        />

        <AntIcon name="idcard" size={25} color={"white"} style={styles.icons} />

        <TextInput
          style={styles.Input}
          placeholder="RG"
          placeholderTextColor="#ffffff"
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
        />

        <Ionicons
          name="eye-outline"
          size={25}
          color={"white"}
          style={styles.icon}
        />

<TouchableOpacity onPress={() => Logged()}>
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
    top:-65,
    left: 150,
  },

  button: {
    width:310, 
    height:55,
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