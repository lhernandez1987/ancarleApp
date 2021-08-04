import React from "react";
import { ScrollView } from "react-native";
import UserInformationAtom from "../components/atoms/UserInformationAtom";
import UserMenu from "../components/organisms/UserMenu";
import StatusBar from "../../../utils/header/components/atoms/StatusBar";
import Header from "../../../utils/header/components/organisms/Header";
import { colorStyle } from "../../../styles/generalStyles";

export default function AccountScreen() {

  return (
    <>
      <StatusBar backgroundColor={colorStyle.bgDark} barStyle="light-content" />
      <Header />
      <ScrollView>
        <UserInformationAtom />
        <UserMenu />
      </ScrollView>
    </>
  );
}
