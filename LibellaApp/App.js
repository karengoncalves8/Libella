import 'react-native-gesture-handler';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import React, { useEffect } from 'react';
import { Text, View, StyleSheet, SafeAreaView } from 'react-native';


// Navigation
import { NavigationContainer } from '@react-navigation/native';
import { AuthContext } from './components/navigation/AuthContext';
import RootStackScreen from './components/navigation/RootStack';
import AtividadePac from './pages/home/AtividadePac';
import InicioPac from './pages/home/DrawerPages/InicioPac';
import AlterarDadosPac from './pages/home/AlterarDadosPac';

// Importar fonts
import { Poppins_300Light, Poppins_500Medium, Poppins_700Bold } from '@expo-google-fonts/poppins';
import { Comfortaa_500Medium, Comfortaa_700Bold } from '@expo-google-fonts/comfortaa';
import { Ajuda, Config, Notificacoes, Termos } from './pages';

export default function App() {
  const [userToken, setUserToken] = React.useState(null)

  const authContext = React.useMemo(() => {
    return {
      Logged: () => {
        setUserToken("abc");
      },
      NotLogged: () => {
        setUserToken(null);
      },
    };
  }, []);

  const [fontsLoaded] = useFonts({
    Poppins_300Light,
    Poppins_500Medium,
    Poppins_700Bold,
    Comfortaa_500Medium,
    Comfortaa_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }


  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        <RootStackScreen userToken={userToken} />
      </NavigationContainer>
    </AuthContext.Provider>

  );
}

/* <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        <RootStackScreen userToken={userToken} />
      </NavigationContainer>
    </AuthContext.Provider> */

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

});
// exp//:192.168.15.3:19000
