import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableWithoutFeedback,
  Animated,
  Modal,
  TextInput,
  Pressable,
  Platform
} from "react-native";

import Dropdown from 'react-native-input-select';

import AntIcon from "react-native-vector-icons/AntDesign";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import MaterialIcon from "react-native-vector-icons/MaterialIcons";

import { useNavigation } from '@react-navigation/native';

import DateTimePicker from '@react-native-community/datetimepicker';

const TabButton = ({ toggleOpened, opened }) => {
  const navigation = useNavigation();
  const animation = React.useRef(new Animated.Value(0)).current;

  const [modalVisible, setModalVisible] = useState(false);

  const [paciente, setPaciente] = React.useState();

  //Date Picker
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false)
  const [showTimePicker, setShowTimePicker] = useState(false)

  const toggleDatePicker = () => {
    setShowDatePicker(!showDatePicker);
  };

  const toggleTimePicker = () => {
    setShowTimePicker(!showTimePicker);
  };


  const onChangeDate = ({ type }, selectedDate) => {
    if (type == "set") {
      const currentDate = selectedDate;
      setDate(currentDate);

      if (Platform.OS === "android") {
        toggleDatePicker();
        setDateEvento(formatDate(currentDate));
      }
    }
    else {
      toggleDatePicker();
    }
  };

  const onChangeTime = ({ type }, selectedDate) => {
    if (type == "set") {
      const currentDate = selectedDate;
      setTime(currentDate);

      if (Platform.OS === "android") {
        toggleTimePicker();
        setTimeEvento(formatTime(currentDate));
      }
    }
    else {
      toggleTimePicker();
    }
  };

  const formatDate = (rawDate) => {
    let date = new Date(rawDate);

    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();

    return `${day}/${month}/${year}`;
  };

  const formatTime = (rawDate) => {
    let time = new Date(rawDate);

    let hours = time.getHours();
    let min = time.getMinutes();

    return `${hours}:${min}`;
  };

  // Text Input
  const [dataEvento, setDateEvento] = useState()
  const [timeEvento, setTimeEvento] = useState()

  React.useEffect(() => {
    Animated.timing(animation, {
      toValue: opened ? 1 : 0,
      duration: 300,
      friction: 2,
      useNativeDriver: false,
    }).start();
  }, [opened, animation]);

  const opacity = {
    opacity: animation.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: [0, 0, 1],
    }),
  };

  return (
    <View style={styles.container}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={{ flexDirection: 'row', alignItems: 'center', width: '100%', gap: 80 }}>
              <TouchableWithoutFeedback
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}>
                <AntIcon name="close" size={25} color={"black"} />
              </TouchableWithoutFeedback>
              <Text style={{ fontFamily: 'Poppins_300Light' }}>Agendar Sessão</Text>
            </View>
            <Dropdown
              label="Paciente"
              placeholder="Selecione o paciente"
              options={[
                { label: 'Paciente1', value: 'P1' },
                { label: 'Paciente2', value: 'P2' },
              ]}
              selectedValue={paciente}
              onValueChange={(value) => setPaciente(value)}
              primaryColor={'#53A7D7'}
              dropdownStyle={{
                borderWidth: 0.5,
                borderRadius: 80,
                backgroundColor: 'white'
              }}
              placeholderStyle={{
                color: '#313131',
                fontSize: 15,
                opacity: 0.3
              }}
              labelStyle={{ color: 'black', fontSize: 15, fontFamily: 'Poppins_300Light', paddingTop: 10 }}
              checkboxComponentStyles={{
                checkboxSize: 5,
                checkboxStyle: {
                  backgroundColor: '#53A7D7',
                  borderRadius: 10,
                  padding: 10,
                  borderColor: '#313131',
                  borderWidth: 0.5,
                },
                checkboxLabelStyle: { color: 'black', fontSize: 20, fontFamily: 'Poppins_300Light' },
              }}
              dropdownIcon={
                <MaterialIcon name="arrow-drop-down" size={35} color={"black"} style={{ opacity: 0.3 }} />
              }
              dropdownIconStyle={{ top: 13, right: 20 }}
            />

            <View style={{ flexDirection: 'row', justifyContent: "space-between", width: '100%', marginTop: -20}}>

              <View style={{gap: 5}}>
                <Text style={styles.inputText}> Data </Text>
                {!showDatePicker && (
                  <Pressable
                    onPress={toggleDatePicker}>
                    <TextInput
                      style={styles.input}
                      placeholder="18/08/2008"
                      value={dataEvento}
                      onChange={setDateEvento}
                      editable={false}
                    />
                  </Pressable>
                )}
                {showDatePicker && (
                  <DateTimePicker
                    mode="date"
                    display="spinner"
                    value={date}
                    onChange={onChangeDate}
                  />
                )}
              </View>
              
              <View style={{gap: 5}}>
                <Text style={styles.inputText}> Horário </Text>
                {!showTimePicker && (
                  <Pressable
                    onPress={toggleTimePicker}>
                    <TextInput
                      style={styles.input}
                      placeholder="18:00"
                      value={timeEvento}
                      onChange={setTimeEvento}
                      editable={false}
                    />
                  </Pressable>
                )}
                {showTimePicker && (
                  <DateTimePicker
                    mode="time"
                    display="spinner"
                    value={time}
                    onChange={onChangeTime}
                  />
                )}
              </View>
            </View>
          </View>
        </View>
      </Modal>
      <View style={styles.box}>
        {/*cadastrar pacientes*/}
        <TouchableWithoutFeedback
          onPress={() => navigation.navigate('CadastroPaciente')}>
          <Animated.View
            style={[
              styles.item,
              opacity,
              {
                transform: [
                  {
                    translateX: animation.interpolate({
                      inputRange: [0, 1],
                      outputRange: [0, -60],
                    }),
                  },
                  {
                    translateY: animation.interpolate({
                      inputRange: [0, 1],
                      outputRange: [0, -50],
                    }),
                  },
                ],
              },
            ]}
          >
            <AntIcon name="adduser" size={25} color={"white"} />

          </Animated.View>
        </TouchableWithoutFeedback>
        {/*atribuir atividade*/}
        <TouchableWithoutFeedback onPress={() => navigation.navigate('AtribuirAtividade')}>
          <Animated.View
            style={[
              styles.item,
              opacity,
              {
                transform: [
                  {
                    translateY: animation.interpolate({
                      inputRange: [0, 1],
                      outputRange: [0, -100],
                    }),
                  },
                ],
              },
            ]}
          >
            <AntIcon name="addfile" size={25} color={"white"} />
          </Animated.View>
        </TouchableWithoutFeedback>
        {/*agendar sessão*/}
        <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
          <Animated.View
            style={[
              styles.item,
              opacity,
              {
                transform: [
                  {
                    translateX: animation.interpolate({
                      inputRange: [0, 1],
                      outputRange: [0, 60],
                    }),
                  },
                  {
                    translateY: animation.interpolate({
                      inputRange: [0, 1],
                      outputRange: [0, -50],
                    }),
                  },
                ],
              },
            ]}
          >
            <FontAwesomeIcon name="calendar-plus-o" size={25} color={"white"} />
          </Animated.View>
        </TouchableWithoutFeedback>
        {/*botão add, animação*/}
        <TouchableWithoutFeedback
          onPress={toggleOpened}
          style={styles.addButton}
        >
          <Animated.View
            style={[
              styles.addButtonInner,
              {
                transform: [
                  {
                    rotate: animation.interpolate({
                      inputRange: [0, 1],
                      outputRange: ["0deg", "45deg"],
                    }),
                  },
                ],
              },
            ]}
          >
            <AntIcon name="plus" size={30} color={"white"} />
          </Animated.View>
        </TouchableWithoutFeedback>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1,
    height: 0,
  },
  box: {
    position: "relative",
    width: 60,
    height: 60,
    marginTop: -30,
  },
  addButton: {
    shadowColor: "black",
    shadowOpacity: 0.3,
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },
  addButtonInner: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#53A7D7",
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  item: {
    position: "absolute",
    top: 5,
    left: 5,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#53A7D7",
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 25,
    width: 350,
    alignItems: 'center',
    gap: 25,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  input: {
    borderWidth: 0.5,
    borderRadius: 30,
    paddingHorizontal: 15,
    paddingVertical: 5,
    backgroundColor: 'white',
    color: 'black', 
    textAlign: 'center'
  },
  inputText: {
    color: 'black', 
    fontSize: 15, 
    fontFamily: 'Poppins_300Light', 
  }
});
export default TabButton;