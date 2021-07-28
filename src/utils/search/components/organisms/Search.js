import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { Searchbar } from 'react-native-paper';
import logo from "../../../../../assets/logo-web.png";
import colors from '../../../../styles/colors';

export default function Search() {
    return (
        <View style={styles.container}>
            
            <Searchbar placeholder='Busca tu producto...' style={{
                borderRadius: 10
            }}/>
      
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: colors.bgDark,
      paddingVertical: 10,
      paddingHorizontal: 20,
      zIndex: 1,
      
    }
  });
  
