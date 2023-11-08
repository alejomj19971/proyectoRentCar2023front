import {  View } from "react-native";
import { useState } from "react";
import { styles } from "../assets/styles/allstyles";
import { TextInput, Button } from "react-native-paper";

import { useNavigation } from "@react-navigation/native";


export default function CambioContraseña() {
  const navigation = useNavigation();
  const [usuario, setUsuario] = useState("");
  const [palabrareservada, setPalabrareservada] = useState("");
  const [nuevacontraseña, setNuevacontraseña] = useState("")
  const [showPass,setShowPass]=useState(false);



return (
  
    <View style={styles.container}>
        <h1>¿Olvidaste la contraseña?</h1>
      <TextInput
        label="Usuario"
        onChangeText={(userName) => setUsuario(userName)}
        right={<TextInput.Icon icon="text" />}
      />
     
     <TextInput
        style={{ marginTop: 10 }}
        label="Palabra reservada"
        onChangeText={(palabrareservada) => setPalabrareservada(palabrareservada)}
        secureTextEntry={!showPass}
        right={
          <TextInput.Icon
            icon={showPass ? "eye" : "eye-off"}
            onPress={() => setShowPass(!showPass)}
          />
        }
      />
      
      <TextInput
        style={{ marginTop: 10 }}
        label="Nueva contraseña"
        onChangeText={(nuevacontraseña) => setNuevacontraseña(nuevacontraseña)}
        secureTextEntry={!showPass}
        right={
          <TextInput.Icon
            icon={showPass ? "eye" : "eye-off"}
            onPress={() => setShowPass(!showPass)}
          />
        }
        />


      <Button
        style={{ marginTop: 20, backgroundColor: "yellow" }}
        icon="account"
        mode="outlined"
        //onPress={registrarUsuario}
        labelStyle={{ color: "black" }}
      >
        REGISTRAR
      </Button>
      <Button
        style={{ marginTop: 20, backgroundColor: "yellow" }}
        icon="login"
        mode="outlined"
        //onPress={validarUsuario}
        labelStyle={{ color: "black" }}
      >
        Iniciar Sesión
      </Button>
    </View>
  );
      }