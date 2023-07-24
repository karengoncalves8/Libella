import 'react-native-gesture-handler';
import React from 'react';
import { Text, View, StyleSheet, SafeAreaView } from 'react-native';


// Navigation
import { NavigationContainer } from '@react-navigation/native';
import { AuthContext } from './components/navigation/AuthContext';
import RootStackScreen from './components/navigation/RootStack';

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

  return (
    <AuthContext.Provider value={authContext}>
    <NavigationContainer>
      <RootStackScreen userToken={userToken} />
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
