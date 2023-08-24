import React, { useState } from 'react';

import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  CheckBox,
} from "react-native";

import EntypoIcon from "react-native-vector-icons/Entypo";
import AntIcon from "react-native-vector-icons/AntDesign";
import IonIcon from "react-native-vector-icons/Ionicons";
import MaterialCommunityIcon from "react-native-vector-icons/MaterialCommunityIcons";


const AtividadeEspPage = ({ navigation }) => {
  const CheckBox = ({options = [], onChange}) => {
    const [selected, setSelection] = useState([]);
  /*const CheckBox = ({options = [], onChange}) => {
    const [selected, setSelection] = useState([]);

    function toggle(id) {
      let index = selected.findIndex(i => i === id);
      let arrSelecteds = [...selected];
      if (index !== -1){
        arrSelecteds.Splice(index, 1);
      }
      else{
        arrSelecteds.push(id);
      }
      setSelected(arrSelecteds);
    }
    return(
      <View style={styles.checkContainer}>
        {options.map((op, index) => (
          <View style={styles.optionContainer}>
            <TouchableOpacity
            style={style.touchable}
            onPress={() => toggle(op?.id)}>
            {selected.findIndex(i=> i === op.id) !== -1 ? (
              <EntypoIcon name="attachment" size={18} color={'#53A7D7'}/>
            ) : null}
            </TouchableOpacity>
            <Text style={styles.texto}>{op?.text}</Text>
            </View>
        ))}
      </View>
    )
  }
  */
  return (
    <View style={styles.container}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
            <AntIcon name="arrowleft" size={23} color={'white'} style={{marginBottom:25}}/>
        </TouchableOpacity>

        <View style={styles.card}>

        <View style={{gap: 15}}>
            <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '100%'}}>
                <Text style={styles.titulo}> Roda da Vida </Text>
                <MaterialCommunityIcon  name="square-edit-outline" size={23} color={'#6D45C2'}/>
            </View>
            <Text style={{color:'#313131', opacity: 0.4}}>Vence amanhã às 23:59</Text>
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
                <Text style={styles.subTitulo}>Meu Trabalho</Text>
                <EntypoIcon name="attachment" size={18} color={'#53A7D7'}/>
                <Text style={{color:'#53A7D7', bottom: 27, left: 27}}>Anexo</Text>

                    <Text style={{color:'#313131'}}>Não irei realizar</Text>
                  
                  return(
                    <View style={styles.checkContainer}>
                      {options.map((op, index) => (
                        <View style={styles.optionContainer}>
                          <TouchableOpacity
                          style={style.touchable}
                          onPress={() => toggle(op?.id)}>
                          {selected.findIndex(i=> i === op.id) !== -1 ? (
                            <EntypoIcon name="attachment" size={18} color={'#53A7D7'}/>
                          ) : null}
                          </TouchableOpacity>
                          <Text style={styles.texto}>{op?.text}</Text>
                          </View>
                      ))}
                    </View>
                  )
              </View>

          </View>
        </View>

  );
  }};

export default AtividadeEspPage;

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
  checkContainer: {
    marginLeft: 12,
  },
  optionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  touchable: {
    height: 20,
    width: 20,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#53A7D7',
    borderWidth: 2,
  },
});