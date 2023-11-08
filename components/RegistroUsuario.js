import { View,Picker} from "react-native";
import { useState } from "react";
import { styles } from "../assets/styles/allstyles";
import { TextInput, Button } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import CambioContraseña from "./CambioContraseña";


export default function RegistroUsuario() {
  
  const navigation = useNavigation();
  const [usuario, setUsuario] = useState("");
  const [palabrareservada, setPalabrareservada] = useState("");
  const [nombre, setNombre] = useState("");
  const [rol, setRol] = useState("");
  const [showPass, setShowPass] = useState(false);


  return (
  
    <View style={styles.container}>
        <h1>REGISTRO DE USUARIOS</h1>
      <TextInput
        label="Usuario"
        onChangeText={(userName) => setUsuario(userName)}
        right={<TextInput.Icon icon="text" />}
      />
      <TextInput
        style={{ marginTop: 10 }}
        label="Nombre completo"
        onChangeText={(nombre) => setNombre(nombre)}
        right={<TextInput.Icon icon="text" />}
      />
        <Picker
        style={{ marginTop: 10 , fontSize:25}}
        selectedValue={rol}
        onValueChange={rol=>setRol(rol)}
        
      > 
        <Picker.Item label="Admin" value="true" />
        <Picker.Item label="User" value="false" />
    


      </Picker>  
      
      
      
      

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

      <Button
        style={{ marginTop: 20, backgroundColor: "yellow" }}
        icon="account"
        mode="outlined"
        //onPress={registrarUsuario}
        labelStyle={{ color: "black" }}
      >
        REGISTRAR
      </Button>


      
    </View>
  );
}