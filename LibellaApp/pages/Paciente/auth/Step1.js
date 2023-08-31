import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

import EntypoIcon from "react-native-vector-icons/Entypo";

const Step1Screen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.containerSkip} onPress={() => navigation.navigate('Login')}>
        <View style={{ flexDirection: "row", alignItems: "flex-end", gap: -3 }}>
          <Text style={styles.LinkButton}>Pular &#62;</Text>
        </View>
      </TouchableOpacity>
      <View style={styles.containerTitle}>
        <Text style={styles.title}>Organize suas atividades</Text>
      </View>
      <View style={styles.containerImg}>
      <Image
        style={styles.img}
        source={require('../../assets/img/Auth/Introduction-1.png')}
      />
      </View>
      <View style={styles.containerText}>
      <Text style={styles.text}>Tenha acesso as atividades atribuidas por seu psicólogo</Text>
      </View>
      <View style={styles.containerCarrousel}>
        <TouchableOpacity style={{ flexDirection: "row", alignItems: "flex-end", gap: -3 }} onPress={() => navigation.goBack()}>
          <Text style={styles.LinkButton}>&#60; Voltar</Text>
        </TouchableOpacity>
        <View style={styles.CarrousselCircleActivated}></View>
        <View style={styles.CarrousselCircle}></View>
        <View style={styles.CarrousselCircle}></View>
        <TouchableOpacity style={{ flexDirection: "row", alignItems: "flex-end"}} onPress={() => navigation.navigate('Introduction2')}>
          <Text style={styles.LinkButton}>Continuar &#62;</Text>
        </TouchableOpacity>
      </View>
      <StatusBar backgroundColor={"white"} style="auto" />
    </View>
  );
}

export default Step1Screen;

const styles = StyleSheet.create({
  
  // Container
  container: {
    flex: 1,
    height: "100%",
    width: "100%",
    backgroundColor: "#53A7D7",
    alignItems: "center",
    justifyContent: "flex-start",
  },

  containerSkip: {
    height: '10%',
    width: '100%',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    right: 20,
  },
  containerTitle: {
    height: '15%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-end',
  }, 

  containerImg: {
    height: '50%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },  

  containerText: {
    height: '10%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },

  containerCarrousel: {
    height: '15%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginTop: 10,
    padding: 40,
  },

  

  // Elementos
  CarrousselCircle: {
    backgroundColor: '#FFFFFF',
    height: 10,
    width: 10,
    borderRadius: 100,
  },

  CarrousselCircleActivated: {
    backgroundColor: '#6D45C2',
    height: 10,
    width: 10,
    borderRadius: 100,
  },




  //Imagens
  img: {
    width: 333,
    height: 333,
  },

  // Textos
  title: {
    fontFamily: 'Comfortaa_500Medium',
    fontSize: 35,
    top: 10,
    textAlign: "center",
    color: "white",
    lineHeight: 40
  },

  text: {
    fontFamily: 'Comfortaa_500Medium',
    color: "#FFFFFF",
    fontWeight: '400',
    fontSize: 19,
    textAlign: 'center',
    width: '80%',
  },

  LinkButton: {
    color: "#6D45C2",
    fontWeight: '500',
    fontSize: 20,
    lineHeight: 30,
    fontFamily: 'Poppins_500Medium',
  },
});