import React, { useState } from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { Button, Title } from "react-native-paper";
import logo from '../../assets/logo-web.png';
import { properties } from "../properties";
import { Auth } from './AuthScreen';
import { loginFormStyle, layoutStyle } from "../styles";

export default function HomeScreen({ navigation }) {

    return (
        <View style={layoutStyle.container}>

            <Image style={styles.logo} source={logo} />

            <Title style={loginFormStyle.btnTitle}>{properties.home_title}</Title>

            <Button mode="contained"
                style={loginFormStyle.btnSuccess}
                onPress={ () => navigation.navigate('Login') } 
            >
                {properties.home_identify_yourself}
            </Button>

        </View>
    )
}

const styles = StyleSheet.create({
    logo: {
        width: '100%',
        height: 100,
        resizeMode: 'contain',
        //marginBottom: 0
    },
});