import React, { useState, useEffect } from "react";
import { View } from "react-native";
import { Button } from "react-native-paper";
import { properties } from "../../../../utils/constants/properties";
import { onAuthStateChanged, signOut } from "../../services/authService";
import { formStyle } from "../../../../styles";

export default function LoginButtons(props) {

  const { navigation } = props;

  const [isloggedIn, setIsloggedIn] = useState(false);

  useEffect(() => {

    onAuthStateChanged(setIsloggedIn);

  }, [onAuthStateChanged]);

  const handleSignOut = () => {

    signOut(setIsloggedIn);

  };

  return (
    <View>
      {!isloggedIn ? (
        <Button
          mode="contained"
          style={formStyle.btnSuccess}
          onPress={() => navigation.navigate("Login")}
        >
          {properties.home_identify_yourself}
        </Button>
      ) : (
        <Button
          mode="contained"
          style={formStyle.btnPrimary}
          onPress={() => handleSignOut()}
        >
          {properties.button_logout}
        </Button>
      )}
    </View>
  );
}
