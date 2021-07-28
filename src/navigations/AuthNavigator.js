import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AuthScreen from '../modules/auth/screens/AuthScreen';
import HomeScreen from '../modules/home/screens/HomeScreen';
import RegisterAuthScreen from '../modules/auth/screens/RegisterAuthScreen';

const Stack = createStackNavigator();

export default function AuthNavigator() {
    
    return (
        
      <Stack.Navigator>

        <Stack.Screen name="home" component={HomeScreen} options={{ title: 'Inicio', headerShown: false }} />
        <Stack.Screen name="login" component={AuthScreen} options={{ title: 'Inicio sesíon' }} />
        <Stack.Screen name="registro" component={RegisterAuthScreen} options={{ title: 'Registro' }} />

      </Stack.Navigator>

    )
}
