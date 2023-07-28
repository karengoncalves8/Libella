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
import IonIcon from "react-native-vector-icons/Ionicons";
import MaterialCommunityIcon from "react-native-vector-icons/MaterialCommunityIcons";


const AtividadeEspPage = ({ navigation }) => {
  return (
    <View style={styles.container}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
            <AntIcon name="arrowleft" size={23} color={'#6D45C2'}/>
        </TouchableOpacity>

        <View style={styles.card}>

        <View style={{gap: 15}}>
            <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '100%'}}>
                <Text style={styles.titulo}> Roda da Vida </Text>
                <MaterialCommunityIcon  name="square-edit-outline" size={23} color={'#6D45C2'}/>
            </View>
            <Text style={{color:'#313131', opacity: 0.4}}>Vence amanhã ás 23:59</Text>
        </View>



            <View style={{gap: 8}}>
                <Text style={styles.subTitulo}>Instruções</Text>
                <Text style={styles.texto}>Escolha uma pontuação para cada um dos aspectos traçados de acordo com o grau de satisfação que sente em relação a ele. A pontuação varia entre o número 1 e 10, sendo 10 a pontuação máxima. Quanto mais baixa for a pontuação, mais se aproxima do centro e, quanto mais elevada, mais próxima da margem.</Text>

                <View style={styles.imgViewer}>
                <IonIcon  name="image-outline" size={23} color={'#313131'}/>
                <Text>RodaVida.png</Text>
                </View>
            </View>
            
            <View style={{gap: 8, width: '100%'}}>
                <Text style={styles.subTitulo}>Trabalho</Text>
                <Text style={{alignSelf: 'center'}}>Ainda não enviado</Text>
            </View>
           
        </View>
    </View>
  );
};

export default AtividadeEspPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F2F2F2",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    gap: 40,
    paddingHorizontal: 20,
    marginTop: 60,
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
    paddingVertical:7, 
    paddingHorizontal: 14, 
    width: 285, 
    alignSelf: 'center', 
    flexDirection: 'row', 
    alignItems: 'center',
    gap: 11,
    borderRadius: 10,
    marginTop: 10,
  },
});
