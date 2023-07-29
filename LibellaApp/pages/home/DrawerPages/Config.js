import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, TouchableOpacity, } from "react-native";

import AntIcon from "react-native-vector-icons/AntDesign";
import EntypoIcon from "react-native-vector-icons/Entypo";

const Config = () => {
    return (
        <View style={styles.container}>
            <View style={styles.containerTitleBloco}>
            <AntIcon name="idcard" size={25} color={"black"} style={styles.icons} />
                <Text style={styles.TitlePrincipal}>Informações Pessoais</Text>
            </View>

            <TouchableOpacity style={styles.containerConfigBloco}>
                <View style={styles.containerInfosBloco}>
                    <Text style={styles.text}>Alterar Dados</Text>
                    <EntypoIcon name="chevron-thin-right" size={20} color={"black"} style={styles.icon} />
                </View>

            </TouchableOpacity>

        </View>
    );
}

export default Config;

const styles = StyleSheet.create({

    // Containers
    container: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'flex-start',
        top: 20,
        gap: 30,
        backgroundColor: '#F2F2F2',
        color: 'white',
    },

    containerTitleBloco: {
        width: '80%',
        flexDirection: 'row',
        top: 20,
        gap: 10,
    },

    containerConfigBloco: {
        width: '100%',
        padding: 20,
        paddingLeft: 70,
        paddingRight: 30,
        backgroundColor: 'white',
    },

    containerInfosBloco: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },


    // Textos
    TitlePrincipal: {
        fontFamily: 'Poppins_700Bold',
        fontSize: 17,
    },

    text: {
        fontFamily: 'Poppins_500Medium',
        fontSize: 15,
    },


    // Imagens
    icon: {
        marginTop: 5,
    },
});