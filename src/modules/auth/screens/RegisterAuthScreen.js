import React from "react";
import { View, Image, KeyboardAvoidingView } from "react-native";
import RegisterAuthForm from "../components/forms/RegisterAuthForm";
import logo from "../../../../assets/logo-web.png";
import { layoutStyle, imageStyle } from "../../../styles/generalStyles";

export default function RegisterAuthScreen() {
  return (
    <View style={layoutStyle.container}>
      <Image style={imageStyle.auth} source={logo} />
      <KeyboardAvoidingView>
        <RegisterAuthForm />
      </KeyboardAvoidingView>
    </View>
  );
  z;
}
