import React, { createContext, useState, useEffect }from "react";
import{ AsyncStorage } from "react-native";
import { useNavigation } from "@react-navigation/native";

export const AuthContext = createContext({});

function AuthProvider({children}){
    const [choice, setChoice] = useState(null);

{/*
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
  })
*/}
    

    const navigation = useNavigation();

    function select(choice){
        setChoice(choice)

        if (choice === 'Psicologo') {
          navigation.navigate('AuthPS')
        }
        if (choice === 'Paciente') {
          navigation.navigate('AuthPC')
        }
        
    }

    return(
        <AuthContext.Provider value={{choice, select}}>
            {children}
        </AuthContext.Provider>
    )

}

export default AuthProvider;

/*const authContext = React.useMemo(() => {
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
  }, []);*/