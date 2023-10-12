import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Image,
  Dimensions,
  ScrollView,
} from "react-native";

import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from "react-native-chart-kit";
import CircularProgress from "react-native-circular-progress-indicator";
import FeatherIcon from "react-native-vector-icons/Feather";
import Ionicons from "react-native-vector-icons/Ionicons";
import TabContainer from "../../../components/navigation/Paciente/BottomTab/TabContainer";

const ProgressoScreen = ({ navigation }) => {
  const [value, setValue] = useState(0);

  return (
    <TabContainer>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.card}>
            <Text style={styles.titulo}>Gráfico de Humor</Text>
            <LineChart
              data={{
                labels: [1, 5, 9, 13, 17, 21, 25, 29],
                datasets: [
                  {
                    data: [2, 4, 3, 1, 5, 3, 1, 4],
                  },
                ],
              }}
              width={Dimensions.get("window").width - 65} // from react-native
              height={220}
              chartConfig={{
                backgroundColor: "white",
                backgroundGradientFrom: "white",
                backgroundGradientTo: "white",
                decimalPlaces: 2, // optional, defaults to 2dp
                color: (opacity) => `#B9B9B9`,
                labelColor: (opacity = 1) => `black`,
                style: {
                  borderRadius: 16,
                },
                propsForDots: {
                  r: "6",
                  strokeWidth: "0.5",
                  stroke: "#B9B9B9",
                },
                barPercentage: 5,
              }}
              withHorizontalLabels={false}
              withInnerLines={true}
              withShadow={false}
              withOuterLines={false}
              getDotColor={(dataPoint, dataPointIndex) => {
                if (dataPoint == 5) {
                  return "#07E437";
                } else if (dataPoint == 4) {
                  return "#15A635";
                } else if (dataPoint == 3) {
                  return "#2AB2DD";
                } else if (dataPoint == 2) {
                  return "#F0880D";
                } else if (dataPoint == 1) {
                  return "#F01B0D";
                }
              }}
            />
            <View style={styles.icons}>
              <Image
                style={styles.icon}
                source={require("../../../assets/icons/IconAnimado.png")}
              />
              <Image
                style={styles.icon}
                source={require("../../../assets/icons/IconFeliz.png")}
              />
              <Image
                style={styles.icon}
                source={require("../../../assets/icons/IconNeutro.png")}
              />
              <Image
                style={styles.icon}
                source={require("../../../assets/icons/IconMal.png")}
              />
              <Image
                style={styles.icon}
                source={require("../../../assets/icons/IconHorrivel.png")}
              />
            </View>
          </View>

          <View style={styles.card}>
            <Text style={styles.titulo}>Atividades Realizadas</Text>
            <CircularProgress
              radius={90}
              value={90}
              textColor="#222"
              valueSuffix={"%"}
              activeStrokeColor="#53A7D7"
              inActiveStrokeColor={"gray"}
              inActiveStrokeOpacity={0.2}
              duration={3000}
              onAnimationComplete={() => setValue(50)}
            />
          </View>
          <View style={styles.card}>
            <TouchableOpacity
              onPress={() => navigation.navigate("RegistroEmocoesPC")}
              style={{ alignSelf: "flex-start", flexDirection: 'row', alignItems: 'center', gap: 2 }}
            >
              <Text style={styles.titulo}>Registro de Emoções</Text>
              <FeatherIcon name="chevron-right" size={20} color={"#6D45C2"} />
            </TouchableOpacity>

            <View style={styles.emotionCard}>
              <Image
                style={styles.emotionIcon}
                source={require("../../../assets/icons/IconFeliz.png")}
              />
              <View>
                <Text style={styles.text}>
                  Estou feliz com a vitória do Praia Clube
                </Text>
                <Text style={styles.textData}>Data</Text>
              </View>
            </View>
            <View style={styles.emotionCard}>
              <Image
                style={styles.emotionIcon}
                source={require("../../../assets/icons/IconFeliz.png")}
              />
              <View>
                <Text style={styles.text}>
                  Estou feliz com a vitória do Praia Clube
                </Text>
                <Text style={styles.textData}>Data</Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </TabContainer>
  );
};

export default ProgressoScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F2F2F2",
    alignItems: "center",
    justifyContent: "flex-start",
    marginTop: 25,
    gap: 38,
    paddingHorizontal: 30,
    paddingBottom: 30,
  },
  card: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    padding: 25,
    borderRadius: 10,
    gap: 25,
    shadowColor: "gray",
    elevation: 5,
    width: "100%",
  },
  icons: {
    height: 0,
    position: "relative",
    display: "flex",
    gap: 15,
    top: -245,
    left: -135,
  },
  icon: {
    width: 25,
    height: 25,
    resizeMode: "contain",
  },
  titulo: {
    fontSize: 18,
    fontFamily: "Poppins_400Regular",
    color: "#6D45C2",
    fontWeight: "bold",
    alignSelf: "flex-start",
  },
  emotionCard: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#E6E6E6",
    padding: 15,
    borderRadius: 10,
    gap: 15,
  },
  iconIcon: {
    width: 35,
    height: 35,
    resizeMode: "contain",
  },
  text: {
    fontFamily: "Poppins_400Regular",
  },
  textData: {
    fontFamily: "Poppins_400Regular",
    alignSelf: 'flex-end',
    color: '#A0A0A0'
  },
});
