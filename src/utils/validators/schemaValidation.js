import * as Yup from "yup";
import { properties } from "../constants/properties";

export const loginRegisterSchemaValidation = () => {
    
    return {
        displayName: Yup.string().required(true),
        email: Yup.string().email(true).required(true),
        password: Yup.string().required(true),
        repeatPassword: Yup.string().required(true).oneOf([Yup.ref('password')], true)
    };
};

export const loginSchemaValidation = () => {
    
    return {
        email: Yup.string().email(true).required(true),
        password: Yup.string().required(true)
    };
};