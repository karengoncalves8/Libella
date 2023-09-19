import React, { useEffect, useState } from 'react';
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TextInput, View, TouchableOpacity, Image, BackHandler } from "react-native";
import CalendarStrip from "react-native-calendar-strip";
import moment from "moment";
import FeatherIcon from "react-native-vector-icons/Feather";
import EntypoIcon from "react-native-vector-icons/Entypo";

import TabContainer from "../../../components/navigation/TabContainer";

// async storage
import AsyncStorage_ID from '@react-native-async-storage/async-storage'; // instalar
import 'moment/locale/pt-br';

moment.locale('pt-br');

const InicioPage = (navigation) => {
  // Comando pra bloquear o botão de voltar
  /*
  useEffect(() => {
    BackHandler.addEventListener('backPress', () => true)
    return () => BackHandler.removeEventListener('backPress', () => true)
  }, [])
  */

  const [id, setId] = useState('');

  const resgatarId = async (key) => {
    const value = await AsyncStorage_ID.getItem(key)
    setId(value)
  }

  resgatarId('IdPsicologo');
  let startDate = moment();

  return (
    <TabContainer>
      <View style={styles.container}>
        <StatusBar backgroundColor={"white"} style="auto" />
        <Text style={{ fontSize: 30, color: "#4A2794" }}>{id}</Text>
        <Text style={{ fontSize: 30, color: "#4A2794" }}>Olá, Andressa!</Text>

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
                  source={require("../../../assets/icons/VectorAzul.png")}
                />
                <Text>Rui Barbosa</Text>
              </View>
              <Text>21h40 - 23h40</Text>
            </View>
          </View>
        </View>

        <View style={{ gap: 8 }}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text style={styles.subTitulo}>PACIENTES</Text>
            <FeatherIcon name="chevron-right" size={18} color={"#6D45C2"} />
          </View>
          <View style={styles.card}>
            <View style={styles.paciente}>
              <View
                style={{ flexDirection: "row", alignItems: "center", gap: 15 }}
              >
                <Image
                  style={styles.imgIcon}
                  source={require("../../../assets/img/Pessoas/Andreia.jpg")}
                />
                <Text>Andreia Ramos</Text>
              </View>
              <EntypoIcon name="chevron-thin-right" size={22} color={"black"} />
            </View>
            <View style={styles.paciente}>
              <View
                style={{ flexDirection: "row", alignItems: "center", gap: 15 }}
              >
                <Image
                  style={styles.imgIcon}
                  source={require("../../../assets/img//Pessoas/Rui.jpg")}
                />
                <Text>Rui Barbosa</Text>
              </View>
              <EntypoIcon name="chevron-thin-right" size={22} color={"black"} />
            </View>
          </View>
        </View>
      </View>
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
});