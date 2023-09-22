import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Hr,
} from "react-native";

import FeatherIcon from "react-native-vector-icons/Feather";
import SimpleLineIcon from "react-native-vector-icons/SimpleLineIcons";
import Ionicons from "react-native-vector-icons/Ionicons";
import AntIcon from "react-native-vector-icons/AntDesign";

const PerfilPCScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.containerProfile}>
        <View style={styles.containerUser}>
          <Image
            style={styles.userImg}
            source={require("../../../assets/img/Pessoas/Andreia.jpg")}
          />
        </View>
        <View style={styles.containerName}>
          <Text style={styles.name}>Ser Humano</Text>
        </View>
      </View>
      <View style={styles.containerInfos}>
        <Text style={styles.TitlePrincipal}>Contato</Text>
        <View style={styles.containerInfosBloco}>
          <Ionicons name="ios-mail-outline" size={25} color={"black"} />
          <Text style={styles.text}>blablablablabla</Text>
          {/*Esse texto vai mudar de acordo com o Banco de dados*/}
        </View>
        <View style={styles.containerInfosBloco}>
          <FeatherIcon name="phone" size={23} color={"black"} />
          <Text style={styles.text}>blablablablabla</Text>
          {/*Esse texto vai mudar de acordo com o Banco de dados*/}
        </View>
        <Text style={styles.TitlePrincipal}>Consultório</Text>
        <View style={styles.containerInfosBloco}>
          <Ionicons name="location-outline" size={25} color={"black"} />
          <Text style={styles.text}>blablablablabla</Text>
          {/*Esse texto vai mudar de acordo com o Banco de dados*/}
        </View>
        <Text style={styles.TitlePrincipal}>CRP</Text>
        <View style={styles.containerInfosBloco}>
          <AntIcon name="idcard" size={25} color={"black"} />
          <Text style={styles.text}>blablablablabla</Text>
          {/*Esse texto vai mudar de acordo com o Banco de dados*/}
        </View>
      </View>
    </View>
  );
};

export default PerfilPCScreen;

const styles = StyleSheet.create({
  // Containers
  container: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "flex-start",
    padding: 20,
    top: 20,
    gap: 20,
    backgroundColor: "#F2F2F2",
    color: "white",
  },

  containerProfile: {
    width: "100%",
    height: "32%",
    backgroundColor: "white",
    gap: 10,
    padding: 20,
    borderRadius: 10,
  },

  containerUser: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },

  containerName: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    gap: 10,
  },

  containerInfos: {
    width: "100%",
    backgroundColor: "white",
    padding: 20,
    paddingLeft: 30,
    borderRadius: 10,
    gap: 15,
  },

  containerInfosBloco: {
    width: "100%",
    flexDirection: "row",
    gap: 10,
    paddingLeft: 5,
  },

  // Textos
  name: {
    fontFamily: "Poppins_400Regular",
    fontSize: 22,
    color: "black",
    fontWeight: "bold",
  },

  TitlePrincipal: {
    fontFamily: "Poppins_500Medium",
    fontSize: 20,
    color: "#6D45C2",
  },

  text: {
    fontFamily: "Poppins_400Regular",
    fontSize: 15,
    color: "black",
  },

  // Imagens
  userImg: {
    width: 120,
    height: 120,
    borderRadius: 100,
  },

  icon: {
    minWidth: 20,
    minHeight: 20,
  },
});