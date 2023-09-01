import * as React from 'react';

import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

import AntIcon from "react-native-vector-icons/AntDesign"

const FichaPacienteScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.containerProfile}>
                <View style={styles.containerUserImg}>
                    <Image
                        style={styles.userImg}
                        source={require("../../assets/img/Pessoas/Andreia.jpg")}
                    />
                </View>
                <View style={styles.containerName}>
                    <Text style={styles.name}>Ser Humano</Text>
                </View>

            </View>
            <View style={styles.containerInfPessoais}>
                <View style={styles.containerIcon}>

                    <AntIcon name="idcard" size={25} color={"black"} style={styles.icons} />

                </View>
                <View style={styles.containerInfPessoaisText}>
                    <Text style={styles.InfPessoaisText}>Informações Pessoais</Text>
                </View>
            </View>
            <View style={styles.containerContent}>
                <View style={styles.containerInfBloco}>
                    <Text style={styles.Title}>Nome Completo</Text>
                    <Text style={styles.text}>Andreia Menezes Ramos</Text>{/*Esse texto vai mudar de acordo com o Banco de dados*/}
                </View>
                <View style={styles.containerInfBloco}>
                    <Text style={styles.Title}>Email</Text>
                    <Text style={styles.text}>andreiaramos11@gmail.com</Text>{/*Esse texto vai mudar de acordo com o Banco de dados*/}
                </View>
                <View style={styles.containerInfBloco}>
                    <Text style={styles.Title}>Endereço</Text>
                    <Text style={styles.text}>R. Nelson Avarez, 102 - Jardim Satélite, São José dos Campos, SP</Text>{/*Esse texto vai mudar de acordo com o Banco de dados*/}
                </View>
                <View style={styles.containerInfBloco}>
                    <Text style={styles.Title}>Telefone</Text>
                    <Text style={styles.text}>(12) 99274-4243</Text>{/*Esse texto vai mudar de acordo com o Banco de dados*/}
                </View>
                <View style={styles.containerInfBloco}>
                    <Text style={styles.Title}>Escolaridade</Text>
                    <Text style={styles.text}>Formada em Direito</Text>{/*Esse texto vai mudar de acordo com o Banco de dados*/}
                </View>
                <View style={styles.containerInfBloco}>
                    <Text style={styles.Title}>Ocupação</Text>
                    <Text style={styles.text}>Advogada</Text>{/*Esse texto vai mudar de acordo com o Banco de dados*/}
                </View>
            </View>
        </View>
    );
}

export default FichaPacienteScreen;

const styles = StyleSheet.create({

    // Containers
    container: { // Container Principal
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'flex-start',
        padding: 20,
        top: 0,
        backgroundColor: '#F2F2F2',
        color: 'white',
    },

    containerProfile: { //Container de cima do perfil: FOTO + NOME
        width: '90%',
        height: '15%',
        flexDirection: 'row',
        gap: 30,
    },

    containerUserImg: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    containerName: {
        flex: 7,
        justifyContent: 'center',
        alignItems: 'flex-start',
    },

    containerInfPessoais: { // Container Titilo "Informações pessoais"
        width: '90%',
        height: '10%',
        flexDirection: 'row',
    },

    containerIcon: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'flex-start',
    },

    containerInfPessoaisText: {
        flex: 20,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
    },

    containerContent: {
        width: '90%',
        flexDirection: 'column',
        backgroundColor: 'white',
        padding: 20,
        gap: 15,
        borderRadius: 15,
    },

    containerInfBloco: {
        width: '100%',
        gap: 5,
    },




    // Textos
    name: {
        fontFamily: 'Poppins_500Medium',
        fontSize: 22,
        marginTop: 5,
    },

    InfPessoaisText: {
        fontFamily: 'Poppins_700Bold',
        fontSize: 15,
        marginTop: 5,
    },

    Title: {
        fontFamily: 'Poppins_500Medium',
        fontSize: 15,
    },

    text: {
        fontFamily: 'Poppins_500Medium',
        fontSize: 13,
    },




    // Imagens
    userImg: {
        width: 60,
        height: 60,
        borderRadius: 100,
    },
},
);