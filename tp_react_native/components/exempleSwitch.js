import React from "react";
import { StyleSheet, View , Switch , Text} from "react-native";


export default class App extends React.Component{

    state = { switchValeur : false};

    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.textStyle}> Exemlpe Switch</Text>
                <Text style={styles.textStyle}>{this.state.switchValeur ? 'on' : 'off'}</Text>
                <Switch
                    value={this.state.switchValeur}
                    onValueChange={(switchValeur=>this.setState({switchValeur}))}
                />
            </View>
        );
    }
}
const styles = StyleSheet.create ({
    container: {
        alignItems:'center',
        justifyContent:'center',
        marginTop: 75,
        paddingLeft :5
    },
    textStyle:{
        margin:24,
        fontSize:25,
        fontWeight:'bold',
        textAlign:'center',
        color:'#344953'
    }
})