import React from "react";
import { View, ScrollView, Image } from "react-native";
import logo from "../../../../assets/logo-web.png";
import LoginButtons from "../../auth/components/organisms/LoginButtons";
import { layoutStyle, images } from "../../../styles/generalStyles";

export default function AccountScreen(props) {

  const { navigation } = props;

  return (
    <View style={layoutStyle.container}>
      <ScrollView>
        <Image style={images.logo} source={logo} />

        <LoginButtons navigation={navigation} />
      </ScrollView>
    </View>
  );
}
