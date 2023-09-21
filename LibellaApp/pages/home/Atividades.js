import React, { useState, useEffect } from "react";

import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
} from "react-native";

import EntypoIcon from "react-native-vector-icons/Entypo";
import FeatherIcon from "react-native-vector-icons/Feather";


const Atividades= () => {

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
    <View style={styles.container}>
      <TouchableOpacity style={{ flexDirection: 'row', gap: 5, alignItems: 'center' }}>
        <FeatherIcon name="filter" size={18} color={"black"} opacity={0.4} />
        <Text style={styles.texto}>Recentes</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('AtividadeEsp')}>
        <View style={{ flexDirection: 'column', gap: 8 }}>
          <Text style={styles.titulo}>Roda da Vida</Text>
          <Text style={styles.texto}>Vence amanhã ás 23:59</Text>
        </View>
        <EntypoIcon name="chevron-thin-right" size={22} color={"black"} />
      </TouchableOpacity>

      <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('AtividadeEsp')}>
        <View style={{ flexDirection: 'column', gap: 8 }}>
          <Text style={styles.titulo}>Auto Recompensa</Text>
          <Text style={styles.texto}>Vence 1 de abril ás 13:59</Text>
        </View>
        <EntypoIcon name="chevron-thin-right" size={22} color={"black"} />
      </TouchableOpacity>

      <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('AtividadeEsp')}>
        <View style={{ flexDirection: 'column', gap: 8 }}>
          <Text style={styles.titulo}>Máquina do Tempo</Text>
          <Text style={styles.texto}>Vence 13 de abril ás 13:59</Text>
        </View>
        <EntypoIcon name="chevron-thin-right" size={22} color={"black"} />
      </TouchableOpacity>
    </View>
  );
};

export default Atividades;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F2F2F2",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    gap: 27,
    paddingHorizontal: 20,
  },
  card: {
    width: '100%',
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
    color: '#3F3E3E',
    opacity: 0.7,
  },
  titulo: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#313131'
  }
});