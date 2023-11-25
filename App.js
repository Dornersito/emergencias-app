import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text } from 'react-native';

import CrearFichas from './screens/CrearFichas';
import Registros from './screens/Registros';
import Home from './screens/Home';
import Login from './screens/LoginScreen';
import Analisis from './screens/Analisis';
import Exportar from './screens/Exportar';

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
          color: 'white'
        },
        drawerStyle: {
          backgroundColor: '#42C2FF',
        },
      }}
    >
      <Drawer.Screen name= "Home" component={Home}
        options={{
          headerStyle: {
            backgroundColor: '#42C2FF',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'normal',
          },
        }}/>
      <Drawer.Screen name="Crear ficha" component={CrearFichas}
        options={{
          headerStyle: {
            backgroundColor: '#42C2FF',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'normal',
          },
        }}/>

      <Drawer.Screen name="Registros" component={Registros}
        options={{
          headerStyle: {
            backgroundColor: '#42C2FF',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'normal',
          },
        }}/>

      <Drawer.Screen name="Análisis" component={Analisis} 
        options={{
          headerStyle: {
            backgroundColor: '#42C2FF',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'normal',
          },
        }}/>

      <Drawer.Screen name="Exportar" component={Exportar}
        options={{
          headerStyle: {
            backgroundColor: '#42C2FF',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'normal',
          },
        }} />
    </Drawer.Navigator>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName="Login"
        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen name= "Login" component={Login}/>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Drawer" component={DrawerNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
