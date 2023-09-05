import * as React from 'react';
import { StatusBar } from "expo-status-bar";
import {StyleSheet, Text, View, Image, TouchableOpacity, TextInput, ScrollView, Hr } from "react-native";

const PerfilScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
                <View style={styles.containerUser}>
                    <Image
                        style={styles.userImg}
                        source={require('../../../../assets/img/Pessoas/Andreia.jpg')}
                    />
                </View>
                <View style={styles.containerName}>
                    <Text style={styles.text}>Ser Humano</Text>
                </View>
                <View style={styles.containerProgress}>
                </View>
                <View style={styles.containerSchedule}>

                </View>
            </View>
  );
}

export default PerfilScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'flex-start',
        padding: 20,
        top: 0,
        backgroundColor: '#F2F2F2',
        color: 'white',
    },

    containerUser: {
        width: '100%',
        display: 'flex',
        marginTop: 15,
        alignItems: 'center',
        justifyContent: 'center',
    },

    containerName: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
    },

    text: {
        fontSize: 25,
        color: 'black',
        fontWeight: 'bold',
    },

    containerButtons: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
        flexDirection: 'row',
        marginTop: 25,
    },

    button: {
        backgroundColor: '#6D45C2',
        padding: 10,
        paddingLeft: 30,
        paddingRight: 30,
        borderRadius: 15,
        fontWeight: 'bold',
    },

    userImg: {
        width: 120,
        height: 120,
        borderRadius: 100,
    },

    containerProgress: {
        backgroundColor: 'white',
        height: '30%',
        width: '100%',
        borderRadius: 10,
        marginTop: 5,
    },

    containerSchedule: {
        backgroundColor: 'white',
        height: '30%',
        width: '100%',
        borderRadius: 10,
        marginTop: 10,
    },
  },
);