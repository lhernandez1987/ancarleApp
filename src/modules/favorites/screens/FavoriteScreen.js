import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

export default function FavoriteScreen() {
    return (
        <View style={style.container}>
            <Text>FavoriteScreen</Text>
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
