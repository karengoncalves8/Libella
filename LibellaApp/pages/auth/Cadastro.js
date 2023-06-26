import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput, ScrollView, Hr } from "react-native";

const CadastroPage = ({navigation}) => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Image
          style={styles.img}
          source={require('../../assets/img/Logo-roxa.png')}
        />
        <Text style={styles.title}>Cadastro</Text>

        <TextInput
          style={styles.Input}
          placeholder="Nome Completo"
          placeholderTextColor="#FFFFFF"
        />

        <TextInput
          style={styles.Input}
          placeholder="Telefone"
          placeholderTextColor="#FFFFFF"
        />

        <TextInput
          style={styles.Input}
          placeholder="RG"
          placeholderTextColor="#FFFFFF"
        />
        <TextInput
          style={styles.Input}
          placeholder="CPF"
          placeholderTextColor="#FFFFFF"
        />

        <TextInput
          style={styles.Input}
          placeholder="Endereço"
          placeholderTextColor="#FFFFFF"
        />

        <TextInput
          style={styles.Input}
          placeholder="Email"
          placeholderTextColor="#FFFFFF"
        />

        <TextInput
          style={styles.Input}
          placeholder="Senha"
          placeholderTextColor="#FFFFFF"
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

export default CadastroPage;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 24,
    backgroundColor: '#53A7D7',
    color: 'white',
  },

  img: {
    height: 150,
    width: 150,
    resizeMode: 'contain',
    marginTop:20
  },

  title: {
    color: 'white',
    fontSize: 32,
    marginBottom: 50,
  },

  button: {
    alignItems: 'center',
    backgroundColor: '#6D45C2',
    padding: 10,
    width: '100%',
    marginBottom: 0,
    borderRadius: 30,
    fontWeight: 'bold',
  },

  Input: {
    color: 'black',
    fontSize: 22,
    backgroundColor: '#53A7D7',
    padding: 10,
    marginBottom: 30,
    textAlign: 'left',
    borderRadius: 0,
    width: '100%',
    borderBottomColor: 'white',
    borderBottomWidth: 1
  },
});