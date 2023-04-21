import React from 'react';
import {Button} from 'react-native';

const CustomButton = (props) => {
    return (
        <Button title='Add product'
        onPress={() => props.onPress()}
        />
    );
}

export default CustomButton;