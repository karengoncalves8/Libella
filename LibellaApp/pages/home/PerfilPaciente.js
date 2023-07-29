import * as React from 'react';
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput, ScrollView, Hr } from "react-native";

import FeatherIcon from 'react-native-vector-icons/Feather'

const PerfilPacientePage = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.containerUser}>
                <Image
                    style={styles.userImg}
                    source={require('../../assets/img/Pessoas/Andreia.jpg')}
                />
            </View>
            <View style={styles.containerName}>
                <Text style={styles.text}>Ser Humano</Text>
            </View>
            <View style={styles.containerButtons}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.navigate('Home')}>
                    <Text style={styles.textButton}>Atividades</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.navigate('FichaPaciente')}>
                    <Text style={styles.textButton}>Ficha</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.navigate('Home')}>
                    <FeatherIcon name='message-circle' size={20} color={'white'} />
                </TouchableOpacity>
            </View>
            <View style={styles.containerProgress}>
            </View>
            <View style={styles.containerSchedule}>

            </View>
        </View>
    );
}

export default PerfilPacientePage;

const styles = StyleSheet.create({

    // Container
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

    containerButtons: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
        flexDirection: 'row',
        marginTop: 25,
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




    // Botões
    button: {
        fontFamily: 'Poppins_500Medium',
        backgroundColor: '#6D45C2',
        padding: 10,
        paddingLeft: 30,
        paddingRight: 30,
        borderRadius: 15,
    },




    // Imagens
    userImg: {
        width: 120,
        height: 120,
        borderRadius: 100,
    },




    // Textos
    text: {
        fontFamily: 'Poppins_500Medium',
        fontSize: 25,
        color: 'black',
    },

    textButton: {
        fontFamily: 'Poppins_500Medium',
        color: 'white',
        fontSize: 13,
    },
},
);