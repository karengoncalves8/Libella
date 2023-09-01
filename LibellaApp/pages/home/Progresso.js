import * as React from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity, Image, Dimensions, ScrollView, } from "react-native";
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart
} from "react-native-chart-kit";



import Feather from "react-native-vector-icons/Feather";
const data = [
  {
    name: "Seoul",
    population: 21500000,
    color: "rgba(131, 167, 234, 1)",
    legendFontColor: "#7F7F7F",
    legendFontSize: 15
  },
  {
    name: "Toronto",
    population: 2800000,
    color: "#F00",
    legendFontColor: "#7F7F7F",
    legendFontSize: 15
  },
  {
    name: "Beijing",
    population: 527612,
    color: "red",
    legendFontColor: "#7F7F7F",
    legendFontSize: 15
  },
  {
    name: "New York",
    population: 8538000,
    color: "#ffffff",
    legendFontColor: "#7F7F7F",
    legendFontSize: 15
  },
  {
    name: "Moscow",
    population: 11920000,
    color: "rgb(0, 0, 255)",
    legendFontColor: "#7F7F7F",
    legendFontSize: 15
  }
];
const ProgressoPage = ({ navigation }) => {
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

            <ProgressChart
              data={[0.9]}
              width={Dimensions.get('window').width - 60}
              height={220}
              chartConfig={{
                backgroundColor: '#1cc910',
                backgroundGradientFrom: '#eff3ff',
                backgroundGradientTo: '#efefef',
                decimalPlaces: 2,
                color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                style: {
                  borderRadius: 16,
                  
                },
              }}
              style={{
                marginVertical: 8,
                borderRadius: 16,
              }}
            />
            <TouchableOpacity
              onPress={() => navigation.navigate("Inicio")}
              style={styles.pacienteContainer}>
              <Feather name='home' size={25} color={'#53A7D7'} />
            </TouchableOpacity>
            <View style={{ backgroundColor: "black", width: '100%',height:300 }}>
            <Text>Atividades realizadas</Text>
            </View>
          </View>
        </View>

      </View>
    </ScrollView>
  );
}

export default ProgressoPage;

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