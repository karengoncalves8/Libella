import "react-native-gesture-handler";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
} from "react-native";

// Navigation
import { NavigationContainer } from "@react-navigation/native";
import { AuthProvider } from "./components/navigation/Stack/AuthContext";

// Importar fonts
import {
  Poppins_300Light,
  Poppins_500Medium,
  Poppins_700Bold,
  Poppins_400Regular,
} from "@expo-google-fonts/poppins";
import {
  Comfortaa_500Medium,
  Comfortaa_700Bold,
} from "@expo-google-fonts/comfortaa";
import RootStack from "./components/navigation/Stack/RootStack";

export default function App() {

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
    <NavigationContainer>
      <AuthProvider>
          <RootStack />
      </AuthProvider>
    </NavigationContainer>
      
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
// exp//:192.168.15.3:19000