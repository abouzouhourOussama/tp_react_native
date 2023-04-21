import React from "react";
import { StyleSheet, Text, View } from "react-native";
import {Picker} from '@react-native-picker/picker';


export default class App extends React.Component{
    state ={ choosenIndex:0 };
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.textStyle}>Liste des langages</Text>
                <Picker style={styles.pickerstyle}
                    selectedValue={this.state.language}
                    onValueChange={(itemValue, itemPosition) =>
                        this.setState({language: itemValue, choosenIndex: itemPosition})}>
                <Picker.Item label="Java" value="java" />
                <Picker.Item label="JavaScript" value="js" />
                <Picker.Item label="React Native" value="rn" />
            </Picker>
            <Text style={styles.textStyle}> {"Index ="+this.state.choosenIndex}</Text>
            </View>
        )
    }
}
const styles = StyleSheet.create ({
    container: {
    marginTop: 75,
    paddingLeft :5,
    alignItems: 'center',
    justifyContent: 'center',
    },
    textstyle:{
        margin: 24,
        fontsize: 25,
        fontweight: 'bold',
        textAlign: 'center',
    },
    pickerstyle:{
        height: 150,
        width: "80%",
        color: '#344953',
        justifycontent: 'center',
    }
})