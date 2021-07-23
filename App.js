import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AuthScreen from './src/modules/auth/screens/AuthScreen';
import HomeScreen from './src/modules/home/screens/HomeScreen';
import RegisterAuthScreen from './src/modules/auth/screens/RegisterAuthScreen';

//Firebase Conextion
import firebase from 'firebase/app';
import { firebaseConfig } from './src/dataBase/firebaseConfig'
firebase.initializeApp(firebaseConfig);

const Stack = createStackNavigator();

export default function App() {

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
