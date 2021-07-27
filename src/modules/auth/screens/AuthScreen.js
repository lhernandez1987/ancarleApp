import React from "react";
import { StyleSheet, View, Image, KeyboardAvoidingView } from "react-native";
import logo from '../../../../assets/logo-web.png';
import LoginForm from "../components/forms/LoginForm";
import { layoutStyle } from "../../../styles";

export default function AuthScreen({ navigation }) {

  return (
    <View style={layoutStyle.container}>

      <Image style={styles.logo} source={logo} />

      <KeyboardAvoidingView>

        <LoginForm navigation={navigation} />

      </KeyboardAvoidingView>

    </View>
  );
}

const styles = StyleSheet.create({
  logo: {
    width: "100%",
    height: 100,
    resizeMode: "contain",
    marginTop: 30,
  },
});
