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

export const signOut = (navigation) => {
  return (dispatch) => {
    try {
      firebase.auth().signOut().then();

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
        dispatch(login(user.uid, user.displayName, user.email));
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

        dispatch(login(user.uid, user.displayName));

        navigation.navigate(properties.type_home);
      })
      .catch((error) => {
        alertValidation(error.code);
      });
  };
};

export const login = (uid, displayName, email) => ({
  type: properties.type_login,
  payload: {
    uid,
    displayName,
    email,
  },
});

export const logout = () => ({
  type: properties.type_logout,
});

export const getUser = () => {

  return firebase.auth().currentUser;
  
};
