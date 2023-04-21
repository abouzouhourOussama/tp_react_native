import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

const CustomStyle = (props) => {
    return(
        <View>
            <Text style = {styles.myState}>
                {props.myState}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create ({
    myState:{
        marginTop:20,
        textAlign: 'center',
        color: 'red',
        fontWeight: 'bold',
        fontSize: 20,
    },
});

export default CustomStyle