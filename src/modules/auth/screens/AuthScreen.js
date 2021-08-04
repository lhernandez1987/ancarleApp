import React from "react";
import { View, Image, KeyboardAvoidingView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import logo from "../../../../assets/logo-web.png";
import LoginForm from "../components/forms/LoginForm";
import { imageStyle, layoutStyle } from "../../../styles/generalStyles";

export default function AuthScreen() {

  const navigation = useNavigation();

  return (
    <View style={layoutStyle.container}>
      <KeyboardAvoidingView>
        <Image style={imageStyle.auth} source={logo} />
        <LoginForm />
      </KeyboardAvoidingView>
    </View>
  );
}
