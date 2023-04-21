
import React from "react";
import { Text,View,Button } from "react-native";
export default class Comp1 extends React.Component{
    state={
        msg:":-( "
    }


    render(){
        return(
            <View>
                <Text
                style={{fontSize:40,color:"blue"}} 
                onPress={this.updateState} >
                    {this.state.msg}
                </Text>
                <Button
                title="change text"
                onPress={this.updateState}
                ></Button>
            </View>
        )
    }

    updateState=()=>{
        currentMsg=this.state.msg 
        if(currentMsg==":-(")
            this.setState({
                msg:":-)"
            })
        else
        this.setState({
            msg:":-("
        })
            
    }

}