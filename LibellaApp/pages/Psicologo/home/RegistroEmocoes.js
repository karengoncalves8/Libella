import { StyleSheet, Text, View, Image, ScrollView } from "react-native";

const RegistroEmocoesScreen = ({ navigation }) => {
    return (
            <View style={styles.container}>
                <View style={styles.exibitionContainer}>
                    <Text style={styles.textExibition}>Este mês</Text>
                </View>
                <View style={styles.pacienteContainer}>
                    <View style={styles.iconContainer}>
                        <Image
                            style={styles.userImg}
                            source={require('../../../assets/icons/IconFeliz.png')} /*Esse icon vai mudar de acordo com o Banco de dados*/
                        />
                    </View>
                    <View style={styles.containerText}>
                        <Text style={styles.text}>Estou feliz com a vitória do Praia Clube</Text> {/*Esse texto vai mudar de acordo com o Banco de dados*/}
                    </View>

                    <View style={styles.containerData}>
                        <Text style={styles.textData}>data</Text> {/*Esse número vai mudar de acordo com o Banco de dados*/}
                    </View>
                </View>
                {/* Só replicar o mesmo "pacienteContainer" para mais emoções Com ScrollView fica bugado com poucos elementos (Ent deixei sem por enquanto)*/}
            </View>
    );
}

export default RegistroEmocoesScreen;

const styles = StyleSheet.create({

    //Containers
    container: {
        flex: 1,
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'flex-start',
        padding: 20,
        backgroundColor: '#F2F2F2',
        color: 'white',
        top: 20,
        gap: 20,
    },

    exibitionContainer: {
        width: '100%',
        height: 40,
        top: 20,
        marginBottom: 10,
        justifyContent: 'center',
        alignItems: 'flex-start',
    },

    iconContainer: {
        flex: 1,
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },

    containerData: {
        flex: 1,
        height: '100%',
        justifyContent: 'flex-start',
        alignItems: 'flex-end',
    },

    containerText: {
        flex: 4,
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },

    pacienteContainer: {
        width: '100%',
        height: 80,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        gap: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        paddingLeft: 25,
        paddingRight: 25,
        padding: 10,
    },




    // Textos
    textData: {
        color: '#31313140',
        fontFamily: 'Poppins',
    },

    text: {
        color: '#313131',
        fontFamily: 'Poppins',
    },

    userImg: {
        width: 35,
        height: 35,
    },

    textExibition: {
        color: '#6D45C2',
        fontSize: 18,
        fontFamily: 'Poppins',
    },
});