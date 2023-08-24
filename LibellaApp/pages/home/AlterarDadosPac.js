import * as React from 'react';
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

import AntIcon from "react-native-vector-icons/AntDesign"

const FichaPacienteScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.containerProfile}>
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
                    <View style={styles.containerInfBlocoText}>
                        <View style={styles.containerText}>
                            <Text style={styles.text}>Andreia Menezes Ramos</Text>{/*Esse texto vai mudar de acordo com o Banco de dados*/}
                        </View>
                        <View style={styles.containerIconText}>
                            <AntIcon name="edit" size={15} color={"black"} style={styles.icons} />
                        </View>
                    </View>
                </View>
                <View style={styles.containerInfBloco}>
                    <Text style={styles.Title}>Email</Text>
                    <View style={styles.containerInfBlocoText}>
                        <View style={styles.containerText}>
                            <Text style={styles.text}>andreiaramos11@gmail.com</Text>{/*Esse texto vai mudar de acordo com o Banco de dados*/}
                        </View>
                        <View style={styles.containerIconText}>
                            <AntIcon name="edit" size={15} color={"black"} style={styles.icons} />
                        </View>
                    </View>
                </View>
                <View style={styles.containerInfBloco}>
                    <Text style={styles.Title}>Senha</Text>
                    <View style={styles.containerInfBlocoText}>
                        <View style={styles.containerText}>
                            <Text style={styles.text}>*******</Text>{/*Esse texto vai mudar de acordo com o Banco de dados*/}
                        </View>
                        <View style={styles.containerIconText}>
                            <AntIcon name="edit" size={15} color={"black"} style={styles.icons} />
                        </View>
                    </View>
                </View>

                <View style={styles.containerInfBloco}>
                    <Text style={styles.Title}>Endereço</Text>
                    <View style={styles.containerInfBlocoText}>
                        <View style={styles.containerText}>
                            <Text style={styles.text}>(12) R. Nelson Avarez, 102 - Jardim Satélite, São José dos Campos, SP</Text>{/*Esse texto vai mudar de acordo com o Banco de dados*/}
                        </View>
                        <View style={styles.containerIconText}>
                            <AntIcon name="edit" size={15} color={"black"} style={styles.icons} />
                        </View>
                    </View>
                </View>
                

                <View style={styles.containerInfBloco}>
                    <Text style={styles.Title}>Telefone</Text>
                    <View style={styles.containerInfBlocoText}>
                        <View style={styles.containerText}>
                            <Text style={styles.text}>(12) 99274-4243</Text>{/*Esse texto vai mudar de acordo com o Banco de dados*/}
                        </View>
                        <View style={styles.containerIconText}>
                            <AntIcon name="edit" size={15} color={"black"} style={styles.icons} />
                        </View>
                    </View>
                </View>

                <View style={styles.containerInfBloco}>
                    <Text style={styles.Title}>Ocupação</Text>
                    <View style={styles.containerInfBlocoText}>
                        <View style={styles.containerText}>
                            <Text style={styles.text}>Advogada</Text>{/*Esse texto vai mudar de acordo com o Banco de dados*/}
                        </View>
                        <View style={styles.containerIconText}>
                            <AntIcon name="edit" size={15} color={"black"} style={styles.icons} />
                        </View>
                    </View>
                </View>

                <View style={styles.containerInfBloco}>
                    <Text style={styles.Title}>Escolaridade</Text>
                    <View style={styles.containerInfBlocoText}>
                        <View style={styles.containerText}>
                            <Text style={styles.text}>Formada em Direito</Text>{/*Esse texto vai mudar de acordo com o Banco de dados*/}
                        </View>
                        <View style={styles.containerIconText}>
                            <AntIcon name="edit" size={15} color={"black"} style={styles.icons} />
                        </View>
                    </View>
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

    containerText: {
        flexDirection: 'row',
        width: '80%',
    },

    containerIconText: {
        width: '20%',
        justifyContent: 'center',
        alignItems: 'center',
    },

    containerInfBlocoText: {
        flexDirection: 'row',
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


},
);