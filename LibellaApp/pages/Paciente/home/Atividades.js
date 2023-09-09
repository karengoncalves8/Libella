import * as React from "react";

import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

import EntypoIcon from "react-native-vector-icons/Entypo";
import FeatherIcon from "react-native-vector-icons/Feather";
import AntIcon from "react-native-vector-icons/AntDesign";

import TabContainer from "../../../components/navigation/Paciente/BottomTab/TabContainer";

const AtividadesScreen = ({ navigation }) => {
  return (
    <TabContainer>
      <View style={styles.container}>
        <View style={{ width: "100%", gap: 5 }}>
          <Text style={styles.tituloData}>
            24 mar<Text style={styles.dataSem}> | Quarta-feira </Text>
          </Text>
          <TouchableOpacity
            style={styles.card}
            onPress={() => navigation.navigate("AtividadeEsp")}
          >
            <View style={{ flexDirection: "column", gap: 5 }}>
              <Text style={styles.titulo}>Roda da Vida</Text>
              <Text style={styles.texto}>Prazo de entrega ás 23:59</Text>
            </View>
            <EntypoIcon name="chevron-thin-right" size={22} color={"black"} />
          </TouchableOpacity>
        </View>

        <View style={{ width: "100%", gap: 5 }}>
          <Text style={styles.tituloData}>
            1 abril<Text style={styles.dataSem}> | Segunda-feira </Text>
          </Text>
          <TouchableOpacity style={styles.card}>
            <View style={{ flexDirection: "column", gap: 5 }}>
              <Text style={styles.titulo}>Auto Recompensa</Text>
              <Text style={styles.texto}>Prazo de entrega ás 13:59</Text>
            </View>
            <EntypoIcon name="chevron-thin-right" size={22} color={"black"} />
          </TouchableOpacity>
        </View>

        <View style={{ width: "100%", gap: 5 }}>
          <Text style={styles.tituloData}>
            13 abril<Text style={styles.dataSem}> | Quinta-feira </Text>
          </Text>
          <TouchableOpacity style={styles.card}>
            <View style={{ flexDirection: "column", gap: 5 }}>
              <Text style={styles.titulo}>Máquina do Tempo</Text>
              <Text style={styles.texto}>Prazo de entrega ás 13:59</Text>
            </View>
            <EntypoIcon name="chevron-thin-right" size={22} color={"black"} />
          </TouchableOpacity>
        </View>
      </View>
    </TabContainer>
  );
};

export default AtividadesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F2F2F2",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    marginTop: 40,
    gap: 27,
    paddingHorizontal: 20,
  },
  card: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "white",
    padding: 25,
    borderRadius: 10,
    gap: 30,
    shadowColor: "gray",
    elevation: 5,
  },
  texto: {
    fontSize: 14,
    color: "#3F3E3E",
    opacity: 0.7,
    fontFamily: "Poppins_400Regular",
  },
  titulo: {
    fontSize: 16,
    color: "#313131",
    fontFamily: "Poppins_500Medium",
  },
  tituloData: {
    paddingLeft: 7,
    fontSize: 16,
    color: "#53A7D7",
    fontFamily: "Poppins_400Regular",
  },
  dataSem: {
    fontSize: 16,
    color: "#AFAFAF",
    fontFamily: "Poppins_400Regular",
  },
});
