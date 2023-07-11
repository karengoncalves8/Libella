import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image} from "react-native";

export default function WelcomePage() {
    return (
        <View style={styles.container}>
            <View style={styles.mainContainer}>
                <View style={styles.pacienteContainer}>
                    <Image
                        style={styles.userImg}
                        source={require('../assets/userIconTeste.png')}
                    />
                    <Text style={styles.text}>Paciente 1</Text>
                    <Image
                        style={styles.iconImg}
                        source={require('../assets/iconMenor.png')}
                    />
                </View>
                <View style={styles.pacienteContainer}>
                    <Image
                        style={styles.userImg}
                        source={require('../assets/userIconTeste.png')}
                    />
                    <Text style={styles.text}>Paciente 2</Text>
                    <Image
                        style={styles.iconImg}
                        source={require('../assets/iconMenor.png')}
                    />
                </View>
                <View style={styles.pacienteContainer}>
                    <Image
                        style={styles.userImg}
                        source={require('../assets/userIconTeste.png')}
                    />
                    <Text style={styles.text}>Paciente 3</Text>
                    <Image
                        style={styles.iconImg}
                        source={require('../assets/iconMenor.png')}
                    />
                </View>
                <View style={styles.pacienteContainer}>
                    <Image
                        style={styles.userImg}
                        source={require('../assets/userIconTeste.png')}
                    />
                    <Text style={styles.text}>Paciente 4</Text>
                    <Image
                        style={styles.iconImg}
                        source={require('../assets/iconMenor.png')}
                    />
                </View>
                <View style={styles.pacienteContainer}>
                    <Image
                        style={styles.userImg}
                        source={require('../assets/userIconTeste.png')}
                    />
                    <Text style={styles.text}>Paciente 5</Text>
                    <Image
                        style={styles.iconImg}
                        source={require('../assets/iconMenor.png')}
                    />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        padding: 20,
        backgroundColor: '#F2F2F2',
        color: 'white',
    },

    mainContainer: {
        width: '100%',
        height: '90%',
        top: 40,
        alignItems: 'center',
        justifyContent: 'center',
        gap: 30,
    },

    pacienteContainer: {
        flex: 2,
        width: '100%',
        height: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        gap: 60,
        backgroundColor: 'white',
        borderRadius: 7,
        padding: 15,
    },

    userImg: {
        width: 80,
        height: 80,
        borderRadius: 100,
    },

    iconImg: {
        width: 16,
        height: 16,
    },
});