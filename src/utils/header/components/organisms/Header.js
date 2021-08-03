import React from "react";
import { useSelector } from "react-redux";
import { View, Image } from "react-native";
import { Searchbar, Title } from "react-native-paper";
import { useFonts } from "expo-font";
import { properties } from "../../../constants/properties";
import logo from "../../../../../assets/logo-web.png";
import { headerStyle, imageStyle, colorStyle } from "../../../../styles/generalStyles";

export default function Header() {
  
  const { name } = useSelector((state) => state.auth);

  null != name ? name : properties.label_Welcome;

  const [loaded] = useFonts({
    robotoMedium: require("../../../../../assets/fonts/Roboto-Medium.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <View style={headerStyle.container}>
      <Searchbar
        placeholder={properties.label_find_product}
        style={{ borderRadius: 10 }}
      />
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Image style={imageStyle.logo} source={logo} />
        <Title
          style={{
            fontSize: 23,
            paddingTop: 15,
            color: `${colorStyle.fontLight}`,
            fontFamily: "robotoMedium",
            marginBottom: -18,
          }}
        >
          {(null != name ? name : 'Bienvenido')}
        </Title>
      </View>
    </View>
  );
}
