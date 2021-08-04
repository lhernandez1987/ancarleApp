import React from "react";
import { View, Text } from "react-native";
import { useSelector } from "react-redux";
import { properties } from "../../../../utils/constants/properties";
import { UserInformationStyles } from "../../../../styles/generalStyles";

export default function UserInformationAtom() {
    
  const { name, email } = useSelector((state) => state.auth);

  let titleName = null;

  if (null != name) {
    titleName = name;
  } else if (null != email) {
    titleName = email;
  }

  return (
    <View style={UserInformationStyles.container}>
      <Text style={UserInformationStyles.title}>
        {properties.label_Welcome}
      </Text>
      <Text style={UserInformationStyles.titleName}>{titleName}</Text>
    </View>
  );
}
