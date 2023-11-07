import React, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Image,
} from "react-native";
import CalendarStrip from "react-native-calendar-strip";
import moment from "moment";
import FeatherIcon from "react-native-vector-icons/Feather";
import EntypoIcon from "react-native-vector-icons/Entypo";

import TabContainer from "../../../../components/navigation/Paciente/BottomTab/TabContainer";
import { useAuth } from "../../../../components/navigation/Stack/AuthContext";
import 'moment/locale/pt-br';

import AsyncStorage_Paciente from "@react-native-async-storage/async-storage";

moment.locale('pt-br');

const InicioScreen = (navigation) => {
  const [idPaciente, setIdPaciente] = useState(0);
  const [nome, setNome] = useState("");

  const [timeOut, setTimeOut] = useState(10000);
  const [loading, setLoading] = useState(false);
  const [acess, setAcess] = useState(false);
  const [msg, setMsg] = useState("");

  useEffect(() => {
    getInformacoesBD();
  }, [nome]);

  async function getInformacoesBD() {
    setLoading(true);
    const value = await AsyncStorage_Paciente.getItem("IdPaciente");
    setIdPaciente(value);
    var url =
      "https://libellatcc.000webhostapp.com/getInformacoes/getInformacoesBD.php";
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
      <View style={styles.container}>
        <StatusBar backgroundColor={"white"} style="auto" />

        <Text style={{ fontSize: 30, color: "#4A2794", fontFamily: 'Comfortaa_500Medium' }}>Olá, {user.nome}</Text>

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
                <Text>Consulta</Text>
              </View>
              <Text>21h40 - 23h40</Text>
            </View>
          </View>
        </View>

        <View style={{ gap: 8 }}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            
            <Text style={styles.subTitulo}>ATIVIDADES</Text>
            <FeatherIcon name="chevron-right" size={18} color={"#6D45C2"} />
          </View>
          <View style={styles.card}>

           
            <View style={styles.paciente}>
              <View
                style={{ flexDirection: "column", gap: 10 }}>

                <Text style={styles.titulo}>Roda da Vida</Text>
                <Text style={styles.texto}>Vence amanhã ás 23:59</Text>
              </View>
              <EntypoIcon name="chevron-thin-right" size={22} color={"black"} />
            </View>


            <View style={styles.paciente}>
              <View
                style={{ flexDirection: "column", gap: 10 }}
              >
                <Text style={styles.titulo}>Auto Recompensa</Text>
                <Text style={styles.texto}>Vence em 1 de abril as 13:59</Text>
              </View>
              <EntypoIcon name="chevron-thin-right" size={22} color={"black"} />
            </View>
          </View>
        </View>
      </View>
    </TabContainer>
  );
};

export default InicioScreen;

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
    fontFamily: 'Poppins_500Medium',
  },
  paciente: {
    flexDirection: "row",
    width: 280,
    justifyContent: "space-between",
    alignItems: "center",
  },
  texto: {
    fontSize: 14,
    color: '#3F3E3E',
    opacity: 0.7,
    fontFamily: 'Poppins_400Regular'
  },
  titulo:{
    fontWeight: 'bold',
    fontSize: 16,
    color: '#313131',
    fontFamily: 'Poppins_400Regular'
  }
});