import * as React from 'react';
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TextInput, View, TouchableOpacity, Image } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import FeatherIcon from 'react-native-vector-icons/Feather'

const ProgressoPage =({ navigation }) =>  {
  return (
    <View style={styles.container}>
      <View style={{
        width: '120%',
        height: '8%',
        backgroundColor: '#53A7D7',
        justifyContent:'center',
      }}><Text style={{
        fontWeight:700,
        left:50,
        fontSize:24,
        color:"white",
        fontFamily: 'Poppins_300Light',
      }}>Progresso</Text>
      </View>
        <View style={{
          height:"12%",
          width:"100%",
          backgroundColor:"yellow",
        }}>
        
      </View>
      <View style={styles.containerGraph}>

      </View>
    </View>
  );
}

export default ProgressoPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "flex-start",
    marginTop: 40,
    gap:40,
    paddingHorizontal:30
  },
  container3: {
    flex: 1,
    backgroundColor: "#F2F2F2",
    alignItems: "center",
    justifyContent: "flex-start",
    height:"100%",
    width:"100%",
    paddingHorizontal:30,
  },
  containerGraph: {
    backgroundColor: "#F2F2F2",
    alignItems: "center",
    justifyContent: "flex-start",
    height:"60%",
    width:"100%",
    paddingHorizontal:30,
  
  },
  inputbox: {
    justifyContent: "center",
    gap: 27,
    width: "100%",
  },
  input: {
    fontFamily: 'Poppins_300Light',
    color:"red",
    fontSize: 16,
    marginLeft:8,
    flex: 1,
  },
  inputView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
    paddingHorizontal: 30,
    backgroundColor: '#F8F8F8',
  },
  containerTopics: {
    width: '100%',
    height: '46%',
    backgroundColor: '#F2F2F2',
    gap: 10,
    borderRadius: 10,
  },
  containerTopics2: {
    width: '100%',
    height: '75%',
    gap: 0,
    borderRadius: 10,
  },
  containerTopics3: {
    width: '100%',
    height: '25%',
    backgroundColor: 'white',
    padding: 0,
    borderBottomWidth: 0.5,
    justifyContent: 'center',
  },
  containerFale: {
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    width: '100%',
    gap: 10,
    backgroundColor: "#F2F2F2",
  },
  font: {
    color: "#313131",
    fontSize: 14,
    fontWeight: 500,
    fontFamily: 'Poppins_300Light',
    marginLeft: 5,
  }


});