import React, { useState} from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
} from "react-native";

import TabContainer from "../../../components/navigation/TabContainer";

import { Calendar, LocaleConfig } from "react-native-calendars";

import { format,  } from "date-fns";

const meetings = [
  {
    id: 1,
    name: "Leslie Alexander",
    date: "2023-08-05",
    time: "13:00",
  },
  {
    id: 3,
    name: "Antoni",
    date: "2023-08-05",
    time: "13:00",
  },
  {
    id: 2,
    name: "Alo",
    date: "2023-08-25",
    time: "13:00",
  },
];



const AgendaPage = () => {
  const currentDate = format(new Date(), "yyyy-MM-dd");

  const [selected, setSelected] = useState(currentDate);

  let currentMetting = [];
  for (let i = 0; i < meetings.length; i++) {
    if (meetings[i].date === selected) {
      currentMetting.push(meetings[i]);
    }
  }

  let markedDay = {};

  meetings.map((item) => {
    markedDay[item.date] = {
      marked: true,
      selectedColor: "#53A7D7",
    };
  });

  return (
    <TabContainer>
      <View style={styles.container}>
        <Calendar
          // Customize the appearance of the calendar
          style={{
            width: "100%",
          }}
          // Callback that gets called when the user selects a day
          onDayPress={(day) => {
            setSelected(day.dateString);
          }}
          // Mark specific dates as marked
          markedDates={markedDay}
        />

        <View style={{ paddingHorizontal: 30, flex: 1, alignItems: "center" }}>
          <View style={{ width: "100%" }}>
            <View style={{ gap: 15 }}>
            <Text style={styles.textDate}>{selected}</Text>
              {currentMetting.length > 0 ? (
                currentMetting.map((mettings, i) => {
                  return (
                    <View key={i} style={{ gap: 10 }}>
                      <View style={styles.card}>
                        <View style={{ flexDirection: "row", gap: 6 }}>
                          <Image
                            source={require("../../assets/icons/VectorAzul.png")}
                          />
                          <Text style={styles.text}>
                            {mettings.name}
                          </Text>
                        </View>
                        <Text style={styles.text}> {mettings.time}</Text>
                      </View>
                    </View>
                  );
                })
              ) : (
                <Text style={{textAlign: 'center'}}>Não há sessões agendadas.</Text>
              )}
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
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    backgroundColor: "white",
    padding: 25,
    borderRadius: 10,
    gap: 30,
    shadowColor: "gray",
    elevation: 5,
  },
  text: {
    fontSize: 14,
  },
  textDate: {
    marginLeft: 5,
    fontSize: 16,
    fontWeight: "bold",
  },
});

LocaleConfig.locales["pt-br"] = {
  monthNames: [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ],
  monthNamesShort: [
    "Jan",
    "Fev",
    "Mar",
    "Abr",
    "Mai",
    "Jun",
    "Jul",
    "Ago",
    "Set",
    "Out",
    "Nov",
    "Dez",
  ],
  dayNames: [
    "Domingo",
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sabádo",
  ],
  dayNamesShort: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"],
  today: "Hoje",
};

LocaleConfig.defaultLocale = "pt-br";