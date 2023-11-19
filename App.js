import { useState,useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
//Componentes
import RegistroUsuario from './components/RegistroUsuario'
import CambioContraseña from './components/CambioContraseña'
import Car from './components/Car'
import Login from './components/Login'
//Tabs
import Tabs from './components/Tabs';

export default function App() {
  const Stack= createNativeStackNavigator();

  return (
    <NavigationContainer>
    <Stack.Navigator
    initialRouteName='Home'
    >
      <Stack.Screen  options={{headerShown: false}} 
          name="Login"  component={Login} 
        />
      <Stack.Screen
            name="RegistroUsuario"
            component={RegistroUsuario}
            options={{ headerShown: false }} // Puedes ocultar también la barra de navegación aquí si es necesario
        />
          <Stack.Screen
          name="CambioContraseña"
          component={CambioContraseña}
          options={{ headerShown: false }} // Puedes ocultar también la barra de navegación aquí si es necesario
        />

      <Stack.Screen
          name="Home"
          component={Tabs}
          options={{ headerShown: false }} // Puedes ocultar también la barra de navegación aquí si es necesario
        />
        
      <Stack.Screen
          name="Car"
          component={Car}
          options={{ headerShown: false }} // Puedes ocultar también la barra de navegación aquí si es necesario
        />


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
