import React from "react";
import { Alert } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { List } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { properties } from "../../../../utils/constants/properties";
import { signOut } from "../../../auth/services/authService";
import { colorStyle } from "../../../../styles/generalStyles";

export default function UserMenu() {
  const { uid } = useSelector((state) => state.auth);
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const handleSignOut = () => {

    dispatch(signOut(navigation))
    /*Alert.alert(
      properties.key_logout,
      properties.message_logout,
      [{ text: properties.label_not, onPress: () => null}],
        { text: properties.label_yes, onPress: () => dispatch(signOut(navigation))},
       
      { cancelable: false }
    );
    <List.Item
          title="Cambiar email"
          description="Cambia el email de tu cuenta"
          left={(props) => <List.Icon {...props} icon="at" />}
          onPress={() => console.log("Ir a cambiar email")}
        />
        <List.Item
          title="Cambiar nombre"
          description="Cambia el nombe de tu cuenta"
          left={(props) => <List.Icon {...props} icon="sim" />}
          onPress={() => console.log("Ir a cambiar nombre")}
        />
        <List.Item
          title="Contraseña"
          description="Cambia Contraseña de tu cuenta"
          left={(props) => <List.Icon {...props} icon="key" />}
          onPress={() => console.log("Ir a cambiar Contraseña")}
        />*/
  };

  return (
    <>
      <List.Section>
        <List.Subheader style={{color: colorStyle.secondary, fontSize: 15}}>App</List.Subheader>
        {uid ? (
          <List.Item
            title={properties.label_logout}
            description={properties.label_you_logout}
            left={(props) => <List.Icon {...props} icon="logout" />}
            onPress={() => handleSignOut()}
          />
        ) : (
          <List.Item
            title={properties.label_login_enter}
            description={properties.label_you_login_enter}
            left={(props) => <List.Icon {...props} icon="login" color="#490b94" />}
            onPress={() => navigation.navigate(properties.type_login)}
          />
        )}
        <List.Item
          title={properties.label_order_list}
          description={properties.label_list_orders}
          left={(props) => <List.Icon {...props} icon="clipboard-list" color="#ffbf00" />}
          onPress={() => console.log("Ir a Mis Pedidos")}
        />
        <List.Item
          title={properties.label_products_list}
          description={properties.label_list_products_buy}
          left={(props) => <List.Icon {...props} icon="heart" color="#900" />}
          onPress={() => navigation.navigate(properties.type_favorites)}
        />
      </List.Section>
      <List.Section>
        <List.Subheader style={{color: colorStyle.primary, fontSize: 15}}>Mi cuenta</List.Subheader>
        {uid && 
          <List.Item
          title={properties.label_edit_user}
          description={properties.label_Change_user_data}
          left={(props) => <List.Icon {...props} icon="account-edit-outline" color="#167a05" />}
          onPress={() => navigation.navigate(properties.type_user)}
        />
        }
        {uid &&
        <List.Item
          title={properties.label_addresses}
          description={properties.label_change_shipping_addresses}
          left={(props) => <List.Icon {...props} icon="map" color="#083168" />}
          onPress={() => console.log("Ir a Mis Direcciones")}
        />
        }
      </List.Section>
    </>
  );
}
