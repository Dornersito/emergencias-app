// En NumericInput.js
import React from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const NumericInput = ({ value, onIncrement, onDecrement }) => {
  return (
    <View style={styles.numericInputContainer}>
      <TouchableOpacity onPress={onDecrement}>
        <Icon name="minus" size={24} color="#007bff" />
      </TouchableOpacity>
      <TextInput
        style={styles.numericInput}
        value={value.toString()}
        keyboardType="numeric"
        editable={false} // Hacer el input no editable para evitar ediciones directas
      />
      <TouchableOpacity onPress={onIncrement}>
        <Icon name="plus" size={24} color="#007bff" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  numericInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  numericInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginHorizontal: 10,
    paddingHorizontal: 10,
    width: 50,
  },
});

export default NumericInput;
