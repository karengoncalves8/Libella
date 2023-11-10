import React, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Image,
  Alert,
  ActivityIndicator
} from "react-native";
import CalendarStrip from "react-native-calendar-strip";
import moment from "moment";
import FeatherIcon from "react-native-vector-icons/Feather";
import EntypoIcon from "react-native-vector-icons/Entypo";

import TabContainer from "../../../../components/navigation/Psicologo/BottomTab/TabContainer";

import AsyncStorage_ID from "@react-native-async-storage/async-storage";

import "moment/locale/pt-br";

moment.locale("pt-br");

const InicioPage = ({ navigation }) => {
  const [idPsicologo, setIdPsicologo] = useState(0);
  const [nome, setNome] = useState("");

  const [timeOut, setTimeOut] = useState(10000);
  const [loading, setLoading] = useState(false);
  const [acess, setAcess] = useState(false);
  const [msg, setMsg] = useState("");

  useEffect(() => {
    async function recuperarId() {
      const value = await AsyncStorage_ID.getItem("IdPsicologo");
      setIdPsicologo(value);
    }
    recuperarId();
    getInformacoesBD();
  }, [nome]);

  async function getInformacoesBD() {
    var url = "https://libellatcc.000webhostapp.com/getInformacoes/getInformacoesBDPsicologos.php";
    var wasServerTimeout = false;
    var timeout = setTimeout(() => {
      wasServerTimeout = true;
      alert("Tempo de espera para busca de informações excedido");
    }, timeOut);

    const resposta = await fetch(url, {
      method: "POST", //tipo de requisição
      body: JSON.stringify({ IdPsicologo: idPsicologo }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        timeout && clearTimeout(timeout);
        if (!wasServerTimeout) {
          return response.json();
        }
      })
      .then((responseJson) => {
        // Recolhendo as informações do banco de dados e salvando nas váriaveis
        setNome(responseJson.psicologo[0].NomePsicologo);
        setLoading(false);
      })
      //se ocorrer erro na requisição ou conversão
      .catch((error) => {
        timeout && clearTimeout(timeout);
        if (!wasServerTimeout) {
          Alert.alert("Alerta!", "Tempo de espera do servidor excedido!");
        }
      });
    setLoading(false);
  }

  let startDate = moment();

  return (
    <TabContainer>
      {loading ? (
        <View style={styles.container}>
          <ActivityIndicator size="small" color="#0000ff" />
        </View>
      ) : (
        <View style={styles.container}>
          <Text
            style={{
              fontSize: 30,
              color: "#4A2794",
              fontFamily: "Comfortaa_700Bold",
            }}
          >
            Olá, {nome}!
          </Text>

          <View style={{ gap: 8 }}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Text style={styles.subTitulo}>AGENDA</Text>
              <FeatherIcon name="chevron-right" size={18} color={"#6D45C2"} />
            </View>
            <View style={styles.card}>
              <CalendarStrip
                style={{ width: 300 }}
                calendarHeaderStyle={{ color: "#6D45C2" }}
                dateNumberStyle={{ color: "#313131", fontSize: 15 }}
                dateNameStyle={{ color: "#313131", opacity: 0.8, fontSize: 10 }}
                innerStyle={[]}
                showMonth={false}
                highlightDateContainerStyle={{ backgroundColor: "#53A7D7" }}
                highlightDateNumberStyle={{ color: "white" }}
                highlightDateNameStyle={{ color: "white" }}
                dayContainerStyle={{ gap: 3 }}
                selectedDate={startDate}
              />
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  backgroundColor: "#EAEEEF",
                  paddingHorizontal: 15,
                  paddingVertical: 10,
                  borderRadius: 5,
                  width: 300,
                }}
              >
                <View style={{ flexDirection: "row", gap: 6 }}>
                  <Image
                    source={require("../../../../assets/icons/VectorAzul.png")}
                  />
                  <Text style={styles.text}>Rui Barbosa</Text>
                </View>
                <Text style={styles.text}>21h40 - 23h40</Text>
              </View>
            </View>
          </View>

          <View style={{ gap: 8 }}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Text style={styles.subTitulo}>PACIENTES</Text>
              <FeatherIcon name="chevron-right" size={18} color={"#6D45C2"} />
            </View>
            <View style={styles.card}>
              <TouchableOpacity
                onPress={() => navigation.navigate("PerfilPaciente")}
                style={styles.paciente}
              >
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    gap: 15,
                  }}
                >
                  <Image
                    style={styles.imgIcon}
                    source={require("../../../../assets/img/Pessoas/Andreia.jpg")}
                  />
                  <Text style={styles.text}>Andreia Ramos</Text>
                </View>
                <EntypoIcon
                  name="chevron-thin-right"
                  size={22}
                  color={"black"}
                />
              </TouchableOpacity>
              <View style={styles.paciente}>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    gap: 15,
                  }}
                >
                  <Image
                    style={styles.imgIcon}
                    source={require("../../../../assets/img/Pessoas/Rui.jpg")}
                  />
                  <Text style={styles.text}>Rui Barbosa</Text>
                </View>
                <EntypoIcon
                  name="chevron-thin-right"
                  size={22}
                  color={"black"}
                />
              </View>
            </View>
          </View>
        </View>
      )}
    </TabContainer>
  );
};

export default InicioPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F2F2F2",
    gap: 40,
    paddingHorizontal: 30,
    paddingVertical: 50,
    justifyContent: "space-around",
  },
  card: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    padding: 25,
    borderRadius: 10,
    gap: 30,
    shadowColor: "gray",
    elevation: 5,
  },
  subTitulo: {
    fontSize: 14,
    color: "#6D45C2",
    fontFamily: "Poppins_500Medium",
  },
  paciente: {
    flexDirection: "row",
    width: 280,
    justifyContent: "space-between",
    alignItems: "center",
  },
  imgIcon: {
    width: 45,
    height: 45,
    borderRadius: 400 / 2,
  },
  text: {
    fontFamily: "Poppins_400Regular",
  },
});
