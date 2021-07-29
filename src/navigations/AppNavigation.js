import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import AwesomeIcon from "react-native-vector-icons/FontAwesome5";
import AuthNavigator from "./AuthNavigator";
import CartScreen from "../modules/cart/screen/CartScreen";
import FavoriteScreen from "../modules/favorites/screens/FavoriteScreen";
import HomeScreen from "../modules/home/screens/HomeScreen";
import { properties } from "../utils/constants/properties";
import { browserStylesTab } from "../styles/generalStyles";

const Tab = createMaterialBottomTabNavigator();

export default function AppNavigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        barStyle={browserStylesTab.navigation}
        screenOptions={({ route }) => ({
          tabBarIcon: () => {
            return setIcon(route);
          },
        })}
      >
        <Tab.Screen
          name={properties.type_home}
          component={HomeScreen}
          options={{ title: `${properties.label_start}` }}
        />
        <Tab.Screen
          name={properties.type_favorites}
          component={FavoriteScreen}
          options={{ title: `${properties.label_favorites}` }}
        />
        <Tab.Screen
          name={properties.type_cart}
          component={CartScreen}
          options={{ title: `${properties.label_cart}` }}
        />
        <Tab.Screen
          name={properties.type_account}
          component={AuthNavigator}
          options={{ title: `${properties.label_account}` }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const setIcon = (route) => {
  let iconName = "";

  switch (route.name) {
    case properties.type_home:
      iconName = "home";
      break;
    case properties.type_favorites:
      iconName = "heart";
      break;
    case properties.type_cart:
      iconName = "shopping-cart";
      break;
    case properties.type_account:
      iconName = "bars";
      break;
    default:
      break;
  }
  return <AwesomeIcon name={iconName} style={browserStylesTab.icon} />;
};
