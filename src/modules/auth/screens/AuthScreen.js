import React from "react";
import { View, Image, KeyboardAvoidingView } from "react-native";
import logo from '../../../../assets/logo-web.png';
import LoginForm from "../components/forms/LoginForm";
import { images, layoutStyle } from "../../../styles/generalStyles";

export default function AuthScreen({ navigation }) {

  return (
    <View style={layoutStyle.container}>

      <Image style={images.logo} source={logo} />

      <KeyboardAvoidingView>

        <LoginForm navigation={navigation} />

      </KeyboardAvoidingView>

    </View>
  );
}
