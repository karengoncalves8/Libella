import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

const SelectionPage = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.containerTitle}>
        <Text style={styles.title}>Organize suas atividades</Text>
      </View>
      <View style={styles.containerImgTop}>
      <TouchableOpacity onPress={() => navigation.navigate('Introduction1')}>
        <Image
          style={styles.img}
          source={require('../../assets/img/Auth/ChoicePsicologo.png')}
        />
      </TouchableOpacity>
    </View>
      <View style={styles.containerText}>
        <Text style={styles.text}>ou</Text>
      </View>
      <View style={styles.containerImgBottom}>
      <TouchableOpacity onPress={() => navigation.navigate('Introduction1')}>
        <Image
          style={styles.img}
          source={require('../../assets/img/Auth/ChoicePaciente.png')}
        />
      </TouchableOpacity>

      </View>
      <StatusBar backgroundColor={"white"} style="auto" />
    </View>
  );
}

export default SelectionPage;

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

  containerTitle: {
    height: '20%',
    width: '100%',
    alignItems: 'flex-start',
    justifyContent: 'center',
    padding: 20,
  },

  containerImgTop: {
    height: '35%',
    width: '100%',
    alignItems: 'flex-end',
    justifyContent: 'center',
  },

  containerImgBottom: {
    height: '35%',
    width: '100%',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },

  containerText: {
    height: '10%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },




  // Imagens
  img: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 400,
    height: 350,
  },




  // Textos
  title: {
    fontFamily: 'Comfortaa_500Medium',
    fontSize: 35,
    top: 10,
    textAlign: 'center',
    color: "white",
    lineHeight: 40
  },

  text: {
    fontFamily: 'Comfortaa_500Medium',
    color: "#FFFFFF",
    fontWeight: '400',
    fontSize: 18,
    textAlign: 'center',
    width: '100%',
  },

});