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

import TabContainer from "../../../components/navigation/Paciente/BottomTab/TabContainer";

const ProgressoScreen = ({ navigation }) => {
 
  return (
    <TabContainer>
      <View style={styles.container}>
        <Text>PROGRESSO</Text>
      </View>
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


});