import React, {Component} from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";

export default class Flexbox extends React.Component {
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.redbox} />
                <View style={styles.bluebox} />
                <View style={styles.blackbox} />
            </View>
        )
    }
}
const styles = StyleSheet.create ({
    container: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'grey',
        height: 800
    },
    redbox: {
        marginTop: 75,
        width: 200,
        height: 100,
        backgroundColor: 'blue'
    },
    
    bluebox: {
        marginTop: 75,
        width: 100,
        height: 200,
        backgroundColor: 'green'
    },
    
    blackbox: {
        marginTop: 75,
        width: 300,
        height: 300,
        backgroundColor:'red',
    },
})