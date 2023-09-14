import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput, ScrollView, Hr } from "react-native";

import EntypoIcon from "react-native-vector-icons/Entypo";
import AntIcon from "react-native-vector-icons/AntDesign";
import IonIcon from "react-native-vector-icons/Ionicons";
import MaterialCommunityIcon from "react-native-vector-icons/MaterialCommunityIcons";

export default function WelcomePage() {
    return (
        <View style={styles.container}>
            <View style={styles.containerProfile}>
                <View style={styles.containerUser}>
                    <Image
                        style={styles.userImg}
                        source={require('../../assets/img/Pessoas/Andreia.jpg')}
                    />
                </View>
                <View style={styles.containerName}>
                    <Text style={styles.name}>Ser Humano</Text>
                </View>
            </View>
            <View style={styles.containerInfos}>
                <Text style={styles.TitlePrincipal}>Contato</Text>
                <View style={styles.containerInfosBloco}>
                <IonIcon name="mail-outline"></IonIcon>
                    <Text style={styles.text}>blablablablabla</Text>{/*Esse texto vai mudar de acordo com o Banco de dados*/} 
                </View>
                <View style={styles.containerInfosBloco}>
                <IonIcon name="call-outline"></IonIcon>
                    <Text style={styles.text}>blablablablabla</Text>{/*Esse texto vai mudar de acordo com o Banco de dados*/} 
                </View>
                <Text style={styles.TitlePrincipal}>Consultório</Text>
                <View style={styles.containerInfosBloco}>
                <IonIcon name="location-outline"></IonIcon>
                    <Text style={styles.text}>blablablablabla</Text>{/*Esse texto vai mudar de acordo com o Banco de dados*/} 
                </View>
                <Text style={styles.TitlePrincipal}>CRP</Text>
                <View style={styles.containerInfosBloco}>
                        <AntIcon name="IdcardOutlined"></AntIcon>
                    <Text style={styles.text}>blablablablabla</Text>{/*Esse texto vai mudar de acordo com o Banco de dados*/} 
                </View>
            </View>   
        </View>
    );W
}

const styles = StyleSheet.create({

    // Containers
    container: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'flex-start',
        padding: 20,
        top: 20,
        gap: 20,
        backgroundColor: '#F2F2F2',
        color: 'white',
    },

    containerProfile: {
        width: '100%',
        height: '32%',
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
        paddingLeft: 5,
    },


    // Textos
    name: {
        fontFamily: 'Poppins',
        fontSize: 22,
        color: 'black',
        fontWeight: 'bold',
    },

    TitlePrincipal: {
        fontFamily: 'Poppins',
        fontSize: 20,
        color: '#6D45C2',
    },

    text: {
        fontFamily: 'Poppins',
        fontSize: 15,
        color: 'black', 
    },

    // Imagens
    userImg: {
        width: 120,
        height: 120,
        borderRadius: 100,
    },
});