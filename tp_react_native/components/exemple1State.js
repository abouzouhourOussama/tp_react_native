import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component{
    state = {
        myState : "Bonjour tout le monde"
    }

    render(){
        return(
            <View>
                <Text>
                    {this.state.myState}
                </Text>
            </View>
        );
    }
}