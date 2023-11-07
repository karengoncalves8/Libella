import React, { useState, useEffect } from "react";

import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
  ScrollView
} from "react-native";

import EntypoIcon from "react-native-vector-icons/Entypo";
import FeatherIcon from "react-native-vector-icons/Feather";

import AsyncStorage_Paciente from '@react-native-async-storage/async-storage';
const AtividadesScreen = ({ navigation }) => {
  const [IdPaciente, setIdPaciente] = useState('');

  const [listaInfo, setListaInfo] = useState([]);

  const [loading, setLoading] = useState(true);
  const [timeOut, setTimeOut] = useState(50000);
  const [viewLista, setViewLista] = useState(true);

  const clickItemFlatList = (item) => {
  };

  useEffect(() => {
    async function recuperarId() {
      const value = await AsyncStorage_Paciente.getItem('PacienteSelected')
      setIdPaciente(value)
    }
    recuperarId()
    getInformacoesBD();
  }, []);

  async function getInformacoesBD() {
    setLoading(true);
    var url = 'https://libellatcc.000webhostapp.com/getInformacoes/getAtividades.php';
    var wasServerTimeout = false;
    var timeout = setTimeout(() => {
      wasServerTimeout = true;
      alert('Tempo de espera para busca de informações excedido');
      setLoading(false);
    }, timeOut);

    const resposta = await fetch(url, {
      method: 'POST', //tipo de requisição
      body: JSON.stringify({ IdPaciente: IdPaciente }),
      headers: {
        'Content-Type': 'application/json',
      },
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
                titulo: responseJson.atividade[i].TituloAtividade,
                data: responseJson.atividade[i].EntregaAtividade,
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
    <View style={{ width: '100%', height: '100%' }}>
      <View style={styles.container}>
        <TouchableOpacity style={{ flexDirection: 'row', gap: 5, alignItems: 'center' }}>
          <FeatherIcon name="filter" size={18} color={"black"} opacity={0.4} />
          <Text style={styles.texto}>Recente</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.AddButton}>
          <Text style={styles.Addtext}>+</Text>
        </TouchableOpacity>
        <FlatList
          data={listaInfo}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('AtividadeEsp')}>
              <View style={{ flexDirection: 'column', gap: 8 }}>
                <Text style={styles.titulo}>{item.titulo}</Text>
                <Text style={styles.texto}>Vence {item.data}</Text>
              </View>
              <EntypoIcon name="chevron-thin-right" size={22} color={"black"} />
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  );
};

export default AtividadesScreen;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: "#F2F2F2",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    marginTop: 60,
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

  containerAdd: {
    width: '100%',
    minHeight: '100%',
    alignItems: "flex-end",
    justifyContent: "flex-end",
    position: 'absolute',
  },

  AddButton: {
    right: 20,
    top: 500,
    height: 70,
    width: 70,
    backgroundColor: '#53A7D7',
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    zIndex: 1,
  },

  Addtext: {
    color: 'white',
    fontSize: 40,
    fontFamily: 'Poppins_400Regular',
    marginTop: 8,
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