import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AuthScreen from './src/screens/AuthScreen';
import HomeScreen from './src/screens/HomeScreen';
import RegisterAuthScreen from './src/screens/RegisterAuthScreen';

const Stack = createStackNavigator();


export default function App() {

  /*const [auth, setAuth] = useState(undefined);
  <PaperProvider>
      { auth ? <Home /> : <Auth /> }
    </PaperProvider>*/

  

  return (

    <NavigationContainer>

      <Stack.Navigator> 

        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Home' }} />
        <Stack.Screen name="Login" component={AuthScreen} />
        <Stack.Screen name="Registro" component={RegisterAuthScreen} />
        
      </Stack.Navigator>

    </NavigationContainer>

    

  );

}

const styles = StyleSheet.create({});
