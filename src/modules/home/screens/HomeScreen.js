import React from "react";
import { ScrollView } from "react-native";
import Header from "../../../utils/header/components/organisms/Header";
import StatusBar from "../../../utils/header/components/atoms/StatusBar";
import { colors } from '../../../styles/generalStyles'

export default function HomeScreen(props) {

  return (
    <>
      <StatusBar backgroundColor={colors.bgDark} barStyle='light-content' />

      <Header />

      <ScrollView>

      </ScrollView>
    </>
  );
}

