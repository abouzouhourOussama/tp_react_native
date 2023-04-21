import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default function App() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState('');

  const handleAdd = () => {
    const sum = parseInt(num1) + parseInt(num2);
    setResult(sum.toString());
  };

  const handleSubtract = () => {
    const diff = parseInt(num1) - parseInt(num2);
    setResult(diff.toString());
  };

  const handleMultiply = () => {
    const product = parseInt(num1) * parseInt(num2);
    setResult(product.toString());
  };

  const handleDivide = () => {
    const quotient = parseInt(num1) / parseInt(num2);
    setResult(quotient.toString());
  };
  return (
    <View style={styles.container}>
      
      <Text style={styles.result}>{result}</Text>

      <TextInput
        style={styles.input}
        onChangeText={setNum1}
        value={num1}
        keyboardType='numeric'
        placeholder='x1'
      />
      <TextInput
        style={styles.input}
        onChangeText={setNum2}
        value={num2}
        keyboardType='numeric'
        placeholder='x2='
      />
       <View style={styles.row}>
      <TouchableOpacity style={styles.button} onPress={handleAdd}>
        <Text style={styles.buttonText}>+</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.button} onPress={handleSubtract}>
        <Text style={styles.buttonText}>-</Text>
      </TouchableOpacity>
      </View>

      <View style={styles.row}>
      <TouchableOpacity style={styles.button} onPress={handleMultiply}>
        <Text style={styles.buttonText}>*</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={handleDivide}>
        <Text style={styles.buttonText}>/</Text>
      </TouchableOpacity>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  ccontainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginVertical: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    marginLeft:100,
    borderRadius: 5,
    padding: 10,
    width: '50%',
    marginVertical: 10,
    fontSize: 18,
  },
  button: {
    backgroundColor: '#2136F3',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    marginVertical: 2,
  },
  buttonText: {
    color: '#fff',
    fontSize: 24,
  },
  result: {
    marginTop: 200,
    marginLeft:180,
    fontSize: 24,
    fontWeight: 'bold',
  },
});