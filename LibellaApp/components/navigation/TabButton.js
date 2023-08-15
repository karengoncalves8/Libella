import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableWithoutFeedback,
  Animated,
  Modal
} from "react-native";

import Dropdown from 'react-native-input-select';

import AntIcon from "react-native-vector-icons/AntDesign";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import MaterialIcon from "react-native-vector-icons/MaterialIcons";

import { useNavigation } from '@react-navigation/native';
import { CadastroPaciente } from "../../pages";


const TabButton = ({ toggleOpened, opened }) => {
  const navigation = useNavigation();
  const animation = React.useRef(new Animated.Value(0)).current;

  const [modalVisible, setModalVisible] = useState(false);

  const [paciente, setPaciente] = React.useState();

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
            <View style={{flexDirection: 'row', alignItems: 'center', width: '100%', gap: 80}}>
              <TouchableWithoutFeedback
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}>
                <AntIcon name="close" size={25} color={"black"} />
              </TouchableWithoutFeedback>
              <Text>Agendar Sessão</Text>
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
                borderWidth: 0, // To remove border, set borderWidth to 0
              }}
              placeholderStyle={{
                color: '#313131',
                fontSize: 15,
                opacity: 0.3
              }}
              labelStyle={{ color: 'teal', fontSize: 15, fontWeight: '500' }}
              checkboxComponentStyles={{
                checkboxSize: 20,
                checkboxStyle: {
                  backgroundColor: '#53A7D7',
                  borderRadius: 30, // To get a circle - add the checkboxSize and the padding size
                  padding: 10,
                  borderColor: '#313131',
                  borderWidth: 0.5,
                },
                checkboxLabelStyle: { color: 'black', fontSize: 20 },
              }}
              dropdownIcon={
                <MaterialIcon name="arrow-drop-down" size={35} color={"black"} style={{opacity:0.3}} />
              }
              dropdownIconStyle={{ top: 13, right: 20 }}
            />

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
});
export default TabButton;