import * as React from "react";

import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Image,
} from "react-native";


import FeatherIcons from 'react-native-vector-icons/Feather';

const RemoverPacienteScreen = ({ navigation }) => {
  return (
      <View style={styles.container}>
        <View style={styles.mainContainer}>
          <TouchableOpacity
            onPress={() => navigation.navigate("PerfilPaciente")}
            style={styles.pacienteContainer}
          >
            <View
              style={styles.containerContent}>
              <Image
                style={styles.userImg}
                source={require('../../../assets/img/Pessoas/Andreia.jpg')}
              />
              <View style={styles.containerText}>
                <Text style={styles.text}>Andreia Ramos</Text>{/*Esse texto pode mudar de acordo com o Banco de dados*/}
              </View>
              <FeatherIcons name='user-minus' size={20} color={'red'} />
            </View>
          </TouchableOpacity>
          {/*Pra adicionar mais pacientes basta copiar toda a touchableOpacity*/}
        </View>
      </View>
  );
};

export default RemoverPacienteScreen;

const styles = StyleSheet.create({

  // Container
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    paddingHorizontal: 20,
    backgroundColor: "#F2F2F2",
    color: "white",
  },

  mainContainer: {
    width: "100%",
    height: "90%",
    top: 20,
    alignItems: "center",
    justifyContent: "flex-start",
    gap: 30,
  },

  pacienteContainer: {
    width: "100%",
    height: 80,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "white",
    borderRadius: 7,
    paddingVertical: 15,
    paddingHorizontal: 20,
    top: 40,
  },

  containerContent: {
    width: '100%',
    flexDirection: "row",
    alignItems: "center",
    justifyContent: 'space-between',
    paddingRight: 10,
  },

  containerText: {
    width: '65%',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },




  // Imagens
  userImg: {
    width: 52,
    height: 52,
    borderRadius: 100,
  },

  iconImg: {
    width: 16,
    height: 16,
  },

  icon: {
    minWidth: 20,
    minHeight: 20,
  },



  // Textos
  text: {
    fontFamily: 'Poppins_500Medium',
    fontSize: 17,
    marginTop: 5,
  },
});
