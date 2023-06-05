import Login from "./pages/Login";
import React from 'react';
import { useFonts } from 'expo-font';
import { Text, View, StyleSheet, SafeAreaView } from 'react-native';
import * as SplashScreen from 'expo-splash-screen'; /* precisa instalar */
import { useCallback } from 'react';

SplashScreen.preventAutoHideAsync();


export default function App() {
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
      <Login/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
// exp//:192.168.15.3:19000
