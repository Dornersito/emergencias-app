import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const LoginScreen = ({ navigation }) => {
  const handleLogin = () => {
    // Lógica de inicio de sesión aquí
    // Puedes navegar a la siguiente pantalla usando navigation.navigate('Home') después del inicio de sesión
  };

  const handleOfflineLogin = () => {
    navigation.reset({
      index: 0,
      routes: [
        {
          name: 'Drawer',
          params: {
            screen: 'Home',
            isOfflineMode: true, // Agrega esta propiedad para indicar modo sin conexión
          },
        },
      ],
    });
  };

  return (
    <ImageBackground
      source={require('../assets/LoginScreenBG.png')} // Cambia la ruta y nombre del archivo según tus necesidades
      style={styles.background}
    >
      <View style={styles.container}>
        <Text style={styles.title}>¡Bienvenido de vuelta!</Text>
        <Text style={styles.subtitle}>Inicia sesión</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Correo electrónico"
            placeholderTextColor="#bdc3c7"
          />
          <TextInput
            style={styles.input}
            placeholder="Contraseña"
            secureTextEntry={true}
            placeholderTextColor="#bdc3c7"
          />
        </View>
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Iniciar Sesión</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.offlineButton} onPress={handleOfflineLogin}>
          <Text style={styles.buttonText}>Iniciar sin Conexión</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 30,
    marginBottom: 10,
    color: '#3498db',
  },
  subtitle:{
    fontSize:18,
  },
  inputContainer: {
    width: '100%',
    marginBottom: 16,
    marginTop: 220,
  },
  input: {
    width: '100%',
    height: 50,
    borderBottomWidth: 1,
    borderBottomColor: '#000000',
    marginBottom: 8,
    padding: 12,
    borderRadius: 10,
    color: '#000000',
  },
  button: {
    backgroundColor: '#3498db',
    padding: 14,
    borderRadius: 10,
    width: '100%',
    marginTop: 16,
  },
  offlineButton: {
    backgroundColor: '#e74c3c',
    padding: 14,
    borderRadius: 10,
    width: '100%',
    marginTop: 10,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default LoginScreen;
