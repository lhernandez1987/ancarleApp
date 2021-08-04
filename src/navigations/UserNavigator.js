import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import AuthScreen from "../modules/auth/screens/AuthScreen";
import AccountScreen from "../modules/account/screens/AccountScreen";
import RegisterAuthScreen from "../modules/auth/screens/RegisterAuthScreen";
import UserScreen from "../modules/account/screens/UserScreen";
import { properties } from "../utils/constants/properties";
import { colorStyle } from "../styles/generalStyles";

const Stack = createStackNavigator();

export default function AuthNavigator() {
  return (
    <Stack.Navigator screenOptions={{
      headerTintColor: colorStyle.fontLight,
      headerStyle: {backgroundColor: colorStyle.bgDark},
      cardStyle: {backgroundColor: colorStyle.fontLight}
    }}>
      <Stack.Screen
        name={properties.type_account}
        component={AccountScreen}
        options={{ title: `${properties.label_start}`, headerShown: false }}
      />
      <Stack.Screen
        name={properties.type_login}
        component={AuthScreen}
        options={{ title: `${properties.label_login_enter}` }}
      />
      <Stack.Screen
        name={properties.type_register}
        component={RegisterAuthScreen}
        options={{ title: `${properties.label_register}` }}
      />
        <Stack.Screen
        name={properties.type_user}
        component={UserScreen}
        options={{ title: `${properties.label_edit_user}` }}
      />
    </Stack.Navigator>
  );
}
