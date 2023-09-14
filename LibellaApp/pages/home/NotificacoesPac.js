import React, { useState, useEffect } from "react";

import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  SafeAreaView,
  ScrollView,
  FlatList,
  ActivityIndicator,
} from "react-native";

import EntypoIcon from "react-native-vector-icons/Entypo";
import AntIcon from "react-native-vector-icons/AntDesign";
import IonIcon from "react-native-vector-icons/Ionicons";
import MaterialCommunityIcon from "react-native-vector-icons/MaterialCommunityIcons";

import TabContainer from "../../components/navigation/TabContainer";

const NotificacoesPage = () => {

  const [listaInfo, setListaInfo] = useState([]);

  const [loading, setLoading] = useState(true);
  const [timeOut, setTimeOut] = useState(50000);
  const [viewLista, setViewLista] = useState(true);

  const clickItemFlatList = (item) => {
  };

  useEffect(() => {
    getInformacoesBD();
  }, []);

  async function getInformacoesBD() {
    setLoading(true);
    var url = 'https://aulapam23.000webhostapp.com/lista_usuarios.php';

    var wasServerTimeout = false;
    var timeout = setTimeout(() => {
      wasServerTimeout = true;
      setLoading(false);
      alert('Tempo de espera para busca de informações excedido');
    }, timeOut);

    const resposta = await fetch(url, {
      method: 'GET',
    })

    .then((response) => {
      timeout && clearTimeout(timeout);
      if (!wasServerTimeout) {
        return response.json();
      }
    })
    .then((responseJson) => {

      setListaInfo([]);
      for (var i = 0; i < responseJson.usuarios.length; i++) {
        setListaInfo((listaInfo) => {
          const list = [
            ...listaInfo,
            {
              id: responseJson.usuarios[i].id,
              nomePac: responseJson.usuarios[i].nome,

            },
          ];
          return list;
        });
      }
    })

    .catch((error) => {
      timeout && clearTimeout(timeout);
      if (!wasServerTimeout) {
        //Error logic here
      }

      //  alert('erro'+error)
    });

  setLoading(false);
}

  return (
  <View style={{ padding: 11 }}>

    {loading ? (
        <View style={styles.container}>
          <Text
            style={styles.textLoading}>
            Aguarde, obtendo informações...
          </Text>
          <ActivityIndicator size="small" color="#0000ff" />
        </View>

      ) : (
        <View>
          <FlatList
            data={listaInfo}
            renderItem={({ item }) => (
              <TouchableOpacity onPress={() => navigation.navigate("PerfilPaciente")}>


    
        <View style={styles.container}>
          <View style={{ gap: 15, width: "100%" }}>
            <Text style={{ opacity: 0.4, marginLeft: 15 }}>Hoje</Text>

            <View style={styles.card}>
              <MaterialCommunityIcon
                name="calendar-clock-outline"
                size={35}
                color={"black"}
              />
              <Text style={styles.texto}>
                Consulta às
                <Text style={{ color: "#6D45C2" }}> 14:30 </Text> 
              </Text>
            </View>

            <View style={styles.card}>
              <AntIcon name="checkcircleo" size={35} color={"black"} />
              <Text style={styles.texto}>
                Nova atividade:
                <Text style={{ color: "#6D45C2" }}> "Auto Recompensa"</Text>
              </Text>
            </View>

            <View style={styles.card}>
            <EntypoIcon name="emoji-happy" size={35} color={"black"} />
              <Text style={styles.texto}>
                <Text style={{ color: "" }}>Como está se sentindo? </Text>
              </Text>
            </View>
          </View>
          

          <View style={{ gap: 15, width: "100%" }}>
            <Text style={{ opacity: 0.4, marginLeft: 15 }}>12/03</Text>

            <View style={styles.card}>
              <MaterialCommunityIcon
                name="calendar-clock-outline"
                size={35}
                color={"black"}
              />
              <Text style={styles.texto}>
                Consulta às
                <Text style={{ color: "#6D45C2" }}> 14:30 </Text> 
              </Text>
            </View>

            <View style={styles.card}>
            <EntypoIcon name="emoji-happy" size={35} color={"black"} />
              <Text style={styles.texto}>
                <Text style={{ color: "" }}>Como está se sentindo? </Text>
              </Text>
            </View>
          </View>
        </View>
        </TouchableOpacity>
        )}
        />
        </View>
      )}
  </View>
  );
};

export default NotificacoesPage;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
    backgroundColor: "#F2F2F2",
    alignItems: "center",
    justifyContent: "flex-start",
    gap: 40,
    paddingHorizontal: 20,
    marginTop: 30,
  },
  card: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "white",
    paddingHorizontal: 27,
    paddingVertical: 18,
    borderRadius: 15,
    gap: 17,
    shadowColor: "gray",
    elevation: 5,
  },
  texto: {
    fontSize: 14,
    color: "#313131",
    textAlign: "justify",
    maxWidth: '90%'
  },
  subTitulo: {
    fontSize: 14,
    color: "#313131",
    opacity: 0.3,
    fontWeight: "800",
  },
  titulo: {
    fontSize: 20,
    color: "#313131",
  },
});