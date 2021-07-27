import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AuthScreen from '../modules/auth/screens/AuthScreen';
import HomeScreen from '../modules/home/screens/HomeScreen';
import RegisterAuthScreen from '../modules/auth/screens/RegisterAuthScreen';

const Stack = createStackNavigator();

export default function StackNavigator() {
    
    return (
        <NavigationContainer>

      <Stack.Navigator>

        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Home' }} />
        <Stack.Screen name="Login" component={AuthScreen} />
        <Stack.Screen name="Registro login" component={RegisterAuthScreen} />

      </Stack.Navigator>

    </NavigationContainer>
    )
}
