import React, { useEffect, useState } from "react";
import { StyleSheet, View, Image, KeyboardAvoidingView } from "react-native";
import { Title } from "react-native-paper";
import logo from "../../../../assets/logo-web.png";
import LoginButtons from "../../auth/components/organisms/LoginButtons";
import { properties } from "../../../utils/constants/properties";
import { onAuthStateChanged, signOut } from "../../auth/services/authService";
import { formStyle, layoutStyle } from "../../../styles";

export default function HomeScreen({ navigation }) {

  return (
    <View style={layoutStyle.container}>

      <Image style={styles.logo} source={logo} />

      <Title style={formStyle.btnTitle}>{properties.home_title}</Title>

      <KeyboardAvoidingView>

        <LoginButtons navigation={navigation} />

      </KeyboardAvoidingView>

    </View>
  );
}

const styles = StyleSheet.create({
  logo: {
    width: "100%",
    height: 100,
    resizeMode: "contain",
  },
});
