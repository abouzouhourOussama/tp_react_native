import React, {Component} from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";

export default class ListV extends React.Component {
    state = {
        fruits:[{id:0, nom:'Orange',},{id:1, nom:'Pomme',},{id:2, nom:'Banane',},{id:3, nom:'Fraise',}]
    }
    alertItemName = (item) =>{
        alert('Vous aves choisi' +item.nom)
    }

    render(){
        return(
            <View style = {styles.Top}>
                {
                    this.state.fruits.map((item, index) => (
                        <TouchableOpacity
                            key = {item.id}
                            style = {styles.container}
                            onPress={() => this.alertItemName(item)}
                        >
                            <Text style={styles.text}>
                                {item.nom}
                            </Text>
                        </TouchableOpacity>
                    ))
                }
            </View>
        )
    }
}
const styles = StyleSheet.create ({
    container: {
        padding: 25,
        marginTop: 3,
        backgroundColor: '#d9f9b1',
        alignItems: 'center',
    },
    text: {
        color: '#4f603c'
    },
    Top: {
        marginTop: 90,
    }
})