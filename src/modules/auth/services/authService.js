import firebase from "firebase";
import AsyncStorage from "@react-native-async-storage/async-storage";
import alertValidation from "../../../utils/validators/alertValidation";

export const onAuthStateChanged = (setIsloggedIn) => {

  firebase.auth().onAuthStateChanged((user) => {

    user?.uid ? setIsloggedIn(true) : setIsloggedIn(false);

  });

  return setIsloggedIn;
};

export const signOut = (setIsloggedIn) => {

  try {

    firebase
      .auth()
      .signOut()
      .then(() => console.log("User signed out!"));

    setIsloggedIn(false);

  } catch (error) {

    console.log(error);

  }

  return setIsloggedIn;
};

export const signInWithEmailAndPassword = (email, password, navigation) => {
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((userCredential) => {

      navigation.navigate("Home");

    })
    .catch((error) => {

      alertValidation(error.code);
      
    });
};

const saveLogin = async (isloggedIn) => {
  await AsyncStorage.setItem("isloggedIn", JSON.stringify(isloggedIn));
};
