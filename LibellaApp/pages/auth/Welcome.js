import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

import EntypoIcon from "react-native-vector-icons/Entypo";
const WelcomePage = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.containerTitle}>
        <Text style={styles.title}>Bem-Vindo ao</Text>
        <Text style={styles.title}>Libella</Text>
      </View>
      <View style={styles.containerImg}>
        <Image
          style={styles.img}
          source={require("../../assets/img/Auth/WelcomeIMG.png")}
        />
      </View>
      <View style={styles.containerText}>
        <Text style={styles.text}>
          Um aplicativo que visa a melhoria de atendimentos terapêuticos
        </Text>
      </View>
      <View style={styles.containerLinkButton}>
        <TouchableOpacity
          style={{ flexDirection: "row", alignItems: "flex-end", gap: -3 }}
          onPress={() => navigation.navigate("Selection")}>
          <Text style={styles.LinkButton}>Continuar </Text>
          <EntypoIcon
            name="chevron-right"
            size={22}
            color={"#6D45C2"}
            style={{ marginBottom: 1.5 }}
          />
        </TouchableOpacity>
      </View>
      <StatusBar backgroundColor={"white"} style="auto" />
    </View>
  );
};

export default WelcomePage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
    width: "100%",
    backgroundColor: "#53A7D7",
    alignItems: "center",
    justifyContent: "flex-start",
  },

  containerTitle: {
    height: "20%",
    width: "100%",
    alignItems: "center",
    justifyContent: "flex-end",
  },

  title: {
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: 41,
    top: 10,
    textAlign: "center",
    color: "white",
    lineHeight: 40,
  },

  containerImg: {
    height: "50%",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },

  img: {
    width: 333,
    height: 333,
  },

  containerText: {
    height: "15%",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },

  text: {
    color: "#FFFFFF",
    fontWeight: "400",
    fontSize: 22,
    textAlign: "justify",
    width: "80%",
  },

  containerLinkButton: {
    height: "15%",
    width: "100%",
    alignItems: "center",
    justifyContent: "flex-start",
    marginTop: 10,
  },

  LinkButton: {
    color: "#6D45C2",
    fontWeight: "500",
    fontSize: 22,
    lineHeight: 30,
    textAlignVertical: "top",
  },
});
