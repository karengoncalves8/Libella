
import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Image,
  SafeAreaView,
  ScrollView,
} from "react-native";

import EntypoIcon from "react-native-vector-icons/Entypo";
import TabContainer from "../../components/navigation/TabContainer";


const PacientesPage = ({ navigation }) => {

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
    <View style={{ padding: 13 }}>

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

                <View style={styles.pacienteContainer}>
                  <Image
                    style={styles.userImg}
                    source={require("../../assets/img/Pessoas/Andreia.jpg")}
                  />
                  <Text style={styles.text}> {item.id} </Text>
                  <EntypoIcon name="chevron-thin-right" size={22} color={"black"} />
                </View>
              </TouchableOpacity>

            )}
          />
        </View>
      )}
      
    </View>
  );
};

export default PacientesPage;

const styles = StyleSheet.create({
  /* container: {
    width: '100%',
    alignItems: "flex-start",
    justifyContent: "center",
    paddingHorizontal: 20,
    color: "white",
  },

  mainContainer: {
    width: "100%",
    height: "10%",
    top: 40,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  */

  pacienteContainer: {
    width: "100%",
    height: 80,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 7,
    paddingVertical: 15,
    paddingHorizontal: 30,
    backgroundColor: '#F2F2F2',
    marginTop: 20,
  },

  text: {
    fontSize: 15,
    fontFamily: 'Poppins_500Medium',
    marginTop: 5,
  },

  textLoading: {
    fontSize: 15,
    fontFamily: 'Poppins_500Medium',
    marginTop: 5,
  },

  userImg: {
    width: 52,
    height: 52,
    borderRadius: 100,
  },

});