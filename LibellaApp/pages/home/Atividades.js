import * as React from "react";

import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";

import EntypoIcon from "react-native-vector-icons/Entypo";
import FeatherIcon from "react-native-vector-icons/Feather";
import AntIcon from "react-native-vector-icons/AntDesign";

const AtividadesPage = ({navigation}) => {
  return (
      <View style={styles.container}>
        <View style={{flexDirection: 'row', alignItems: 'center', gap: 20}}>
                  <TouchableOpacity onPress={() => navigation.goBack()}>
            <AntIcon name="arrowleft" size={23} color={'#6D45C2'}/>
        </TouchableOpacity>
        <Text style={{fontSize: 25, fontWeight: 'bold', color: '#6D45C2'}}>Atividades Atribuídas</Text>
        </View>


        <TouchableOpacity style={{flexDirection: 'row', gap: 5, alignItems: 'center'}}>
          <FeatherIcon name="filter" size={18} color={"black"} opacity={0.4}/>
          <Text style={styles.texto}>Recentes</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('AtividadeEsp')}>
          <View style={{flexDirection: 'column', gap: 8}}>
            <Text style={styles.titulo}>Roda da Vida</Text>
            <Text style={styles.texto}>Vence amanhã ás 23:59</Text>
          </View>
          <EntypoIcon name="chevron-thin-right" size={22} color={"black"} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.card}>
          <View style={{flexDirection: 'column', gap: 8}}>
            <Text style={styles.titulo}>Auto Recompensa</Text>
            <Text style={styles.texto}>Vence 1 de abril ás 13:59</Text>
          </View>
          <EntypoIcon name="chevron-thin-right" size={22} color={"black"} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.card}>
          <View style={{flexDirection: 'column', gap: 8}}>
            <Text style={styles.titulo}>Máquina do Tempo</Text>
            <Text style={styles.texto}>Vence 13 de abril ás 13:59</Text>
          </View>
          <EntypoIcon name="chevron-thin-right" size={22} color={"black"} />
        </TouchableOpacity>
      </View>
  );
};

export default AtividadesPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F2F2F2",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    marginTop: 60,
    gap: 27,
    paddingHorizontal: 20,
  },
  card: {
    width: '100%',
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "white",
    padding: 25,
    borderRadius: 10,
    gap: 30,
    shadowColor: "gray",
    elevation: 5,
  },
  texto: {
    fontSize: 14,
    color: '#3F3E3E',
    opacity: 0.7,
  },
  titulo:{
    fontWeight: 'bold',
    fontSize: 16,
    color: '#313131'
  }
});
