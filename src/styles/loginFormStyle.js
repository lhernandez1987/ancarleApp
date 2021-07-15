import { StyleSheet } from "react-native";
import colors from "./colors";

const loginFormStyle = StyleSheet.create({
    input: {
        marginBottom: 20,
        //marginTop: 30
    },
    btnSuccess: {
        padding: 5,
        backgroundColor: colors.secondary,
        borderRadius: 10
    },
    btnText: {
        padding: 5,
        marginTop: 10,
        backgroundColor: colors.primary,
        borderRadius: 10
    },
    btnLogin: {
        padding: 5,
        marginBottom: 70,
        backgroundColor: colors.secondary,
        borderRadius: 10
    },
    btnSocial: {
        padding: 5,
        marginTop: 10,
        marginBottom: 70,
        backgroundColor: colors.primary,
        borderRadius: 10
    },
    btnTextLabel: {
        color: colors.dark
    },
    btnTitle: {
        color: colors.primary,
        marginBottom: 1,
        marginTop: -10,
        fontSize: 20,
        textAlign: 'center'
    }
})

export default loginFormStyle;
