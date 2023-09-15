import 'react-native-gesture-handler';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, SafeAreaView, AsyncStorage } from 'react-native';


// Navigation
import { NavigationContainer } from '@react-navigation/native';
import { AuthContext } from './components/navigation/Stack/AuthContext';
import { SelectContext } from './components/navigation/Stack/SelectContext';
import RootStackScreen from './components/navigation/Stack/RootStack';

// Importar fonts
import { Poppins_300Light, Poppins_500Medium, Poppins_700Bold, Poppins_400Regular } from '@expo-google-fonts/poppins';
import { Comfortaa_500Medium, Comfortaa_700Bold } from '@expo-google-fonts/comfortaa';

export default function App() {
  const [userToken, setUserToken] = React.useState(null)
  const [choice, setChoice] = React.useState(null)

  /*
  const [isFirstLaunch, setIsFirstLaunch] = useState(false)

  useEffect(() => {
    AsyncStorage.getItem("alredyLaunched").then((value) => {
      if (value === null){
        AsyncStorage.setItem("alredyLaunched", "true");
        setIsFirstLaunch(true);
      }
      else{
        setIsFirstLaunch(false);
      }
    })
  })*/
  const authContext = React.useMemo(() => {
    return {
      Logged: () => {
        setUserToken("abc");
      },
      NotLogged: () => {
        setUserToken(null);
      },
      select: (value) => {
        setChoice(value)
      },
    };
  }, []);
  
  const [fontsLoaded] = useFonts({
    Poppins_300Light,
    Poppins_500Medium,
    Poppins_700Bold,
    Poppins_400Regular,
    Comfortaa_500Medium,
    Comfortaa_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }


  return (

      <AuthContext.Provider value={authContext}>
        <NavigationContainer>
          <RootStackScreen userToken={userToken} choice={choice} />
        </NavigationContainer>
      </AuthContext.Provider>


  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

});
// exp//:192.168.15.3:19000
