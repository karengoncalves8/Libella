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

const PacientesPage = ({ navigation }) => {
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
              <Text style={styles.text}>Paciente 1</Text>
            </View>
            <EntypoIcon name="chevron-thin-right" size={22} color={"black"} />
          </TouchableOpacity>
          <View style={styles.pacienteContainer}>
            <View
              style={{ flexDirection: "row", alignItems: "center", gap: 25 }}
            >
              <Image
                style={styles.userImg}
                source={require("../../assets/img/Pessoas/Andreia.jpg")}
              />
              <Text style={styles.text}>Paciente 2</Text>
            </View>
            <EntypoIcon name="chevron-thin-right" size={22} color={"black"} />
          </View>
          <View style={styles.pacienteContainer}>
            <View
              style={{ flexDirection: "row", alignItems: "center", gap: 25 }}
            >
              <Image
                style={styles.userImg}
                source={require("../../assets/img/Pessoas/Andreia.jpg")}
              />
              <Text style={styles.text}>Paciente 3</Text>
            </View>
            <EntypoIcon name="chevron-thin-right" size={22} color={"black"} />
          </View>
          <View style={styles.pacienteContainer}>
            <View
              style={{ flexDirection: "row", alignItems: "center", gap: 25 }}
            >
              <Image
                style={styles.userImg}
                source={require("../../assets/img/Pessoas/Andreia.jpg")}
              />
              <Text style={styles.text}>Paciente 4</Text>
            </View>
            <EntypoIcon name="chevron-thin-right" size={22} color={"black"} />
          </View>
          <View style={styles.pacienteContainer}>
            <View
              style={{ flexDirection: "row", alignItems: "center", gap: 25 }}
            >
              <Image
                style={styles.userImg}
                source={require("../../assets/img/Pessoas/Andreia.jpg")}
              />
              <Text style={styles.text}>Paciente 5</Text>
            </View>
            <EntypoIcon name="chevron-thin-right" size={22} color={"black"} />
          </View>
        </View>
      </View>
    </TabContainer>
  );
};

export default PacientesPage;

const styles = StyleSheet.create({
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
    top: 40,
    alignItems: "center",
    justifyContent: "center",
    gap: 30,
  },

  pacienteContainer: {
    flex: 2,
    width: "100%",
    height: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "white",
    borderRadius: 7,
    paddingVertical: 15,
    paddingHorizontal: 20,
  },

  userImg: {
    width: 52,
    height: 52,
    borderRadius: 100,
  },

  iconImg: {
    width: 16,
    height: 16,
  },

  text: {
    fontSize: 14,
  },
});