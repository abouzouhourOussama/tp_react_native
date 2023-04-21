import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component{

    constructor(){
        super()
            this.state = {myMsg: "Bonjour tout le monde"}
    }

    render(){
        return(
            <View>
                <Text style={{ fontSize:40, color:'blue' }}>
                    {this.state.myMsg}
                </Text>
            </View>
        );
    }
}