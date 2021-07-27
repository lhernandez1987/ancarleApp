import React, { useState, useEffect } from "react";
import { View } from "react-native";
import { Button } from "react-native-paper";
import { useDispatch } from "react-redux";
import firebase from "firebase";
import { properties } from "../../../../utils/constants/properties";
import { login, signOut } from "../../services/authService";
import { formStyle } from "../../../../styles";

export default function LoginButtons(props) {

  const { navigation } = props;
  const dispatch = useDispatch();
  const [isloggedIn, setIsloggedIn] = useState(false);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user?.uid) {

        dispatch(login(user.uid, user.displayName));
        setIsloggedIn(true);

      } else {

        setIsloggedIn(false);

      }
    });
  }, []);

  const handleSignOut = () => {
    dispatch(signOut());
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
