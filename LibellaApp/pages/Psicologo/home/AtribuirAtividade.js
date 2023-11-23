import React, { useState, useEffect } from "react";

import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Alert,
  Pressable
} from "react-native";

import EntypoIcon from "react-native-vector-icons/Entypo";
import AntIcon from "react-native-vector-icons/AntDesign";
import MaterialIcon from "react-native-vector-icons/MaterialIcons";

import DateTimePicker from '@react-native-community/datetimepicker';

import { TextInputMask } from 'react-native-masked-text'; // instalar

import AsyncStorage_ID from '@react-native-async-storage/async-storage';

const AtribuirAtividadePage = ({ navigation }) => {
  const [date, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false)

  const [titulo, setTitulo] = useState('')
  const [horario, setHorario] = useState('')
  const [horario2, setHorario2] = useState('')
  const [data, setData] = useState('')
  const [instrucoes, setInstrucoes] = useState('')
  const [IdPsicologo, setIdPsicologo] = useState('')

  const [loading, setLoading] = useState(false);
  const [timeOut, setTimeOut] = useState(10000);
  const [viewLista, setViewLista] = useState(true);


  const toggleDatePicker = () => {
    setShowDatePicker(!showDatePicker);
  };

  const onChangeDate = ({ type }, selectedDate) => {
    if (type == "set") {
      const currentDate = selectedDate;
      setDate(currentDate);

      if (Platform.OS === "android") {
        toggleDatePicker();
        setData(formatDate(currentDate));
      }
    }
    else {
      toggleDatePicker();
    }
  };

  const formatDate = (rawDate) => {
    let date = new Date(rawDate);

    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();

    var dataFormatada = year + month + day
    setData(dataFormatada)

    return `${day}/${month}/${year}`;
  };

  async function recuperarId() {
    const value = await AsyncStorage_ID.getItem('IdPsicologo')
    setIdPsicologo(value)
  }
  recuperarId();
  function teste() {
    const horarioFormatado = horario.replace(/[^0-9]/g, '')
    alert(horarioFormatado) // 1000000
    alert(data)
  }
  async function cadastrarPaciente() {
    if (titulo == "" || horario == "" || data == "" || instrucoes == "") {
      Alert.alert("Erro", "Preencha todos os campos!")
    }
    else {
      const horarioFormatado = horario.replace(/[^0-9]/g, '')
      var url = 'https://libellatcc.000webhostapp.com/Funcionalidades/AtribuirAtividade.php';
      var wasServerTimeout = false;
      var timeout = setTimeout(() => {
        wasServerTimeout = true;
        alert('Tempo de espera para busca de informações excedido');
      }, timeOut);

      const resposta = await fetch(url, {
        method: 'POST', //tipo de requisição
        body: JSON.stringify({ IdPsicologo: IdPsicologo, TituloAtividade: titulo, InstrucoesAtividade: instrucoes, DataAtividade: data, HorarioAtividade: horarioFormatado }),
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
          var mensagem = responseJson.informacoes[0].msg
          if (mensagem == "Informações inseridas com sucesso") {
            Alert.alert("Pronto", "Atividade atribuida com sucesso!");
            navigation.navigate('LoginPS')
          }

          else {
            // Aviso de Erro dados inseridos incorretos
            Alert.alert("Erro!", "Revise os dados inseridos!");
          }
        })
        //se ocorrer erro na requisição ou conversão
        .catch((error) => {
          timeout && clearTimeout(timeout);
          if (!wasServerTimeout) {
            Alert.alert("Alerta!", "Tempo de espera do servidor excedido!");
          }

        });
    }
  }
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 25, fontWeight: 'bold', color: '#6D45C2', fontFamily: 'Poppins_500Medium', }}>Atribuir Atividade</Text>

      <View style={styles.card}>
        <View style={styles.inputItem}>
          <Text style={styles.titulo}>Título</Text>
          <TextInput
            style={styles.input}
            placeholder="Insira o título"
            onChangeText={(text) => setTitulo(text)}
          />
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
          }}
        >
          <View style={{ width: 180, gap: 5 }}>
            <Text style={styles.titulo}>Data de Entrega</Text>
            {!showDatePicker && (
              <Pressable
                onPress={toggleDatePicker}>
                <TextInput
                  style={[styles.input, { textAlign: 'center', paddingLeft: 35, }]}
                  placeholder="18/08/2008"
                  value={data}
                  onChange={setData}
                  editable={false}
                />
                <AntIcon name="calendar" size={20} color={'gray'} style={{ position: "absolute", top: 15, left: 14, opacity: 0.8 }} />
              </Pressable>
            )}
            {showDatePicker && (
              <DateTimePicker
                mode="date"
                display="spinner"
                value={date}
                onChange={onChangeDate}
              />
            )}
          </View>
          <View style={{ width: 75, gap: 5 }}>
            <Text style={styles.titulo}>Horário</Text>
            <TextInputMask
              style={[styles.input, { textAlign: "center" }]}
              placeholder="11:59"
              type={'custom'}
              options={{
                mask: '99:99'
              }}
              onChangeText={(text) => setHorario(text + '00')}
            />
          </View>
        </View>

        <View style={styles.inputItem}>
          <Text style={styles.titulo}>Instruções</Text>
          <TextInput
            style={styles.input}
            placeholder="Insira as instruções"
            onChangeText={(text) => setInstrucoes(text)}
          />
          <TouchableOpacity style={{ flexDirection: "row", gap: 3, alignItems: "center", marginLeft: 5, width: 50, }}>
            <EntypoIcon name="attachment" size={16} color={"#53A7D7"} />
            <Text style={styles.texto}>Anexo</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.inputItem}>
          <Text style={styles.titulo}>Atribuir Para</Text>
          <TextInput style={[styles.input, { paddingLeft: 40, }]} placeholder="Selecione o Paciente" />
          <MaterialIcon name="arrow-drop-down" size={35} color={'gray'} style={{ position: "absolute", top: 40, left: 7, opacity: 0.6 }} />
        </View>
        <TouchableOpacity style={styles.button} onPress={() => cadastrarPaciente()}>
          <Text style={{ color: 'white', fontSize: 22, paddingHorizontal: 12 }}>Concluir</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AtribuirAtividadePage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F2F2F2",
    alignItems: "flex-start",
    justifyContent: "center",
    gap: 27,
    paddingHorizontal: 20,
  },
  card: {
    width: "100%",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    backgroundColor: "white",
    padding: 25,
    borderRadius: 10,
    gap: 24,
    shadowColor: "gray",
    elevation: 5,
  },
  texto: {
    fontSize: 17,
    color: "#53A7D7",
  },
  titulo: {
    fontWeight: "bold",
    fontSize: 18,
    fontFamily: 'Comfortaa_500Medium',
    color: "#313131",
  },
  input: {
    backgroundColor: "#F1F4F5",
    borderRadius: 8,
    fontSize: 17,
    paddingHorizontal: 14,
    paddingVertical: 12,
  },
  inputItem: {
    gap: 5,
    width: "100%",
  },
  button: {
    paddingHorizontal: 30,
    paddingVertical: 9,
    backgroundColor: '#6D45C2',
    borderRadius: 25,
    alignSelf: 'center'
  }
});