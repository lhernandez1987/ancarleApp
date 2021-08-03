import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { ScrollView } from "react-native";
import firebase from "firebase";
import { login } from "../../auth/services/authService";
import StatusBar from "../../../utils/header/components/atoms/StatusBar";
import Header from "../../../utils/header/components/organisms/Header";
import { colorStyle } from "../../../styles/generalStyles";

export default function HomeScreen() {
  const dispatch = useDispatch();
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user?.uid) {
        dispatch(login(user.uid, user.displayName, user.email));
      }
    });
  }, []);

  return (
    <>
      <ScrollView>
        <StatusBar
          backgroundColor={colorStyle.bgDark}
          barStyle="light-content"
        />
        <Header />
      </ScrollView>
    </>
  );
}
