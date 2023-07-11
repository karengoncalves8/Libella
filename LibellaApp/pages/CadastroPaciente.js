import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput, ScrollView, Hr } from "react-native";

export default function WelcomePage() {
  return (
    <ScrollView>
      <View style={styles.container}>

        <Image
          style={styles.icons}
          source={require('../assets/Icons/IconUser.png')}
        />

        <TextInput
          style={styles.Input}
          placeholder="Nome Completo"
          placeholderTextColor="#313131"
        />

        <Image
          style={styles.icons}
          source={require('../assets/Icons/call.png')}
        />

        <TextInput
          style={styles.Input}
          placeholder="Telefone"
          placeholderTextColor="#313131"
        />

        <Image
          style={styles.icons}
          source={require('../assets/Icons/card.png')}
        />

        <TextInput
          style={styles.Input}
          placeholder="CPF"
          placeholderTextColor="#313131"
        />

        <Image
          style={styles.icons}
          source={require('../assets/Icons/card.png')}
        />

        <TextInput
          style={styles.Input}
          placeholder="RG"
          placeholderTextColor="#313131"
        />

        <Image
          style={styles.icons}
          source={require('../assets/Icons/iconEsc.png')}
        />

        <TextInput
          style={styles.Input}
          placeholder="Escolaridade"
          placeholderTextColor="#313131"
        />

        <Image
          style={styles.icons}
          source={require('../assets/Icons/iconOcup.png')}
        />

        <TextInput
          style={styles.Input}
          placeholder="Ocupação"
          placeholderTextColor="#313131"
        />

      <Image
          style={styles.icons}
          source={require('../assets/Icons/iconSintomas.png')}
        />

        <TextInput
          style={styles.Input}
          placeholder="Sintomas"
          placeholderTextColor="#313131"
        />

        <Image
          style={styles.icons}
          source={require('../assets/Icons/loc.png')}
        />

        <TextInput
          style={styles.Input}
          placeholder="Endereço"
          placeholderTextColor="#313131"
        />

      <Image
          style={styles.icons}
          source={require('../assets/Icons/Icons.png')}
        />

        <TextInput
          style={styles.Input}
          placeholder="Email"
          placeholderTextColor="#313131"
        />

      <Image
          style={styles.icons}
          source={require('../assets/Icons/senha.png')}
        />
      
      <Image
          style={styles.icon}
          source={require('\../assets/Icons/olho.png')}
        />

        <TextInput
          style={styles.Input}
          placeholder="Senha"
          placeholderTextColor="#313131"
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
    backgroundColor: 'white',
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
    borderBottomColor: '#313131',
    borderBottomWidth: 1, 
  },
});