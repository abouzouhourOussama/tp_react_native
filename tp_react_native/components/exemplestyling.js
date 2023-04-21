import React from 'react';
import {Text, View } from 'react-native';
import CustomStyle from './CustomStyle';

export default class App extends React.Component{   
    state = {
        myState : 'Bonjour tout le monde'
    }

    render(){
        return(
            <View>
                <CustomStyle myState = {this.state.myState}/>
            </View>
        );
    }
}