import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity, Image, Dimensions, ScrollView } from "react-native";

import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart
} from "react-native-chart-kit";
import CircularProgress from 'react-native-circular-progress-indicator'
import Feather from "react-native-vector-icons/Feather";
import Ionicons from 'react-native-vector-icons/Ionicons'
import TabContainer from "../../../components/navigation/Paciente/BottomTab/TabContainer";

const ProgressoScreen = ({ navigation }) => {

 const [value, setValue] = useState(0);
 
 
 return (
 <TabContainer>
   <ScrollView>
     <View style={styles.container}>
        
     <View style={styles.graphic}>
     <LineChart
              data={{
                labels: [1, 5, 9, 13, 17, 21, 25, 29],
                datasets: [
                  {
                    data: [
                      2,4,3,1,5, 
                    ]
                  }
                ]
              }}
              width={Dimensions.get('window').width - 65} // from react-native
              height={220}
              chartConfig={{
                backgroundColor: "white",
                backgroundGradientFrom: "white",
                backgroundGradientTo: "white",
                decimalPlaces: 2, // optional, defaults to 2dp
                color: (opacity) => `#A9A9A9`,
                labelColor: (opacity = 1) => `black`,
                style: {
                  borderRadius: 16,
                },
                propsForDots: {
                  r: "6",
                }
              }}
              //bezier curva
              style={{
                marginVertical: 8,
                borderRadius: 16,
              }}
              withHorizontalLabels={false}
              withInnerLines={false}
              withShadow={false}
              withOuterLines={false}
              getDotColor={(dataPoint, dataPointIndex) => {
                if(dataPoint == 5) {
                  return "#00ff00";// red
                }
                else if (dataPoint == 4){
                   return 'green';
                }
                else if (dataPoint == 3){
                  return 'blue';
               }
               else if (dataPoint == 2){
                return 'orange';
              }
              else if (dataPoint == 1){
                return 'red';
              }
               
              }}
            />
            <View style={styles.icons}> 
              <Image style={styles.icon} source={require("../../../assets/icons/IconAnimado.png")}/>
              <Image style={styles.icon} source={require("../../../assets/icons/IconFeliz.png")}/>
              <Image style={styles.icon} source={require("../../../assets/icons/IconNeutro.png")}/>
              <Image style={styles.icon} source={require("../../../assets/icons/IconMal.png")}/>
              <Image style={styles.icon} source={require("../../../assets/icons/IconHorrivel.png")}/>
            </View>
              
       </View>
       <TouchableOpacity onPress={() => navigation.navigate('RegistroEmocoesPC')}>
          <Text>Registro de Emoções</Text>
        </TouchableOpacity>
     </View>
   </ScrollView>
   </TabContainer>
  );
}

export default ProgressoScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F2F2F2",
    alignItems: "center",
    justifyContent: "flex-start",
    marginTop: 25,
    gap: 38,
    paddingHorizontal: 30
  },
  container3: {
    flex: 1,
    backgroundColor: "#F2F2F2",
    alignItems: "center",
    justifyContent: "flex-start",
    height: "100%",
    width: "100%",
    paddingHorizontal: 30,
  },
  containerMainChart: {
    flex: 1,
    gap: 30,
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "flex-start",
    height: "60%",
    width: "100%",
    borderWidth: 0.5
  },
  inputbox: {
    justifyContent: "center",
    gap: 27,
    width: "100%",
  },
  input: {
    fontFamily: 'Poppins_300Light',
    color: "red",
    fontSize: 16,
    marginLeft: 8,
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
  font: {
    color: "#313131",
    fontSize: 14,
    fontWeight: 500,
    fontFamily: 'Poppins_300Light',
    marginLeft: 5,
  },
  userImg: {
    left: 10,
    width: 70,
    height: "100%",
    borderRadius: 100,
  },
  icons: {
    width: 25,
    height: 25,
    position: 'absolute',
    display: 'flex',
    gap: 15,
    top: 10,
    left: 25,
  },
  icon: {
    width: 25,
    height: 25,
    resizeMode: 'contain',
  }

});