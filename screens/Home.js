import React from 'react';
import { View, TouchableHighlight, Text, StyleSheet, Image } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import { TouchableRipple } from 'react-native-paper';

// Importa tus imágenes
const analisisDatos = require('../assets/icons/analisis_datos.png');
const buscarFicha = require('../assets/icons/buscar_ficha.png');
const crearFicha = require('../assets/icons/crear_ficha.png');
const exportarDatos = require('../assets/icons/exportar_datos.png');

const Home = () => {
  const route = useRoute();
  const isOfflineMode = route.params?.isOfflineMode || false;
  const navigation = useNavigation();

  const navigateToCrearFicha = () => {
    navigation.navigate('Drawer', { screen: 'Crear ficha' });
  };
  const navigateToSearchFicha = () => {
    if (!isOfflineMode) {
      navigation.navigate('Drawer', { screen: 'Registros' });
    }
  };
  const navigateToAnalisisFicha = () => {
    if (!isOfflineMode) {
      navigation.navigate('Drawer', { screen: 'Análisis' });
    }
  };
  const navigateToExportarFicha = () => {
    if (!isOfflineMode) {
      navigation.navigate('Drawer', { screen: 'Exportar' });
    }
  };

  return (
    <View style={styles.container}>
      <TouchableRipple
        onPress={navigateToCrearFicha}
        rippleColor="#85F4FF"
        style={{ ...styles.button, opacity: isOfflineMode ? 1 : 1}}
      >
        <>
          <Text style={styles.buttonText}>Crear Fichas</Text>
          <Image source={crearFicha} style={styles.icon} />
        </>
      </TouchableRipple>

      <TouchableRipple
        onPress={navigateToSearchFicha}
        rippleColor="#85F4FF"
        style={{ ...styles.button, opacity: isOfflineMode ? 0.5 : 1 }}
      >
        <>
          <Text style={styles.buttonText}>Buscar Ficha</Text>
          <Image source={buscarFicha} style={styles.icon} />
        </>
      </TouchableRipple>

      <TouchableRipple
        onPress={navigateToAnalisisFicha}
        rippleColor="#85F4FF"
        style={{ ...styles.button, opacity: isOfflineMode ? 0.5 : 1 }}
      >
        <>
          <Text style={styles.buttonText}>Análisis de Datos</Text>
          <Image source={analisisDatos} style={styles.icon} />
        </>
      </TouchableRipple>

      <TouchableRipple
        onPress={navigateToExportarFicha}
        rippleColor="#85F4FF"
        style={{ ...styles.button, opacity: isOfflineMode ? 0.5 : 1 }}
      >
        <>
          <Text style={styles.buttonText}>Exportar Datos</Text>
          <Image source={exportarDatos} style={styles.icon} />
        </>
      </TouchableRipple>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center',
    backgroundColor: '#EFFFFD', // Cambiar a un tono de azul claro (Light Blue)
  },
  button: {
    width: 250, // Ancho fijo
    height: 70, // Altura fija
    marginBottom: 30,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 10, // Bordes redondeados
    backgroundColor: '#42C2FF',
    flexDirection: 'row', // Alinear elementos horizontalmente
    justifyContent: 'space-between', // Distribuir elementos uniformemente
    alignItems: 'center', // Centrar elementos verticalmente
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
    fontSize: 17,
  },
  icon: {
    width: 40, // Ancho de la imagen
    height: 40, // Altura de la imagen
  },
});

export default Home;
