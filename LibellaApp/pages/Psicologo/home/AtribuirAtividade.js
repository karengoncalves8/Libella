import * as React from "react";

import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from "react-native";

import EntypoIcon from "react-native-vector-icons/Entypo";
import AntIcon from "react-native-vector-icons/AntDesign";
import MaterialIcon from "react-native-vector-icons/MaterialIcons";

const AtribuirAtividadePage = ({ navigation }) => {
  return (
    <View style={styles.container}>
        <Text style={{fontSize: 25, fontWeight: 'bold', color: '#6D45C2'}}>Atribuir Atividade</Text>

        <View style={styles.card}>
            <View style={styles.inputItem}>
            <Text style={styles.titulo}>Título</Text>
            <TextInput style={styles.input} placeholder="Insira o título" />
            </View>

            <View
            style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                width: "100%",
            }}
            >
            <View style={{ width: 160, gap: 5 }}>
                <Text style={styles.titulo}>Data de Entrega</Text>
                <TextInput style={[styles.input, {textAlign: 'center', paddingLeft: 30,}]} placeholder="23/03/2013" />
                <AntIcon name="calendar" size={25} color={'gray'} style={{position: "absolute", top: 35, left: 14, opacity: 0.6}}/>
            </View>
            <View style={{ width: 75, gap: 5 }}>
                <Text style={styles.titulo}>Horário</Text>
                <TextInput
                style={[styles.input, { textAlign: "center" }]}
                placeholder="11:59"
                />
            </View>
            </View>

            <View style={styles.inputItem}>
                <Text style={styles.titulo}>Instruções</Text>
                <TextInput style={styles.input} placeholder="Insira as instruções" />
                <TouchableOpacity style={{flexDirection: "row", gap: 3,alignItems: "center", marginLeft: 5, width: 50,}}>
                    <EntypoIcon name="attachment" size={16} color={"#53A7D7"} />
                    <Text style={styles.texto}>Anexo</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.inputItem}>
                <Text style={styles.titulo}>Atribuir Para</Text>
                <TextInput style={[styles.input, {paddingLeft: 40,}]} placeholder="Selecione o Paciente" />
                <MaterialIcon name="arrow-drop-down" size={35} color={'gray'} style={{position: "absolute", top: 30, left: 7, opacity: 0.6}}/>
            </View>

            <TouchableOpacity style={styles.button}>
                <Text style={{color: 'white', fontSize: 14}}> Concluir </Text>
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
    fontSize: 14,
    color: "#53A7D7",
  },
  titulo: {
    fontWeight: "bold",
    fontSize: 16,
    color: "#313131",
  },
  input: {
    backgroundColor: "#F1F4F5",
    borderRadius: 8,
    fontSize: 14,
    paddingHorizontal: 14,
    paddingVertical: 7,
  },
  inputItem: {
    gap: 5,
    width: "100%",
  },
  button: {
    paddingHorizontal: 30,
    paddingVertical: 9, 
    backgroundColor: '#6D45C2',
    borderRadius: 10,
    alignSelf: 'center'
  }
});