import React from "react";
import {  View, StyleSheet, Text } from "react-native";
import {Button,ScrollView} from "react-native"

export default class scrollView extends React.Component {

    onPressButton(){
        alert('Vous aves cliquer sur button')
    }

    render(){
        return(
            <ScrollView style={{marginTop:30}}>
                <Text styles={{fontSize:20}}>React Native Exemple ScrollView</Text>
                <Button title={'Button 1'} onPress={this.onPressButton} />
                <Text styles={{fontSize:20}}>Scrolling</Text>
                <Button title={'Button 2'} onPress={this.onPressButton} />
                <Text styles={{fontSize:20}}>Scrolling</Text>
                <Button title={'Button 3'} onPress={this.onPressButton} />
                <Text styles={{fontSize:20}}>Scrolling</Text>
                <Button title={'Button 4'} onPress={this.onPressButton} />
                <Text styles={{fontSize:20}}>Scrolling</Text>
                <Button title={'Button 5'} onPress={this.onPressButton} />
                <Text styles={{fontSize:20}}>Scrolling</Text>
                <Button title={'Button 6'} onPress={this.onPressButton} />
                <Text styles={{fontSize:20}}>Scrolling</Text>
                <Button title={'Button 7'} onPress={this.onPressButton} />
                <Text styles={{fontSize:20}}>Scrolling</Text>
                <Button title={'Button 8'} onPress={this.onPressButton} />
                <Text styles={{fontSize:20}}>Scrolling</Text>
                <Button title={'Button 9'} onPress={this.onPressButton} />
                <Text styles={{fontSize:20}}>Scrolling</Text>
                <Button title={'Button 10'} onPress={this.onPressButton} />
                <Text styles={{fontSize:20}}>Scrolling</Text>
                <Button title={'Button 11'} onPress={this.onPressButton} />
                <Text styles={{fontSize:20}}>Scrolling</Text>
                <Button title={'Button 12'} onPress={this.onPressButton} />
                <Text styles={{fontSize:20}}>Scrolling</Text>
                <Button title={'Button 13'} onPress={this.onPressButton} />
                <Text styles={{fontSize:20}}>Scrolling</Text>
                <Button title={'Button 14'} onPress={this.onPressButton} />
                <Text styles={{fontSize:20}}>Scrolling</Text>
                <Button title={'Button 15'} onPress={this.onPressButton} />
                <Text styles={{fontSize:20}}>Scrolling</Text>
                <Button title={'Button 16'} onPress={this.onPressButton} />
            </ScrollView>
        );
    }
}
