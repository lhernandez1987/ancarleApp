import React, { useState } from 'react';
import { StyleSheet, View, Image, KeyboardAvoidingView, Platform } from 'react-native';
import logo from '../../assets/logo-web.png';
import LoginForm from '../components/auth/LoginForm';
import { layoutStyle } from '../styles';

export default function AuthScreen({ navigation }) {

    const [showLogin, setShowLogin] = useState(false);

    const changeForm = () => {
        setShowLogin(!showLogin);
    }

    return (

        <View style={layoutStyle.container}>
            <Image style={ styles.logo } source={logo} />
            <KeyboardAvoidingView>

                <LoginForm changeForm={ changeForm } navigation={ navigation } />
                
            </KeyboardAvoidingView>
        </View>
        
    )

}

const styles = StyleSheet.create({
    logo: {
        width: '100%',
        height: 100,
        resizeMode: 'contain',
        marginTop: 30
    },
});
