import React from "react";
import { StyleSheet, ScrollView, Image } from "react-native";
import { Title } from "react-native-paper";
import logo from "../../../../assets/logo-web.png";
import LoginButtons from "../../auth/components/organisms/LoginButtons";
import { properties } from "../../../utils/constants/properties";
import Search from "../../../utils/search/components/organisms/Search";
import StatusBar from "../../../utils/search/components/organisms/StatusBar";
import colors from "../../../styles/colors";
import { formStyle, layoutStyle } from "../../../styles";

//<LoginButtons navigation={navigation} />

export default function HomeScreen({ navigation }) {

  return (
    <>

     <StatusBar backgroundColor={colors.bgDark} barStyle='light-content'/>
      <Search />

      <ScrollView>

      <Image style={styles.logo} source={logo} />

      

      </ScrollView>

    </>
  );
}

const styles = StyleSheet.create({
  logo: {
    width: "50%",
    height: 70,
    resizeMode: "contain",
    marginTop: -20,
  }
});
