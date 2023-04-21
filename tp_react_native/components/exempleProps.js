import React from 'react';
import {Text, View } from 'react-native';
import Custom from './CustomButton'


export default class App extends React.Component{

    constructor(){
        super()
            this.state = {productCount : 0}
    }

    addProduct = () => {
        this.setState ({ 'productCount':this.state.productCount+1 })
    }

    render(){
        return(
            <View>
                <Custom  onPress={this.addProduct} />
                <Text>{this.state.productCount}</Text>
            </View>
        );
    }
}