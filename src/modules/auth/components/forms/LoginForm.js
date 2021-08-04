import React from "react";
import { View } from "react-native";
import { TextInput, Button } from "react-native-paper";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { loginModel } from "../../models/loginModel";
import { properties } from "../../../../utils/constants/properties";
import { loginSchemaValidation } from "../../../../utils/validators/schemaValidation";
import { signInWithEmailAndPassword } from "../../services/authService";
import { formStyle } from "../../../../styles/generalStyles";

export default function LoginForm() {

  const navigation = useNavigation();

  const dispatch = useDispatch();

  const formik = useFormik({

    initialValues: initialValues(),
    validationSchema: Yup.object(loginSchemaValidation()),

    onSubmit: (data) => {

      dispatch(signInWithEmailAndPassword(data.email, data.password, navigation));
      
    },

  });

  return (
    <View>
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

      <Button
        mode="contained"
        style={formStyle.btnSuccess}
        onPress={formik.handleSubmit}
      >
        {properties.button_text_continue}
      </Button>

      <Button
        mode="contained"
        style={formStyle.btnText}
        onPress={() => navigation.navigate(properties.type_register)}
      >
        {properties.label_register}
      </Button>
    </View>
  );
}

const initialValues = () => {
  return loginModel;
};
