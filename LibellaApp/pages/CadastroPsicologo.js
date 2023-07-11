import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput, ScrollView, Hr } from "react-native";

export default function WelcomePage() {
  return (
    <ScrollView>
      <View style={styles.container}>

        <Image
          style={styles.icons}
          source={require('../assets/Icons/User.png')}
        />

        <TextInput
          style={styles.Input}
          placeholder="Nome Completo"
          placeholderTextColor="#ffffff"
        />

        <Image
          style={styles.icons}
          source={require('../assets/Icons/iconCall.png')}
        />

        <TextInput
          style={styles.Input}
          placeholder="Telefone"
          placeholderTextColor="#ffffff"
        />

        <Image
          style={styles.icons}
          source={require('../assets/Icons/Personalcard.png')}
        />

        <TextInput
          style={styles.Input}
          placeholder="CPF"
          placeholderTextColor="#ffffff"
        />

        <Image
          style={styles.icons}
          source={require('../assets/Icons/Personalcard.png')}
        />

        <TextInput
          style={styles.Input}
          placeholder="CRP"
          placeholderTextColor="#ffffff"
        />

        <Image
          style={styles.icons}
          source={require('../assets/Icons/Personalcard.png')}
        />

        <TextInput
          style={styles.Input}
          placeholder="RG"
          placeholderTextColor="#ffffff"
        />

        <Image
          style={styles.icons}
          source={require('../assets/Icons/Esc.png')}
        />

        <TextInput
          style={styles.Input}
          placeholder="Escolaridade"
          placeholderTextColor="#ffffff"
        />

        <Image
          style={styles.icons}
          source={require('../assets/Icons/iconOc.png')}
        />

        <TextInput
          style={styles.Input}
          placeholder="Ocupação"
          placeholderTextColor="#ffffff"
        />

        <Image
          style={styles.icons}
          source={require('../assets/Icons/iconLocation.png')}
        />

        <TextInput
          style={styles.Input}
          placeholder="Endereço"
          placeholderTextColor="#ffffff"
        />

      <Image
          style={styles.icons}
          source={require('../assets/Icons/IconEmail.png')}
        />

        <TextInput
          style={styles.Input}
          placeholder="Email"
          placeholderTextColor="#ffffff"
        />

      <Image
          style={styles.icons}
          source={require('../assets/Icons/IconSenha.png')}
        />
      
      <Image
          style={styles.icon}
          source={require('\../assets/Icons/iconEye.png')}
        />

        <TextInput
          style={styles.Input}
          placeholder="Senha"
          placeholderTextColor="#ffffff"
        />

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Home')}>
          <Text style={{ color: 'white', fontSize: 25 }}>CADASTRAR</Text>
        </TouchableOpacity>

      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 24,
    backgroundColor: '#53A7D7',
    color: 'red',
  },

  icons: {
    height:23,
    width: 22,
    marginRight: 335,
    top: 39,
    resizeMode: 'contain',
  },

  icon: {
    height:17,
    width: 22,
    top: 35,
    left: 140,
  },

  button: {
    alignItems: 'center',
    backgroundColor: '#6D45C2',
    padding: 10,
    width: '100%',
    marginBottom: 0,
    gap: 10,
    borderRadius: 30,
    fontWeight: 'bold',
    fontFamily: 'Poppins',
  },

  Input: {
    fontSize: 22,
    fontFamily: 'Poppins',
    color: "#6D45C2",
    padding: 10,
    marginBottom: 30,
    marginLeft: 30,
    textAlign: 'left',
    borderRadius: 0,
    width: '90%',
    borderBottomColor: '#ffffff',
    borderBottomWidth: 1, 
  },
});