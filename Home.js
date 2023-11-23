import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Home = () => {
  const navigation = useNavigation();

  const navigateToCrearFicha = () => {
    navigation.navigate('Drawer', { screen: 'Crear ficha' });
  };
  

  return (
    <View style={styles.container}>
        <TouchableOpacity onPress={navigateToCrearFicha} style={styles.button}>
            <Text style={styles.buttonText}>Crear Fichas</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Buscar Ficha</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Análisis de Datos</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Exportar Datos</Text>
        </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center',
    backgroundColor: '#f0f8ff', // Cambiar a un tono de azul claro (Light Blue)
  },
  button: {
    width: 200, // Ancho fijo
    height: 50, // Altura fija
    marginBottom: 20,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 10, // Bordes redondeados
    backgroundColor: 'skyblue',
    justifyContent: 'center', // Centrar el texto verticalmente
    shadowColor: "#000", // Sombra
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default Home;
