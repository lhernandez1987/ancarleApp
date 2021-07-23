import firebase from "firebase";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const onAuthStateChanged = (setIsloggedIn) => {

  firebase.auth().onAuthStateChanged((user) => {

    if (user?.uid) {

      setIsloggedIn(true);

      console.log("UID: " + user.uid);

    } else {

      setIsloggedIn(false);
    }

  });

  return setIsloggedIn;
};

const saveLogin = async (isloggedIn) => {
  await AsyncStorage.setItem("isloggedIn", JSON.stringify(isloggedIn));
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

        console.log("Valido");

        navigation.navigate("Home");

      })
      .catch((error) => {

        console.log("error : " + error.code);
        console.log("error : " + error.message);

      });
  };
