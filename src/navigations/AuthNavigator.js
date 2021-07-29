import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import AuthScreen from "../modules/auth/screens/AuthScreen";
import AccountScreen from "../modules/account/screens/AccountScreen";
import RegisterAuthScreen from "../modules/auth/screens/RegisterAuthScreen";
import { properties } from "../utils/constants/properties";

const Stack = createStackNavigator();

export default function AuthNavigator() {
  return (
    <Stack.Navigator>
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
    </Stack.Navigator>
  );
}
