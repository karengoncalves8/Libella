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

export default function App(){
  

const ProgressoPage = ({ navigation }) => {
  const [value, setValue] = useState(0);
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={{
          width: '120%',
          height: '9%',
          backgroundColor: '#53A7D7',
          justifyContent: 'center',
        }}><Text style={{
          fontWeight: 700,
          left: 51,
          fontSize: 24,
          color: "white",
          fontFamily: 'Poppins_300Light',
        }}>Progresso</Text>
        </View>
        <View style={{
          height: "10%",
          width: "100%",
          backgroundColor: "#F2F2F2",
          flexDirection: 'row',
          alignItems: 'center'
        }}>
          <Image
            style={styles.userImg}
            source={require('../../assets/img/Pessoas/Andreia.jpg')}
          />
          <Text style={{
            fontWeight: 500,
            left: 31,
            fontSize: 17,
            color: "#313131",
            fontFamily: 'Poppins_500Medium',
          }}>Andreia Ramos</Text>
        </View>
        <View style={styles.containerMainChart}>
          <View style={{ backgroundColor: "white", width: '100%' }}>
            <Text>Gráfico de humor</Text>
            <LineChart
              data={{
                labels: ["January", "February", "March", "April", "May", "June"],
                datasets: [
                  {
                    data: [
                      Math.random() * 100,
                      Math.random() * 100,
                      Math.random() * 100,
                      Math.random() * 100,
                      Math.random() * 100,
                      Math.random() * 100
                    ]
                  }
                ]
              }}
              width={Dimensions.get('window').width - 60} // from react-native
              height={220}
              yAxisLabel="$"
              yAxisSuffix="k"
              yAxisInterval={1} // optional, defaults to 1
              chartConfig={{
                backgroundColor: "green",
                backgroundGradientFrom: "black",
                backgroundGradientTo: "blue",
                decimalPlaces: 2, // optional, defaults to 2dp
                color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                style: {
                  borderRadius: 16
                },
                propsForDots: {
                  r: "6",
                  strokeWidth: "2",
                  stroke: "pink"
                }
              }}
              //bezier curva
              style={{
                marginVertical: 8,
                borderRadius: 16
              }}
            />
          </View>
          <View style={{ backgroundColor: "white", width: '100%' }}>
            <Text>Atividades realizadas</Text>

              <CircularProgress>
                radius={90}
                value={80}
                textColor='gray'
                valueStuff={'%'}
                inActiveStrokeColor={'black'}
                inActiveStrokeOpacity={0.2}
                
              </CircularProgress>
            <TouchableOpacity
              onPress={() => navigation.navigate("Inicio")}
              style={styles.pacienteContainer}>
              <Feather name='home' size={25} color={'#53A7D7'} />
            </TouchableOpacity>
            <View style={{ backgroundColor: "black", width: '100%', height: 300 }}>
              <Text>Atividades realizadas</Text>
            </View>
          </View>
        </View>

      </View>
    </ScrollView>
  );
}
}

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


});