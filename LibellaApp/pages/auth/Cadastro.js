import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from "react-native";

import FeatherIcon from "react-native-vector-icons/Feather";
import SimpleLineIcon from "react-native-vector-icons/SimpleLineIcons";
import Ionicons from "react-native-vector-icons/Ionicons";
import AntIcon from "react-native-vector-icons/AntDesign";

import { LinearGradient } from 'expo-linear-gradient'; /* instalar */

const CadastroPage = ({ navigation }) => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Image
          style={styles.img}
          source={require('../../assets/img/Logos/Logo-roxa.png')}
        />

        <Text style={styles.title}>Cadastrar</Text>

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

        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <LinearGradient
            colors={['#764DCC', '#4A2794']}
            style={styles.button}>
            <Text style={{
              fontFamily: 'Comfortaa_700Bold',
              textAlign: 'center',
              color: '#EBF8F5',
              fontSize: 22,
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

  img: {
    top: 20,
    width: 167,
    height: 167,
    resizeMode: 'contain',
  },


  Input: {
    fontFamily: 'Poppins_300Light',
    fontSize: 20,
    color: "white",
    paddingTop: 15,
    paddingLeft: 10,
    paddingBottom: 5,
    marginBottom: 30,
    marginLeft: 30,
    textAlign: "left",
    borderRadius: 0,
    width: "90%",
    borderBottomColor: "#ffffff",
    borderBottomWidth: 1,
  },

  title: {
    marginTop: 20,
    fontFamily: 'Comfortaa_700Bold',
    color: 'white',
    fontSize: 36,
  },
});
