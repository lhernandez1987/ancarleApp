import React from "react";
import { ScrollView } from "react-native";
import UserInformation from "../components/organisms/UserInformation";
import UserMenu from "../components/organisms/UserMenu";
import StatusBar from "../../../utils/header/components/atoms/StatusBar";
import Header from "../../../utils/header/components/organisms/Header";
import { colorStyle } from "../../../styles/generalStyles";

export default function AccountScreen(props) {
  const { navigation } = props;

  return (
    <>
      <StatusBar backgroundColor={colorStyle.bgDark} barStyle="light-content" />
      <Header />
      <ScrollView>
        <UserInformation />
        <UserMenu />
      </ScrollView>
    </>
  );
}
