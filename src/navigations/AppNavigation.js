import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import AwesomeIcon from 'react-native-vector-icons/FontAwesome5'
import { StyleSheet } from 'react-native';
//import HomeScreen from '../modules/home/screens/HomeScreen';
import AuthNavigator from './AuthNavigator';
import CartScreen from '../modules/cart/screen/CartScreen';
import FavoriteScreen from '../modules/favorites/screens/FavoriteScreen';
import AccountScreen from '../modules/account/screens/AccountScreen';
import colors from '../styles/colors';

const Tab = createMaterialBottomTabNavigator();

export default function AppNavigation() {
    return (

        <NavigationContainer>
            <Tab.Navigator barStyle={styles.navigation} screenOptions={({ route }) => ({

                tabBarIcon: (routerStatus) => {

                    return setIcon(route, routerStatus)

                }

            })}>
                <Tab.Screen name={'home'} component={AuthNavigator} options={{ title: 'Inicio' }} />
                <Tab.Screen name={'favorites'} component={FavoriteScreen} options={{ title: 'Favoritos' }} />
                <Tab.Screen name={'account'} component={AccountScreen} options={{ title: 'Mi cuenta' }} />
                <Tab.Screen name={'cart'} component={CartScreen} options={{ title: 'Carrito' }} />
            </Tab.Navigator>

        </NavigationContainer>

    )
}

const setIcon = (route, routerStatus) => {

    let iconName = '';

    switch (route.name) {
        case 'home':
            iconName = 'home'
            break;
        case 'favorites':
            iconName = 'heart'
            break;
        case 'cart':
            iconName = 'shopping-cart'
            break;
        case 'account':
            iconName = 'bars'
            break;
        default:
            break;
    }
    return <AwesomeIcon name={iconName} style={styles.icon} />
}

const styles = StyleSheet.create({
    navigation: {
        backgroundColor: colors.bgDark,

    },
    icon: {
        fontSize: 20,
        color: colors.fontLight,
    }
});