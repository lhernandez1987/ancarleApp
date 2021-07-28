import React from 'react';
import { StyleSheet } from 'react-native';
import { Provider } from 'react-redux';
import { store } from './src/store/store';
import AppNavigation from './src/navigations/AppNavigation';

//Firebase Conextion
import firebase from 'firebase/app';
import { firebaseConfig } from './src/dataBase/firebaseConfig'

firebase.initializeApp(firebaseConfig);

export default function App() {

  return (

    <Provider store={store}>

    <AppNavigation />

    </Provider>

  );

}

const styles = StyleSheet.create({});
