import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Image, ScrollView, FlatList, ActivityIndicator, } from "react-native";

const Registro = () => {

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
              <View style={styles.container}>
                <View style={styles.exibitionContainer}>
                  <Text style={styles.textExibition}>Este mês</Text>
                </View>
                <View style={styles.pacienteContainer}>
                  <View style={styles.iconContainer}>

                  </View>
                  <View style={styles.containerText}>
                    <Text style={styles.text}>Estou feliz com a vitória do Praia Clube</Text>
                  </View>

                  <View style={styles.containerData}>
                    <Text style={styles.textData}>data</Text>
                  </View>
                </View>

              </View>
            )}
          />
        </View>
      )}

    </View>
  );
};

export default Registro;
const styles = StyleSheet.create({

  //Containers
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 20,
    backgroundColor: '#F2F2F2',
    color: 'white',
    top: 20,
    gap: 20,
  },

  exibitionContainer: {
    width: '100%',
    height: 40,
    top: 20,
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },

  iconContainer: {
    flex: 1,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },

  containerData: {
    flex: 1,
    height: '100%',
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
  },

  containerText: {
    flex: 4,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },

  pacienteContainer: {
    width: '100%',
    height: 80,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    gap: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    paddingLeft: 25,
    paddingRight: 25,
    padding: 10,
  },




  // Textos
  textData: {
    color: '#31313140',
    fontFamily: 'Poppins',
  },

  text: {
    color: '#313131',
    fontFamily: 'Poppins',
  },

  userImg: {
    width: 35,
    height: 35,
  },

  textExibition: {
    color: '#6D45C2',
    fontSize: 18,
    fontFamily: 'Poppins',
  },
});