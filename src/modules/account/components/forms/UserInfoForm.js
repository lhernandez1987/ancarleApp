import React, { useState, useCallback } from "react";
import { View } from "react-native";
import { TextInput, Button } from "react-native-paper";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useFocusEffect } from "@react-navigation/native";
import { userModel } from "../../models/userModel";
import { properties } from "../../../../utils/constants/properties";
import { getUser } from "../../../auth/services/authService";
import { registerSchemaValidation } from "../../../../utils/validators/schemaValidation";
import { formStyle } from "../../../../styles/generalStyles";

export default function UserInfoForm() {
  const [loading, setLoading] = useState(false);

  useFocusEffect(
    useCallback(() => {
      (() => {

        const response = getUser();

        response.displayName &&
          formik.setFieldValue(
            properties.key_displayName,
            response.displayName
          );

        response.email &&
          formik.setFieldValue(properties.key_email, response.email);
          
      })();
    }, [])
  );

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: Yup.object(registerSchemaValidation()),

    onSubmit: (data) => {
      setLoading(true);
    },
  });

  return (
    <View>
      <TextInput
        label={properties.form_name}
        style={formStyle.input}
        onChangeText={(text) =>
          formik.setFieldValue(properties.key_displayName, text)
        }
        value={formik.values.displayName}
        error={formik.errors.displayName}
      />

      <TextInput
        label={properties.form_email}
        style={formStyle.input}
        onChangeText={(text) =>
          formik.setFieldValue(properties.key_email, text)
        }
        value={formik.values.email}
        error={formik.errors.email}
      />

      <TextInput
        label={properties.label_new_password}
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
        label={properties.form_repeatPassword}
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
  return userModel;
};
