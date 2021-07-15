import * as Yup from "yup";
import { properties } from "../constants/properties";

export const loginSchemaValidation = () => {
    
    return {
        email: Yup.string().email(true).required(true),
        password: Yup.string().required(true)
    };
};