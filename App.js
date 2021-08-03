import React from "react";
import { Provider } from "react-redux";
import { store } from "./src/store/store";
import AppNavigation from "./src/navigations/AppNavigation";

//Firebase Conextion
import firebase from "firebase";
import { firebaseConfig } from "./src/dataBase/firebaseConfig";

firebase.initializeApp(firebaseConfig);

export default function App() {

  return (
    <Provider store={store}>

      <AppNavigation />
    </Provider>
  );
}
