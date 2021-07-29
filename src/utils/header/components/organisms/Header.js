import React from "react";
import { useSelector } from "react-redux";
import { View, Image } from "react-native";
import { Searchbar, Title } from "react-native-paper";
import { useFonts } from "expo-font";
import { properties } from "../../../constants/properties";
import logo from "../../../../../assets/logo-web.png";
import { finderSpace, images, colors } from "../../../../styles/generalStyles";

export default function Header() {
  const { name } = useSelector((state) => state.auth);

  null != name ? name : 'Bienvenido';

  const [loaded] = useFonts({
    robotoMedium: require("../../../../../assets/fonts/Roboto-Medium.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <View style={finderSpace.container}>
      <Searchbar
        placeholder={properties.label_find_product}
        style={{ borderRadius: 10 }}
      />
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Image style={images.logo} source={logo} />
        <Title
          style={{
            fontSize: 23,
            paddingTop: 15,
            color: `${colors.fontLight}`,
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
