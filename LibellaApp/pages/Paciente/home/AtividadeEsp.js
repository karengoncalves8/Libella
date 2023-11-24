import React, { useState, Component } from "react";

import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from "react-native";

import BouncyCheckbox from "react-native-bouncy-checkbox";
import AntIcon from "react-native-vector-icons/AntDesign";
import IonIcon from "react-native-vector-icons/Ionicons";
import MaterialCommunityIcon from "react-native-vector-icons/MaterialCommunityIcons";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";

const AtividadeEspScreen = ({ navigation }) => {
  const [toggleCheckBox, setToggleCheckBox] = useState(false)
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <AntIcon name="arrowleft" size={23} color={'white'} style={{ marginBottom: 25 }} />
      </TouchableOpacity>

      <View style={styles.card}>
        <View style={{ gap: 15 }}>
          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
            <Text style={styles.titulo}> Roda da Vida </Text>
          </View>
          <Text style={{ color: '#313131', opacity: 0.4 }}>Vence amanhã às 23:59</Text>
        </View>



        <View style={{ gap: 15 }}>
          <Text style={styles.subTitulo}>Instruções</Text>
          <Text style={styles.texto}>Escolha uma pontuação para cada um dos aspectos traçados de acordo com o grau de satisfação que sente em relação a ele. A pontuação varia entre o número 1 e 10, sendo 10 a pontuação máxima. Quanto mais baixa for a pontuação, mais se aproxima do centro e, quanto mais elevada, mais próxima da margem.</Text>

          <View style={styles.imgViewer}>
            <IonIcon name="image-outline" size={23} color={'#313131'} />
            <Text>RodaVida.png</Text>
          </View>

          <BouncyCheckbox
            size={20}
            fillColor="gray"
            unfillColor="#FFFFFF"
            text="Não irei realizar"
            iconStyle={{ borderColor: "black", borderRadius:0 }}
            innerIconStyle={{ borderWidth: 2, borderRadius:0  }}
            textStyle={{ fontFamily: "Poppins_400Regular", textDecorationLine: "none" }}
          /> 
          
        </View>

        <View style={{ gap: 8, width: '100%' }}>
          <Text style={styles.subTitulo}>Trabalho</Text>
          <View style={{display: 'flex', flexDirection:'row', alignContent: 'center', gap: 5, justifyContent: 'flex-start'}}>
            <FontAwesomeIcon name="paperclip" size={23} color={'#53A7D7'} style={{marginBottom:25}}/>
            <Text style={[styles.texto, {color: '#53A7D7', fontWeight: 'bold'}]}>Anexar</Text>
          </View>
          <TouchableOpacity style={styles.button}>
                <Text style={{color: 'white', fontSize: 14, fontFamily: 'Poppins_400Regular' }}> Entregar </Text>
            </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default AtividadeEspScreen;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#53A7D7",
    alignItems: "flex-start",
    justifyContent: "center",
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
    gap: 30,
    shadowColor: "gray",
    elevation: 5,
  },
  texto: {
    fontSize: 14,
    color: "#313131",
    textAlign: 'justify'
  },
  subTitulo: {
    fontSize: 14,
    color: "#313131",
    opacity: 0.3,
    fontWeight: '800',
  },
  titulo: {
    fontSize: 20,
    color: "#313131",
  },
  imgViewer: {
    backgroundColor: '#E6E6E6',
    paddingVertical: 7,
    paddingHorizontal: 14,
    width: 285,
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 11,
    borderRadius: 10,
    marginTop: 10,
  },
  button: {
    paddingHorizontal: 30,
    paddingVertical: 9, 
    backgroundColor: '#6D45C2',
    borderRadius: 10,
    alignSelf: 'center'
  }
});