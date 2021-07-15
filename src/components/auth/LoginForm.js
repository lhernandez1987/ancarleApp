import React from "react";
import { View } from "react-native";
import { TextInput, Button, Title } from "react-native-paper";
import { useFormik } from "formik";
import * as Yup from "yup";
import firebase from "firebase";
import { loginModel } from "../../models/loginModel";
import { properties } from "../../utils/constants/properties";
import { loginSchemaValidation } from "../../utils/validators/loginSchemaValidation";
import { loginFormStyle } from "../../styles";

export default function LoginForm(props) {

    const { changeForm, navigation } = props;

    const formik = useFormik({
        initialValues: initialValues(),
        validationSchema: Yup.object(loginSchemaValidation()),

        onSubmit: (data) => {

            firebase
                .auth()
                .signInWithEmailAndPassword(data.email, data.password)
                .then((userCredential) => {
                    console.log("Valido");
                    navigation.navigate("Home");
                })
                .catch((error) => {
                    console.log("error : " + error.code);
                    console.log("error : " + error.message);
                    // ..
                });

        },
    });

    return (
        <View>
            <Title style={loginFormStyle.btnTitle}>{properties.login_enter}</Title>

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

            <Button
                mode="contained"
                style={loginFormStyle.btnText}
                onPress={() => navigation.navigate("Registro")}
            >
                {properties.login_create_account}
            </Button>

            <Button
                mode="contained"
                style={loginFormStyle.btnSocial}
                onPress={changeForm}
            >
                Ingresar con REDES SOCIALES
            </Button>
        </View>
        
    );
}

const initialValues = () => {
    return loginModel;
};
