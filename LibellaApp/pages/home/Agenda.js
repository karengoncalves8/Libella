import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Image,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient"; /* instalar */
import TabContainer from "../../components/navigation/TabContainer";

import { Calendar, LocaleConfig } from 'react-native-calendars';

const meetings = [
  {
    id: 1,
    name: 'Leslie Alexander',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    startDatetime: '2022-05-11T13:00',
    endDatetime: '2022-05-11T14:30',
  },
  {
    id: 2,
    name: 'Alo',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    startDatetime: '2022-05-11T13:00',
    endDatetime: '2022-05-11T14:30',
  },
]





const AgendaPage = () => {
  const [selected, setSelected] = useState('');

  return (
    <TabContainer>
      <View style={styles.container}>
        <Calendar
          // Customize the appearance of the calendar
          style={{
            width: '100%'
          }}
          // Callback that gets called when the user selects a day
          onDayPress={day => {
            setSelected(day.dateString);
          }}
          // Mark specific dates as marked
          markedDates={{
            '2012-03-01': { selected: true, marked: true, selectedColor: 'blue' },
            '2012-03-02': { marked: true },
            '2012-03-03': { selected: true, marked: true, selectedColor: 'blue' }
          }}
        />

        <View style={{ paddingHorizontal: 30, flex: 1, alignItems: 'center' }}>
          <View style={{ width: '100%' }}>
            <View style={{gap: 30}}>
            <Text>{selected}</Text>
              {meetings.map((mettings, i) => {
                return (
                  <View key={i}>
                    <Text >{mettings.startDatetime}</Text>
                    <View style={styles.card}>
                    <Text>  {mettings.name}</Text>
                    </View>
                  </View>
                )
              })}
              
            </View>
          </View>

        </View>
      </View>
    </TabContainer>
  );
};

export default AgendaPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F2F2F2",
    gap: 27,
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
});
