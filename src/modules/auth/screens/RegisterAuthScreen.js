import React, { useState } from "react";
import { StyleSheet, View, Image } from "react-native";
import { TextInput, Button, Title } from "react-native-paper";
import { useFormik } from "formik";
import * as Yup from "yup";
import firebase from "firebase";
//import Toast from 'react-native-root-toast';
import { loginModel } from "../models/loginModel";
import { properties } from "../../../utils/constants/properties";
import logo from '../../../../assets/logo-web.png';
import { loginSchemaValidation } from "../../../utils/validators/loginSchemaValidation";
import { formStyle, layoutStyle } from "../../../styles";

export default function RegisterAuthScreen({ navigation }) {

    const [loading, setLoading] = useState(false);

    const formik = useFormik({

        initialValues: initialValues(),
        validationSchema: Yup.object(loginSchemaValidation()),

        onSubmit: async (data) => {

            setLoading(true);

            firebase.auth().createUserWithEmailAndPassword(data.email, data.password)
                .then(userCredential => {
                    alert('guardado')
                    navigation.navigate('Login');
                })
                .catch((error) => {
                    console.log('error : ' + error.code);
                    console.log('error : ' + error.message);
                });

        }
    })

    return (
        <View style={layoutStyle.container}>

            <Title style={formStyle.btnTitle}>{properties.login_create_account}</Title>

            <TextInput
                label={properties.login_email}
                style={formStyle.input}
                onChangeText={(text) =>
                    formik.setFieldValue(properties.key_email, text)
                }
                value={formik.values.email}
                error={formik.errors.email}
            />

            <TextInput
                label={properties.login_password}
                style={formStyle.input}
                secureTextEntry
                onChangeText={(text) =>
                    formik.setFieldValue(properties.key_password, text)
                }
                value={formik.values.password}
                error={formik.errors.password}
            />

            <Button
                mode="contained"
                style={formStyle.btnLogin}
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

const styles = StyleSheet.create({
    logo: {
        width: '100%',
        height: 100,
        resizeMode: 'contain',
        //marginBottom: 0
    },
});
