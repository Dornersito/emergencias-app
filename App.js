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
    >
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Crear ficha" component={CrearFichas} />
      <Drawer.Screen name="Registros" component={Registros} />
      <Drawer.Screen name="Análisis" component={Analisis} />
      <Drawer.Screen name="Exportar" component={Exportar} />
      {/* Nueva pantalla para el inicio de sesión */}
      <Drawer.Screen
        name="Iniciar Sesión"
        component={Login}
        options={{
          drawerLabel: 'Volver a Iniciar Sesión',
        }}
      />
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
