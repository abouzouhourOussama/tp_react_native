import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component{

    constructor(){
        super()
            this.state = {productCount : 0}
    }

    fctChange = () => {this.setState({ myMsg: "Bonjour tout le monde"})}

    render(){
        return(
            <View>
                <Text>{this.state.productCount}</Text>
            </View>
        );
    }
}