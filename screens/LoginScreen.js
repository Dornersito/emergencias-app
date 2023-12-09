import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    if (email === 'admin' && password === 'admin') {
      navigation.reset({
        index: 0,
        routes: [
          {
            name: 'Drawer',
            state: {
              routes: [
                {
                  name: 'Home',
                  params: {
                    isOfflineMode: false,
                  },
                },
              ],
            },
          },
        ],
      });
    } else {
      // Si las credenciales son incorrectas, establecer el estado de error
      setError('Credenciales incorrectas. Inténtalo de nuevo.');
    }
  };

  // Eliminamos la función handleOfflineLogin y el botón correspondiente
  // const handleOfflineLogin = () => {
  //   navigation.reset({
  //     index: 0,
  //     routes: [
  //       {
  //         name: 'Drawer',
  //         state: {
  //           routes: [
  //             {
  //               name: 'Home',
  //               params: {
  //                 isOfflineMode: true,
  //               },
  //             },
  //           ],
  //         },
  //       },
  //     ],
  //   });
  // };

  return (
    <ImageBackground
      source={require('../assets/LoginScreenBG.png')}
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
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Contraseña"
            secureTextEntry={true}
            placeholderTextColor="#bdc3c7"
            value={password}
            onChangeText={(text) => setPassword(text)}
          />
        </View>
        {/* Mostrar mensaje de error en rojo si las credenciales son incorrectas */}
        {error ? <Text style={styles.errorText}>{error}</Text> : null}
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Iniciar Sesión</Text>
        </TouchableOpacity>
        {/* ... (resto del código) */}
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
  subtitle: {
    fontSize: 18,
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
  // Eliminamos los estilos correspondientes al botón de inicio de sesión sin conexión
  // offlineButton: {
  //   backgroundColor: '#e74c3c',
  //   padding: 14,
  //   borderRadius: 10,
  //   width: '100%',
  //   marginTop: 10,
  // },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    textAlign: 'center',
  },
  errorText: {
    color: 'red',
    fontSize: 16,
    marginTop: 10,
    textAlign: 'center',
  },
});

export default LoginScreen;
