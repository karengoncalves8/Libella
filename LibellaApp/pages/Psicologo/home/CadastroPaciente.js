import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from "react-native";

import FeatherIcon from "react-native-vector-icons/Feather";
import SimpleLineIcon from "react-native-vector-icons/SimpleLineIcons";
import Ionicons from "react-native-vector-icons/Ionicons";
import AntIcon from "react-native-vector-icons/AntDesign";


import { LinearGradient } from 'expo-linear-gradient'; /* instalar */

const CadastroPacientePage = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Ionicons
          name="person-outline"
          size={23}
          color={"black"}
          style={styles.icons}
        />

        <TextInput
          style={styles.Input}
          placeholder="Nome Completo"
          placeholderTextColor="#313131"
        />

        <FeatherIcon
          name="phone"
          size={23}
          color={"black"}
          style={styles.icons}
        />

        <TextInput
          style={styles.Input}
          placeholder="Telefone"
          placeholderTextColor="#313131"
        />

        <AntIcon name="idcard" size={25} color={"black"} style={styles.icons} />

        <TextInput
          style={styles.Input}
          placeholder="CPF"
          placeholderTextColor="#313131"
        />

        <AntIcon name="idcard" size={25} color={"black"} style={styles.icons} />

        <TextInput
          style={styles.Input}
          placeholder="RG"
          placeholderTextColor="#313131"
        />

        <SimpleLineIcon
          name="graduation"
          size={25}
          color={"black"}
          style={styles.icons}
        />

        <TextInput
          style={styles.Input}
          placeholder="Escolaridade"
          placeholderTextColor="#313131"
        />

        <SimpleLineIcon
          name="briefcase"
          size={25}
          color={"black"}
          style={styles.icons}
        />

        <TextInput
          style={styles.Input}
          placeholder="Ocupação"
          placeholderTextColor="#313131"
        />

        <Ionicons
          name="clipboard-outline"
          size={25}
          color={"black"}
          style={styles.icons}
        />

        <TextInput
          style={styles.Input}
          placeholder="Sintomas"
          placeholderTextColor="#313131"
        />

        <Ionicons
          name="location-outline"
          size={25}
          color={"black"}
          style={styles.icons}
        />

        <TextInput
          style={styles.Input}
          placeholder="Endereço"
          placeholderTextColor="#313131"
        />

        <Ionicons
          name="ios-mail-outline"
          size={25}
          color={"black"}
          style={styles.icons}
        />

        <TextInput
          style={styles.Input}
          placeholder="Email"
          placeholderTextColor="#313131"
        />

        <SimpleLineIcon
          name="lock"
          size={25}
          color={"black"}
          style={styles.icons}
        />

        <TextInput
          style={styles.Input}
          placeholder="Senha"
          placeholderTextColor="#313131"
        />

        <Ionicons
          name="eye-outline"
          size={25}
          color={"black"}
          style={styles.icon}
        />

<TouchableOpacity>
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

export default CadastroPacientePage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingHorizontal: 24,
    backgroundColor: '#F2F2F2',
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
    marginBottom: 0,
  },

  Input: {
    fontSize: 22,
    //fontFamily: 'Poppins',
    color: "#6D45C2",
    padding: 10,
    marginBottom: 30,
    marginLeft: 30,
    textAlign: 'left',
    borderRadius: 0,
    width: '90%',
    borderBottomColor: '#313131',
    borderBottomWidth: 1, 
  },
});
