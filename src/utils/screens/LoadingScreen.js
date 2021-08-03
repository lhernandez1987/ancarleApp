import React from 'react'
import { View, Text, SafeAreaView, ActivityIndicator } from 'react-native';
import { styleLoading } from '../../styles/generalStyles'

export default function LoadingScreen(props) {

    const {text, size, color} = props;
    return (
        <SafeAreaView style={styleLoading.container}>

            <ActivityIndicator size={size} color={color} style={styleLoading.loading} />

            <Text style={styleLoading.title}>{text}</Text>

        </SafeAreaView>
    )
}

LoadingScreen.defaultProps = {
    text: 'Cargando...',
    color: '#000',
}