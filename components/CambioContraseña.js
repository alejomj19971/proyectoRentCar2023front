import { View,Picker} from "react-native";
import { useState } from "react";
import { styles } from "../assets/styles/allstyles";
import { TextInput, Button,Select,Icon, MD3Colors,Text} from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import Login from './Login'


export default function CambioContraseña() {
  const navigation = useNavigation();
  const [username, setUsername] = useState("");
  const [palabrareservada, setPalabrareservada] = useState("");
  const [nuevacontraseña, setNuevacontraseña] = useState("")
  const [showPass,setShowPass]=useState(false);


  const irAInicio=()=>{
    navigation.navigate('Login');
  }
                                          


return (
  
  <View style={styles.container}>
  <View style={{padding:40,backgroundColor:'#FFFFFF',borderCurve:'continuous',borderRadius:20,border:'none',shadowRadius:2,shadowColor:'#6366f1'}}>
    <Text variant="titleLarge" style={{marginBottom:10,marginTop:10,fontSize:25,color:'#f16366',textAlign:'center'}}>Restablecer Contraseña</Text>
  <TextInput
    label="Usuario"
    mode="outlined"
    textColor="#333333"
    activeOutlineColor="#6366f1"
    onChangeText={(userName) => setUsername(userName)}
    right={<TextInput.Icon icon="account" />}
  />


<TextInput
    style={{ marginTop: 10 }}
    label="Palabra reservada"
    mode="outlined"
    textColor="#333333"
    activeOutlineColor="#6366f1"
    onChangeText={(palabrareservada) => setPalabrareservada(palabrareservada)}
    secureTextEntry={!showPass}
    right={
      <TextInput.Icon
        icon={showPass ? "eye" : "eye-off"}
        onPress={() => setShowPass(!showPass)}
      />} />

  <TextInput
    style={{ marginTop: 10 }}
    label="Nueva Contraseña"
    mode="outlined"
    textColor="#333333"
    activeOutlineColor="#6366f1"
    onChangeText={(nuevacontraseña) => setNuevacontraseña(nuevacontraseña)}
    secureTextEntry={!showPass}
    right={
      <TextInput.Icon
        icon={showPass ? "eye" : "eye-off"}
        onPress={() => setShowPass(!showPass)}
      />} />


  <Button
    style={[{ marginTop: 20, backgroundColor: "#6366f1",border:'none' }]}
    icon="send"
    
    mode="outlined"
    //onPress={registrarUsuario}
    labelStyle={{ color: "white" }}
  >
    Guardar Cambios
  </Button>

  <Text
    style={{ marginTop: 20, backgroundColor: "#ffffff",border:'none',color:'#6366f1',textAlign:'center' }}
    icon="send"
    mode="outlined"
    onPress={irAInicio}
    //onPress={registrarUsuario}
    labelStyle={{ color: "white" }}
  >
    Iniciar Sesion
  </Text>


</View>
</View>
  );
}