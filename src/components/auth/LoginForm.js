import React from 'react';
import { View, Text } from 'react-native';
import { TextInput, Button, Title } from "react-native-paper";
import { useFormik } from "formik";
import * as Yup from "yup";
import { loginModel } from "../../models/loginModel";
import { properties } from "../../properties";
import { loginFormStyle } from "../../styles";

export default function LoginForm(props) {

    const { changeForm, navigation } = props;

    const formik = useFormik({

        initialValues: initialValues(),
        validationSchema: Yup.object(validationSchema()),

        onSubmit: (data) => {

            console.log(data);

            navigation.navigate('Home');

        }
    });

    return (
        <View>
            <Title style={loginFormStyle.btnTitle}>{properties.login_enter}</Title>

            <TextInput
                label={properties.login_indentifier}
                style={loginFormStyle.input}
                onChangeText={(text) =>
                    formik.setFieldValue(properties.key_indentifier, text)
                }
                value={formik.values.indentifier}
                error={formik.errors.indentifier}
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

            <Button
                mode="contained"
                style={loginFormStyle.btnSuccess}
                onPress={formik.handleSubmit}
            >
                {properties.button_text_continue}
            </Button>

            <Button mode="contained"
                style={loginFormStyle.btnText}
                onPress={() => navigation.navigate('Registro')}>
                {properties.login_create_account}
            </Button>

            <Button mode="contained"
                style={loginFormStyle.btnSocial}
                onPress={changeForm}>
                Ingresar con REDES SOCIALES
            </Button>



        </View>
    )
}

const initialValues = () => {
    return loginModel;
};

const validationSchema = () => {
    return {
        indentifier: Yup.string().required(true),
        password: Yup.string().required(true),
    };
};