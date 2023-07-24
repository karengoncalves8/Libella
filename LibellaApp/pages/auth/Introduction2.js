import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

import EntypoIcon from "react-native-vector-icons/Entypo";

const Introduction2Page = ({navigation}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.containerSkip} onPress={() => navigation.navigate('Login')}>
        <View style={{ flexDirection: "row", alignItems: "flex-end", gap: -3 }}>
          <Text style={styles.LinkButton}>Pular</Text>
          <EntypoIcon
            name="chevron-right"
            size={22}
            color={"#6D45C2"}
            style={{ marginBottom: 1.5 }}
          />
        </View>
      </TouchableOpacity>
      <View style={styles.containerTitle}>
        <Text style={styles.title}>Agenda</Text>
      </View>
      <View style={styles.containerImg}>
      <Image
        style={styles.img}
        source={require('../../assets/img/Auth/Introduction-2.png')}
      />
      </View>
      <View style={styles.containerText}>
      <Text style={styles.text}>Receba notificações avisando de sua próxima consulta</Text>
      </View>
      <View style={styles.containerCarrousel}>
      <TouchableOpacity style={{ flexDirection: "row", alignItems: "flex-end", gap: -3 }} onPress={() => navigation.goBack()}>
        <EntypoIcon
            name="chevron-left"
            size={22}
            color={"#6D45C2"}
            style={{ marginBottom: 1.5 }}
          />
          <Text style={styles.LinkButton}> Voltar </Text>
        </TouchableOpacity>
        <View style={styles.CarrousselCircle}></View>
        <View style={styles.CarrousselCircleActivated}></View>
        <View style={styles.CarrousselCircle}></View>
        <TouchableOpacity style={{ flexDirection: "row", alignItems: "flex-end"}} onPress={() => navigation.navigate('Introduction3')}>
          <Text style={styles.LinkButton}>Continuar</Text>
          <EntypoIcon
            name="chevron-right"
            size={22}
            color={"#6D45C2"}

          />
        </TouchableOpacity>
      </View>
      <StatusBar backgroundColor={"white"} style="auto" />
    </View>
  );
}

export default Introduction2Page; 

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
    height: '10%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-end',
    
    
  }, 

  title: {
    fontWeight: 400,
    fontSize: 41,
    bottom: 20,
    textAlign: "center",
    color: "white",
    lineHeight: 40,
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
    height: '15%',
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