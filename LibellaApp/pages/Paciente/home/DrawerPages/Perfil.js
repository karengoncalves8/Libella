import * as React from "react";

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
import MaterialCommunityIcon from "react-native-vector-icons/MaterialCommunityIcons";

const PerfilScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Image
          style={styles.userImg}
          source={require("../../../../assets/img/Pessoas/Andreia.jpg")}
        />
        <View style={styles.containerName}>
          <Text style={styles.textName}>Ser Humano</Text>
          <TouchableOpacity onPress={() => navigation.navigate("AlterarDadosPC")}>
            <MaterialCommunityIcon
              name="square-edit-outline"
              size={20}
              color={"#313131"}
            />
          </TouchableOpacity>
        </View>
      </View>

      <View style={{ gap: 15, width: "100%" }}>
        <View style={styles.card}>
          <TouchableOpacity
            onPress={() => navigation.navigate("ProgressoPC")}
            style={{
              alignSelf: "center",
              flexDirection: "row",
              alignItems: "center",
              gap: 2,
            }}
          >
            <Text style={styles.text}>Ver Progresso</Text>
            <FeatherIcon name="chevron-right" size={22} color={"#6D45C2"} />
          </TouchableOpacity>
        </View>
        <View style={styles.card}>
          <TouchableOpacity
            onPress={() => navigation.navigate("AgendaPC")}
            style={{
              alignSelf: "center",
              flexDirection: "row",
              alignItems: "center",
              gap: 2,
            }}
          >
            <Text style={styles.text}>Ver Consultas</Text>
            <FeatherIcon name="chevron-right" size={22} color={"#6D45C2"} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default PerfilScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "flex-start",
    padding: 20,
    top: 0,
    gap: 30,
    backgroundColor: "#F2F2F2",
    color: "white",
  },

  card: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    padding: 25,
    borderRadius: 10,
    gap: 15,
    shadowColor: "gray",
    elevation: 5,
    width: "100%",
  },

  containerName: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
  },

  textName: {
    fontSize: 20,
    color: "#313131",
    fontFamily: "Poppins_500Medium",
  },

  text: {
    fontSize: 16,
    color: "#6D45C2",
    fontFamily: "Poppins_500Medium",
  },

  userImg: {
    width: 120,
    height: 120,
    borderRadius: 100,
  },
});
