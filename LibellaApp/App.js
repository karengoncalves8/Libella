import 'react-native-gesture-handler';
import React from 'react';
import { Text, View, StyleSheet, SafeAreaView } from 'react-native';


// Navigation
import { NavigationContainer } from '@react-navigation/native';
import AuthNavigator from './components/navigation/AuthNavigator';



export default function App() {
  return (
      <NavigationContainer>
        <AuthNavigator/>
      </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
// exp//:192.168.15.3:19000
