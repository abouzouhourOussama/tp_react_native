
import React, { Component } from 'react'
import { Button, View } from 'react-native'

export default class TpProps extends Component {
    
    constructor(){
        super()
        this.state={
            cpt:0
        }
    }

    render() {
    
    return (
      <View>
        <Button
        
        ></Button>
        <Text>{this.state.cpt}</Text>
      </View>
    )
  }

  inc= ()=>{
    this.setState({
        cpt:cpt+1
    })
  }

}
