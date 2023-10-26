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

const PerfilScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Image
          style={styles.userImg}
          source={require("../../../../assets/img/Pessoas/Andreia.jpg")}
        />
          <Text style={styles.text}>Andreia</Text>
      </View>

      <View style={styles.containerButtons}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate("ProgressoPC")}
            >
              <Text style={styles.textButton}>Progresso</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate("AgendaPC")}
            >
              <Text style={styles.textButton}>Consultas</Text>
            </TouchableOpacity>
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
    backgroundColor: "#F2F2F2",
    color: "white",
    gap: 30,
  },
  card: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    padding: 25,
    gap: 10,
    borderRadius: 10,
    shadowColor: "gray",
    elevation: 5,
  },
  containerUser: {
    width: "100%",
    display: "flex",
    marginTop: 15,
    alignItems: "center",
    justifyContent: "center",
  },

  containerName: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  text: {
    fontSize: 20,
    color: "black",
    fontFamily: 'Poppins_500Medium'
  },

  textButton: {
    fontSize: 18,
    color: "white",
    fontFamily: 'Poppins_500Medium'
  },

  containerButtons: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    gap: 20,
  },

  button: {
    backgroundColor: "#6D45C2",
    width: '100%',
    paddingVertical: 15,
    borderRadius: 15,
    fontWeight: "bold",
    alignItems: 'center'
  },

  userImg: {
    width: 120,
    height: 120,
    borderRadius: 100,
  },

  containerProgress: {
    backgroundColor: "white",
    height: "30%",
    width: "100%",
    borderRadius: 10,
    marginTop: 5,
  },

  containerSchedule: {
    backgroundColor: "white",
    height: "30%",
    width: "100%",
    borderRadius: 10,
    marginTop: 10,
  },
});
