import React, { useState } from "react";
import { View } from "react-native";
import { TextInput, Button, Title } from "react-native-paper";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { loginModel } from "../../models/loginModel";
import { properties } from "../../../../utils/constants/properties";
import { loginRegisterSchemaValidation } from "../../../../utils/validators/schemaValidation";
import { createUserWithEmailAndPassword } from "../../services/authService";
import { formStyle } from "../../../../styles";

export default function RegisterAuthForm(props) {

  const { navigation } = props;

  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: Yup.object(loginRegisterSchemaValidation()),

    onSubmit: (data) => {
      setLoading(true);

      const parameters = {
        displayName: data.displayName,
        email: data.email,
        password: data.password,
      };
      
      dispatch(createUserWithEmailAndPassword(parameters, navigation));
    },
  });

  return (
    <View>
      <Title style={formStyle.btnTitle}>
        {properties.login_create_account}
      </Title>

      <TextInput
        label={properties.login_name}
        style={formStyle.input}
        onChangeText={(text) => formik.setFieldValue(properties.key_name, text)}
        value={formik.values.displayName}
        error={formik.errors.displayName}
      />

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
        right={<TextInput.Icon name="eye" />}
        onChangeText={(text) =>
          formik.setFieldValue(properties.key_password, text)
        }
        value={formik.values.password}
        error={formik.errors.password}
      />

      <TextInput
        label={properties.login_repeatPassword}
        style={formStyle.input}
        secureTextEntry
        right={<TextInput.Icon name="eye" />}
        onChangeText={(text) =>
          formik.setFieldValue(properties.key_repeatPassword, text)
        }
        value={formik.values.repeatPassword}
        error={formik.errors.repeatPassword}
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
