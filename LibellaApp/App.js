import 'react-native-gesture-handler';
import React from 'react';
import { useFonts } from 'expo-font';
import { Text, View, StyleSheet, SafeAreaView } from 'react-native';
import * as SplashScreen from 'expo-splash-screen'; /* precisa instalar */
import { useCallback } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AuthStack from './components/navigation/AuthStack';
import AppStack from './components/navigation/AppStack';

SplashScreen.preventAutoHideAsync();


function App() {
  const [fontsLoaded] = useFonts({
    'ComfortaaBold': require('./assets/fonts/Comfortaa/Comfortaa-Bold.ttf'),
    'ComfortaaLight': require('./assets/fonts/Comfortaa/Comfortaa-Light.ttf'),
    'ComfortaaMedium': require('./assets/fonts/Comfortaa/Comfortaa-Medium.ttf'),
    'ComfortaaRegular': require('./assets/fonts/Comfortaa/Comfortaa-Regular.ttf'),
    'ComfortaaSemiBold': require('./assets/fonts/Comfortaa/Comfortaa-SemiBold.ttf'),
    'PoppinsBold': require('./assets/fonts/Poppins/Poppins-Bold.ttf'),
    'PoppinsRegular': require('./assets/fonts/Poppins/Poppins-Regular.ttf'),
    'PoppinsSemiBold': require('./assets/fonts/Poppins/Poppins-SemiBold.ttf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaView style={styles.container} onLayout={onLayoutRootView}>
      <NavigationContainer>
        <AppStack/>
      </NavigationContainer>
    </SafeAreaView>
  );
}

export default App;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
// exp//:192.168.15.3:19000
