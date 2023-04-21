import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component{
    state = {
        myState : "Bonjour tout le monde"
    }

    updateState = () => this.setState({myState:"Bonsoir tout le monde"})

    render(){
        return(
            <View>
                <Text onPress={this.updateState}>
                    {this.state.myState}
                </Text>
            </View>
        );
    }
}