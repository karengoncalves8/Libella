import { StyleSheet, Text, View, Image, ScrollView } from "react-native";

import FeatherIcon from 'react-native-vector-icons/Feather'
import AntIcon from "react-native-vector-icons/AntDesign";

const Perfil = () => {
    return (
        <View style={styles.container}>
            <View style={styles.containerProfile}>
                <View style={styles.containerUser}>
                    <Image
                        style={styles.userImg}
                        source={require('../../../../assets/img/Pessoas/Andreia.jpg')}
                    />
                </View>
                <View style={styles.containerName}>
                    <Text style={styles.name}>Ser Humano</Text>
                    <FeatherIcon
                        name="edit"
                        size={20}
                        color={"black"}
                        style={styles.icon}
                    />
                </View>
            </View>
            <View style={styles.containerInfos}>
                <Text style={styles.TitlePrincipal}>Contato</Text>
                <View style={styles.containerInfosBloco}>
                    <View style={styles.containerIcon}>
                        <FeatherIcon
                            name="mail"
                            size={20}
                            color={"black"}
                            style={styles.icon}
                        />
                    </View>
                    <Text style={styles.text}>andressasilva81@gmail.com</Text>{/*Esse texto vai mudar de acordo com o Banco de dados*/}
                </View>
                <View style={styles.containerInfosBloco}>
                    <View style={styles.containerIcon}>
                        <FeatherIcon
                            name="phone"
                            size={20}
                            color={"black"}
                            style={styles.icon}
                        />
                    </View>
                    <Text style={styles.text}>(12) 99784-4923</Text>{/*Esse texto vai mudar de acordo com o Banco de dados*/}
                </View>
                <Text style={styles.TitlePrincipal}>Consultório</Text>
                <View style={styles.containerInfosBloco}>
                    <View style={styles.containerIcon}>
                        <FeatherIcon
                            name="map-pin"
                            size={20}
                            color={"black"}
                            style={styles.icon}
                        />
                    </View>
                    <Text style={styles.text}>R. Pico da Neblina, 97 - Jardim Altos de Santana, São José dos Campos</Text>{/*Esse texto vai mudar de acordo com o Banco de dados*/}
                </View>
                <Text style={styles.TitlePrincipal}>CRP</Text>
                <View style={styles.containerInfosBloco}>
                    <View style={styles.containerIcon}>
                        <AntIcon name="idcard" size={20} color={"black"} style={styles.icon} />
                    </View>
                    <Text style={styles.text}>21/04209</Text>{/*Esse texto vai mudar de acordo com o Banco de dados*/}
                </View>
            </View>
        </View>
    ); W
}

export default Perfil;

const styles = StyleSheet.create({

    // Containers
    container: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'flex-start',
        padding: 20,
        top: 5,
        gap: 20,
        backgroundColor: '#F2F2F2',
        color: 'white',
    },

    containerProfile: {
        width: '100%',
        height: '35%',
        backgroundColor: 'white',
        gap: 10,
        padding: 20,
        borderRadius: 10,
    },

    containerUser: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',

    },

    containerName: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
        gap: 10,
    },

    containerInfos: {
        width: '100%',
        backgroundColor: 'white',
        padding: 20,
        paddingLeft: 30,
        borderRadius: 10,
        gap: 15,
    },

    containerInfosBloco: {
        width: '100%',
        flexDirection: 'row',
        gap: 10,
        paddingLeft: 0,
    },

    containerIcon: {
        width: '10%',
        justifyContent: 'center',
        alignItems: 'center',
    },




    // Textos
    name: {
        fontFamily: 'Poppins_500Medium',
        fontSize: 22,
        color: 'black',
    },

    TitlePrincipal: {
        fontFamily: 'Poppins_500Medium',
        fontSize: 20,
        color: '#6D45C2',
    },

    text: {
        fontFamily: 'Poppins_500Medium',
        fontSize: 15,
        color: 'black',
    },



    // Imagens
    userImg: {
        width: 120,
        height: 120,
        borderRadius: 100,
    },

    icon: {
        marginBottom: 5,
    },
});