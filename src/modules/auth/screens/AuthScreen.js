import React from "react";
import { View, Image, KeyboardAvoidingView } from "react-native";
import logo from "../../../../assets/logo-web.png";
import LoginForm from "../components/forms/LoginForm";
import { imageStyle, layoutStyle } from "../../../styles/generalStyles";

export default function AuthScreen({ navigation }) {
  return (
    <View style={layoutStyle.container}>
      <KeyboardAvoidingView>
        <Image style={imageStyle.auth} source={logo} />
        <LoginForm navigation={navigation} />
      </KeyboardAvoidingView>
    </View>
  );
}
