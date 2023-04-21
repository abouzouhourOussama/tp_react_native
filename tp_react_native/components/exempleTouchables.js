import React from "react";
import { StyleSheet, Text, View, TouchableHighlight, TouchableOpacity, TouchableNativeFeedback, TouchableWithoutFeedback } from "react-native";

export default class Touchable extends React.Component{
    _onPressButton() {
        alert('Vous avez clique sur l\'élément tactile !!!')
    }
    _onLongPressButton() {
        alert('Vous avez longement clique sur l\'élément tactile !!!')
    }

    render(){
        return(
            <View style={styles.container}>

    <TouchableHighlight onPress={this._onPressButton} underlayColor="white">
        <View style={styles.button}>
            <Text style={styles.buttonText}>TouchableHighlight</Text>
        </View> 
    </TouchableHighlight>

    <TouchableOpacity onPress={this._onPressButton}>
        <View style={styles.button}>
            <Text style={styles.buttonText}>TouchableOpacity</Text>
        </View>
    </TouchableOpacity>

    <TouchableNativeFeedback
        onPress={this._onPressButton}
        background={Platform.OS === 'android' ? TouchableNativeFeedback.SelectableBackground() : ""}>
        <View style={styles.button}>
            <Text style={styles.buttonText}>TouchableNativeFeedback</Text>
        </View>
    </TouchableNativeFeedback>

    <TouchableWithoutFeedback onPress={this._onPressButton}>
        <View style={styles.button}>
            <Text style={styles.buttonText}>TouchablewithoutFeedback</Text>
        </View>
    </TouchableWithoutFeedback>

    <TouchableHighlight onPress={this._onPressButton} onLongPress={this._onLongPressButton} underlayColor="white">
        <View style={styles.button}>
            <Text style={styles.buttonText}>Touchable with Long Press</Text>
        </View>
    </TouchableHighlight>

</View>

        )
    }
}
const styles = StyleSheet.create({
    container: {
        paddingTop: 70,
        alignItems: 'center'
    },
    button: {
        marginBottom: 30,
        width: 260,
        alignItems: 'center',
        backgroundColor: '#5ead97'
    },
    
    buttonText: {
        padding: 10,
        color: 'white',
        // fontsize: 18
    }

});