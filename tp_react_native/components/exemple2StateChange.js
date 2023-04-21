import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component{

    constructor(){
        super()
            this.state = {myMsg: "Bonjour tout le monde"}
    }

    fctChange = () => {this.setState({ myMsg: "Bonsoir tout le monde"})}

    render(){
        return(
            <View>
                <Text style={{ fontSize:40, color:'blue' }}>
                    {this.state.myMsg}
                </Text>
                <View style={[{width:"70%" , margin: 50 , backgroundColor : "red"}]}>
                    <Button onPress={this.fctChange} title='Set State' color="#FF3D00"></Button>
                </View>
            </View>
        );
    }
}