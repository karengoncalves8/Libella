import 'react-native-gesture-handler';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import React, { useEffect } from 'react';
import { Text, View, StyleSheet, SafeAreaView } from 'react-native';


// Navigation
import { NavigationContainer } from '@react-navigation/native';
import AuthNavigator from './components/navigation/AuthNavigator';

// Importar fonts
import { Poppins_300Light, Poppins_400Regular, Poppins_500Medium, Poppins_700Bold } from '@expo-google-fonts/poppins';
import { Comfortaa_500Medium, Comfortaa_700Bold } from '@expo-google-fonts/comfortaa';

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_300Light,
    Poppins_500Medium,
    Poppins_700Bold,
    Comfortaa_500Medium,
    Comfortaa_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading/>;
  }


  return (
    <NavigationContainer>
      <AuthNavigator />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

});
// exp//:192.168.15.3:19000
