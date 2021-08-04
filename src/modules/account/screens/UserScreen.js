import React from "react";
import { View, Image, KeyboardAvoidingView } from "react-native";
import logo from "../../../../assets/logo-web.png";
import UserInfoForm from "../components/forms/UserInfoForm";
import { imageStyle, layoutStyle } from "../../../styles/generalStyles";

export default function UserScreen() {
  return (
    <View style={layoutStyle.container}>
      <KeyboardAvoidingView>

      <Image style={imageStyle.auth} source={logo} />
      <UserInfoForm />

      </KeyboardAvoidingView>
      
    </View>
  );
}
