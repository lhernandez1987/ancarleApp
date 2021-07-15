import React, { useState } from "react";
import { StyleSheet, View, Image } from "react-native";
import { TextInput, Button, Title } from "react-native-paper";
import { useFormik } from "formik";
import * as Yup from "yup";
//import Toast from 'react-native-root-toast';
import { loginModel } from "../models/loginModel";
import { properties } from "../properties";
import firebase from "../dataBase/firebase";
import logo from '../../assets/logo-web.png';
import { loginFormStyle, layoutStyle } from "../styles";

export default function RegisterAuthScreen({ navigation }) {


    //const { changeForm, navigation } = props;

    const [loading, setLoading] = useState(false);

    const formik = useFormik({

        initialValues: initialValues(),
        validationSchema: Yup.object(validationSchema()),

        onSubmit: async (data) => {

            setLoading(true);

            try {

                await firebase.db.collection('user').add({

                    username: data.username,
                    email: data.email,
                    password: data.password,
                    repeatPassword: data.repeatPassword

                })

                //alert('guardado')

                navigation.navigate('Login')

            } catch (error) {

                setLoading(false);

            }
        }
    });

    return (
        <View style={layoutStyle.container}>

            <Image style={styles.logo} source={logo} />

            <Title style={loginFormStyle.btnTitle}>{properties.login_create_account}</Title>

            <TextInput
                label={properties.login_email}
                style={loginFormStyle.input}
                onChangeText={(text) =>
                    formik.setFieldValue(properties.key_email, text)
                }
                value={formik.values.email}
                error={formik.errors.email}
            />

            <TextInput
                label={properties.login_name}
                style={loginFormStyle.input}
                onChangeText={(text) => formik.setFieldValue(properties.key_name, text)}
                value={formik.values.username}
                error={formik.errors.username}
            />

            <TextInput
                label={properties.login_password}
                style={loginFormStyle.input}
                secureTextEntry
                onChangeText={(text) =>
                    formik.setFieldValue(properties.key_password, text)
                }
                value={formik.values.password}
                error={formik.errors.password}
            />

            <TextInput
                label={properties.login_repeatPassword}
                style={loginFormStyle.input}
                secureTextEntry
                onChangeText={(text) =>
                    formik.setFieldValue(properties.key_repeatPassword, text)
                }
                value={formik.values.repeatPassword}
                error={formik.errors.repeatPassword}
            />

            <Button
                mode="contained"
                style={loginFormStyle.btnLogin}
                onPress={formik.handleSubmit}
                loading={loading}
            >
                {properties.button_text_continue}
            </Button>

        </View>
    );
}

const initialValues = () => {
    return loginModel;
};

const validationSchema = () => {
    return {
        email: Yup.string().email(true).required(true),
        username: Yup.string().required(true),
        password: Yup.string().required(true),
        repeatPassword: Yup.string()
            .required(true)
            .oneOf([Yup.ref(properties.key_password)], true),
    };
};

const styles = StyleSheet.create({
    logo: {
        width: '100%',
        height: 100,
        resizeMode: 'contain',
        //marginBottom: 0
    },
});
