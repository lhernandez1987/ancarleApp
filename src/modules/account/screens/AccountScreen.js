import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

export default function AccountScreen() {
    return (
        <View style={style.container}>
            <Text>AccountScreen</Text>
        </View>
    )
}

const style = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

