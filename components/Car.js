import { View,Picker, ProgressBarAndroid} from "react-native";
import { useState } from "react";
import { styles } from "../assets/styles/allstyles";
import { TextInput, Button,Text,Checkbox } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { DatePickerInput } from 'react-native-paper-dates';
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useForm, Controller } from 'react-hook-form';
import axios from 'axios'
const Car = () => {
  //UseState
    const [errormessage, setErrorMessage] = useState(false);
    const [message, setMessage] = useState(''); 
    const [checked, setChecked] = useState(false);


    //Controlador
    const {control,handleSubmit,formState: { errors },reset,setValue,} = useForm({
    defaultValues: {
      platenumber: "",
      brand: "",
      created:"",
      dailyvalue: ""
    },
  });


  // Funciones navegación



  // Funciones 

  const registrarCarro = async (data) => {
    const {created,platenumber,brand,dailyvalue}=data

    let fecha1= Date.parse(data.created)
    fecha1=new Date(fecha1)
    let pago = Number.parseFloat(dailyvalue)

    const datos ={
  
      platenumber: platenumber,
      brand: brand,
      state: checked,
      created:fecha1,
      dailyvalue: pago
  
    }
  
  
      try {
  
        const response = await axios.post(`http://127.0.0.1:7000/api/cars/crearcar`,datos);
        console.log(response.data.error)
        if (response.data.error==false) 
        { 
            setErrorMessage(false);
            setMessage('Registro Exitoso');
            reset();
            setTimeout(() => {
              setMessage('');
          }, 2000)
         
        }
        else {
            setErrorMessage(true);
            setMessage("Este automóvil ya existe")
            setTimeout(() => {
                setMessage('');
            }, 2000)
  
        }
    } catch (error) {
        console.log(error)
        
    }
    finally {
    }
    }
   
  

  

  return (
    <View style={styles.container}>
      <View style={{padding:40,backgroundColor:'#FFFFFF',borderCurve:'continuous',borderRadius:20,border:'none',shadowRadius:2,shadowColor:'#6366f1'}}>
        <Text variant="titleLarge" style={{marginBottom:10,marginTop:10,fontSize:25,color:'#f16366',textAlign:'center'}}>Vehiculo</Text>
        
        <Text style={{marginBottom :5, margintTop:5,textAlign:'center', color:errormessage?'#f16366':'#66f169'  }}>
        {message}
        </Text>

{/* placa */}
        <Controller
        control={control}
        rules={{ required: true,
          minLenght: 6,
          maxLength:6,
          pattern:/[A-Z]{3}[0-9]{3}/g
         }}
        render={({ field: { onChange, onBlur, value } }) => (
      <TextInput
        onBlur={onBlur}
        onChangeText={onChange}
        value={value}
        label="Placa"
        mode="outlined"
        textColor="#333333"
        activeOutlineColor="#6366f1"

        right={<TextInput.Icon icon="car" />}
      />
      )}
        name="platenumber"
      />  
    {errors.platenumber?.type==="required" && <Text style={{color:'#f16366',marginTop:3,textAlign:'center'}}>Este Campo es Obligatorio</Text>}
    {errors.platenumber?.type==="pattern" && <Text style={{color:'#f16366',marginTop:3,textAlign:'center'}}>La placa debe tener 3 letras mayúsculas y 3 números ejm :"DDD-123"</Text>}
    {errors.platenumber?.type==="maxLength" && <Text style={{color:'#f16366',marginTop:3,textAlign:'center'}} >La placa tiene máximo 6 caracteres </Text>}
    {errors.platenumber?.type==="minLenght" && <Text style={{color:'#f16366',marginTop:3,textAlign:'center'}}>La placa tiene mínimo 6 caracteres </Text>}

    {/*Brand*/}
    <Controller
        control={control}
          rules={{
               
                required: true,
                pattern: /^[A-Za-zÁÉÍÓÚáéíóúñÑ ]+$/g
                
              }}
          render={({ field: { onChange, onBlur, value } }) => (
      <TextInput
        onBlur={onBlur}
        onChangeText={onChange}
       value={value}
        style={{ marginTop: 10 }}
        label="Marca"
        textColor="#333333"
        mode="outlined"
        activeOutlineColor="#6366f1"
        
        right={<TextInput.Icon icon="tag" />}
      />
      )}
       name="brand"
      />
   
      {errors.brand?.type==="required" && (
        <Text style={{color:'#f16366',marginTop:3,textAlign:'center'}}>La marca del vehiculo es obligatoria.</Text>
      )}
      {errors.brand?.type === 'pattern' && <Text style={{color:'#f16366',marginTop:3,textAlign:'center'}}>Escriba una marca solo con Letras y espacios</Text>}

  

      {/*Dailyvalue*/}
      <Controller
      control={control}
        rules={{
          required: true,
          pattern: /^[0-9]+$/g}}
          render={({ field: { onChange, onBlur, value } }) => (
    <TextInput
        onBlur={onBlur}
        onChangeText={onChange}
        value={value}
        style={{ marginTop: 10 }}
        label="Valor diario"
        textColor="#333333"
        mode="outlined"
        activeOutlineColor="#6366f1"
        right={<TextInput.Icon icon="credit-card" />}
      />
      )}
            name="dailyvalue"
        />
      {errors.dailyvalue?.type === 'required' && <Text style={{color:'#f16366',marginTop:3,textAlign:'center'}} >Este Campo es Obligatorio</Text>}
       {errors.dailyvalue?.type === 'pattern' && <Text style={{color:'#f16366',marginTop:3,textAlign:'center'}}>Escriba un precio solo con numeros</Text>}


      {/*Created*/}
       
    <Controller
         control={control}
         rules={{
         required: true,
       
         }}
         render={({ field: { onChange, onBlur, value } }) => (

   
     <View 
     style={{marginTop:10}}>
     <SafeAreaProvider>
     <DatePickerInput
       mode="outlined"
       locale="es"
       label="Creado "
       value={value}
       onChange={onChange}
       onBlur={onBlur}
       inputMode="start"
     />
     </SafeAreaProvider>
     </View>
    
     )}
       name="created"
     />
     {errors.created?.type==="required" && <Text>Este Campo es Obligatorio</Text>}


         {/*State*/}
      
      <Checkbox.Item 
      label="Activo"
      labelStyle={{fontSize:20 ,color:'#333333'}}
      color="#6366f1"
      uncheckedColor="#B3B3B3"
      status={checked ? 'checked' : 'unchecked'}
      onPress={() => {
        setChecked(!checked);
      }} />
   


      <Button
        style={[{ marginTop: 20, backgroundColor: "#6366f1",border:'none' }]}
        icon="send"
        mode="outlined"
        onPress={handleSubmit(registrarCarro)}
        labelStyle={{ color: "white" }}
      >
        REGISTRAR VEHICULO
      </Button>

      <Text
    style={{ marginTop: 20, backgroundColor: "#ffffff",border:'none',color:'#6366f1',textAlign:'center' }}
    icon="send"
    mode="outlined"
    //onPress={irAInicio}
    //onPress={registrarUsuario}
    labelStyle={{ color: "white" }}
  >
    Lista de Vehiculos
  </Text>

  </View>
  </View>
  )
}

export default Car