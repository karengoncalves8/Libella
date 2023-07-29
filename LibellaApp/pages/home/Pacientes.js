import * as React from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Image,
} from "react-native";

import EntypoIcon from "react-native-vector-icons/Entypo";

import TabContainer from "../../components/navigation/TabContainer";

const PacientePage = ({ navigation }) => {
  return (
    <TabContainer>
      <View style={styles.container}>
        <View style={styles.mainContainer}>
          <TouchableOpacity
            onPress={() => navigation.navigate("PerfilPaciente")}
            style={styles.pacienteContainer}
          >
            <View
              style={{ flexDirection: "row", alignItems: "center", gap: 25 }}
            >
              <Image
                style={styles.userImg}
                source={require("../../assets/img/Pessoas/Andreia.jpg")}
              />
              <Text style={styles.text}>Andreia Ramos</Text>{/*Esse texto pode mudar de acordo com o Banco de dados*/}
            </View>
            <EntypoIcon name="chevron-thin-right" size={22} color={"black"} />
          </TouchableOpacity>
          {/*Pra adicionar mais pacientes basta copiar toda a touchableOpacity*/}
        </View>
      </View>
    </TabContainer>
  );
};

export default PacientePage;

const styles = StyleSheet.create({

  // Container
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    paddingHorizontal: 20,
    backgroundColor: "#F2F2F2",
    color: "white",
  },

  mainContainer: {
    width: "100%",
    height: "90%",
    top: 20,
    alignItems: "center",
    justifyContent: "flex-start",
    gap: 30,
  },

  pacienteContainer: {
    width: "100%",
    height: 80,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "white",
    borderRadius: 7,
    paddingVertical: 15,
    paddingHorizontal: 20,
  },




  // Imagens
  userImg: {
    width: 52,
    height: 52,
    borderRadius: 100,
  },

  iconImg: {
    width: 16,
    height: 16,
  },




  // Textos
  text: {
    fontFamily: 'Poppins_500Medium',
    fontSize: 17,
    marginTop: 5,
  },
});
