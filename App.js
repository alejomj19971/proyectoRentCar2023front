import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RegistroUsuario from './components/RegistroUsuario'
import CambioContraseña from './components/CambioContraseña'

export default function App() {
  const stack= createNativeStackNavigator();
  return (
    <NavigationContainer>
      <stack.Navigator 
      >

      <stack.Screen
        name="Registro Usuario"
        component={RegistroUsuario}
      >
      </stack.Screen>

      <stack.Screen
        name="Cambio Contraseña"
        component={CambioContraseña}
      >
      </stack.Screen>

      </stack.Navigator>


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
