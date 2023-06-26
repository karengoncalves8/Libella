import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

const Introduction1Page = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.containerSkip}>
        <Text style={styles.LinkButton}>Pular &gt;</Text>
      </View>
      <View style={styles.containerTitle}>
        <Text style={styles.title}>Organize suas atividades</Text>
      </View>
      <View style={styles.containerImg}>
      <Image
        style={styles.img}
        source={require('../../assets/img/Introduction-1.png')}
      />
      </View>
      <View style={styles.containerText}>
      <Text style={styles.text}>Tenha acesso as atividades atribuidas por seu psicólogo</Text>
      </View>
      <View style={styles.containerCarrousel}>
      <Text style={styles.LinkButton}>&#60; Voltar </Text>
        <View style={styles.CarrousselCircleActivated}></View>
        <View style={styles.CarrousselCircle}></View>
        <View style={styles.CarrousselCircle}></View>
        <TouchableOpacity onPress={() => navigation.navigate('Introduction2')}>
          <Text style={styles.LinkButton}>Continuar &gt;</Text>
        </TouchableOpacity>
      </View>
      <StatusBar backgroundColor={"white"} style="auto" />
    </View>
  );
}

export default Introduction1Page;

const styles = StyleSheet.create({
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

  title: {
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: 41,
    top: 10,
    textAlign: "center",
    color: "white",
    lineHeight: 40
  },

  containerImg: {
    height: '50%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },  
  
  img: {
    width: 333,
    height: 333,
  },

  containerText: {
    height: '10%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  text: {
    color: "#FFFFFF",
    fontWeight: '400',
    fontSize: 22,
    textAlign: 'center',
    width: '80%',
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

  LinkButton: {
    color: "#6D45C2",
    fontWeight: '500',
    fontSize: 20,
    lineHeight: 30,
  },

});