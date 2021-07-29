import { Alert } from "react-native";
import { properties } from "../constants/properties";

export default function alertValidation(codeTypeId) {
  switch (codeTypeId) {

    case properties.key_auth_user_not_found:
      return Alert.alert(
        properties.key_auth_error,
        properties.message_auth_user_not_found,
        [{ text: properties.label_ok, onPress: () => null }]
      );

    case properties.key_auth_wrong_password:
      return Alert.alert(
        properties.key_auth_error,
        properties.message_auth_wrong_password,
        [{ text: properties.label_ok, onPress: () => null }]
      );

    case properties.key_auth_email_already_in_use:
      return Alert.alert(
        properties.key_auth_error,
        properties.message_auth_email_already_in_use,
        [{ text: properties.label_ok, onPress: () => null }]
      );

    default:
      break;
  }
}
