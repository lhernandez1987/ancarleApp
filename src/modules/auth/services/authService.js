import firebase from "firebase";
import alertValidation from "../../../utils/validators/alertValidation";
import { properties } from "../../../utils/constants/properties";

export const onAuthStateChanged = () => {
  return (dispatch) => {

    firebase.auth().onAuthStateChanged((user) => {

      if (user?.uid) {

        dispatch(login(user.uid, user.displayName));

      }

    });
  };
};

export const signOut = () => {

  return (dispatch) => {

    try {
      firebase
        .auth()
        .signOut()
        .then(() => console.log("User signed out!"));

      dispatch(logout());
      navigation.navigate(properties.type_home);

    } catch (error) {
      console.log(error);
    }
  };
};

export const signInWithEmailAndPassword = (email, password, navigation) => {
  return (dispatch) => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(({ user }) => {

        dispatch(login(user.uid, user.displayName));
        navigation.navigate(properties.type_home);

      })
      .catch((error) => {
        alertValidation(error.code);
      });
  };
};

export const createUserWithEmailAndPassword = (
  { displayName, email, password },
  navigation
) => {
  return (dispatch) => {
    firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then(async ({ user }) => {

      await user.updateProfile({ displayName: displayName });

      dispatch(login(user.uid, user.displayName))

      navigation.navigate(properties.type_home);

    })
    .catch((error) => {

      alertValidation(error.code);

    });
  }
};

export const login = (uid, displayName) => ({
  type: properties.type_login,
  payload: {
    uid,
    displayName,
  },
});

export const logout = () => ({
  type: properties.type_logout,
});
