// App.js
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import CrearFichas from './screens/CrearFichas';
import Registros from './screens/Registros';
import Home from './screens/Home';
import Login from './screens/LoginScreen';
import Analisis from './screens/Analisis';
import Exportar from './screens/Exportar';
import DetallesFicha from './screens/DetallesFicha';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Login"
      screenOptions={{
        drawerActiveTintColor: '#e91e63',
        drawerItemStyle: { marginVertical: 5 },
        drawerLabelStyle: {
          color: 'white',
        },
        drawerStyle: {
          backgroundColor: '#42C2FF',
        },
      }}
    >
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Crear ficha" component={CrearFichas} />
      <Drawer.Screen name="Registros" component={Registros} />
      <Drawer.Screen name="Análisis" component={Analisis} />
      <Drawer.Screen name="Exportar" component={Exportar} />
      {/* No incluyas DetallesFicha en el Drawer */}
    </Drawer.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Drawer" component={DrawerNavigator} />
        {/* Agrega la pantalla DetallesFicha y pasa el prop route para recibir los parámetros */}
        <Stack.Screen
          name="DetallesFicha"
          component={DetallesFicha}
          options={({ route }) => ({
            title: `Detalles de Ficha: ${route.params ? route.params.numero_ficha : ''}`,
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
