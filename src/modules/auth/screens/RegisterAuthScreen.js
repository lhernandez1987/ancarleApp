import React from "react";
import { StyleSheet, View, Image } from "react-native";
import RegisterAuthForm from "../components/forms/RegisterAuthForm";
import logo from '../../../../assets/logo-web.png';
import { layoutStyle } from "../../../styles";

export default function RegisterAuthScreen({ navigation }) {
  return (
    <View style={layoutStyle.container}>

      <Image style={styles.logo} source={logo} />

      <RegisterAuthForm navigation={navigation} />

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
