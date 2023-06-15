import Login from "./pages/Login";
import Inicio from "./pages/Inicio";
import React from 'react';
import { useFonts } from 'expo-font';
import { Text, View, StyleSheet, SafeAreaView } from 'react-native';
import * as SplashScreen from 'expo-splash-screen'; /* precisa instalar */
import { useCallback } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


SplashScreen.preventAutoHideAsync();

const Stack = createNativeStackNavigator();

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
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen
            name="Login" component={Login}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Inicio" component={Inicio}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
// exp//:192.168.15.3:19000
