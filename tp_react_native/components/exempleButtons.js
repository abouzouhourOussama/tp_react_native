import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { Button } from 'react-native'

export default class App extends React.Component {

    onPressButton(){
        alert('Vous aves cliquer sur button')
    }

    render(){
        return(
            <View style={styles.container}>
                <View style={styles.buttonContainer}>
                    <Button
                        // onPress={this.onPressButton}
                        onPress={this.onPressButton}
                        title="Button 1"
                    />
                </View>
                <View style={styles.buttonContainer}>
                    <Button
                        onPress={this.onPressButton}
                        title="Button 2"
                        color="#009933"
                    />
                </View>
                <View style={styles.multiButtonContainer}>
                    <Button
                        onPress={this.onPressButton}
                        title="Button disanled"
                        disabled={true}
                    />
                    <Button
                        onPress={this.onPressButton}
                        title="OK"
                        color="#009933"
                    />
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create ({
    container:{
        // flex:1,
        // justifyContent:'center',
        marginTop: 75,
        paddingLeft :5,
    },
    buttonContainer:{
        margin:20,
    },
    multiButtonContainer:{
        margin:20,
        flexDirection:'row',
        justifyContent:'space-between',
    }
})