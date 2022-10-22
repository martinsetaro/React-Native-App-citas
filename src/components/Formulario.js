import React,{useState,useEffect} from 'react'
import {
Modal,
Text,
SafeAreaView,
StyleSheet,
TextInput ,
 View,
 ScrollView,
 Pressable,
 Alert
}from 'react-native'

import DatePicker from 'react-native-date-picker'




const Formulario = ({
    modalVisible,
    setModalVisible,
    setPacientes,
    pacientes,
    paciente : pacienteObj,
    setPaciente: setPacienteApp
    }) => {

    const [paciente,setPaciente]= useState('')
    const [id,setId]= useState('')
    const [propietario,setPropietario]= useState('')
    const [email,setEmail]= useState('')
    const [telefono,setTelefono]= useState('')
    const [fecha,setFecha] = useState(new Date())
    const [sintomas,setSintomas]= useState('')


    useEffect(()=>{

          if(Object.keys(pacienteObj).length > 0){
            setId(pacienteObj.id)
            setPaciente(pacienteObj.paciente)
            setPropietario(pacienteObj.propietario)
            setEmail(pacienteObj.email)
            setFecha(pacienteObj.fecha)
            setSintomas(pacienteObj.sintomas)
            setTelefono(pacienteObj.telefono)
          }



    },[pacienteObj])

const handleCita = () =>{
    if([paciente,propietario,email,fecha,sintomas].includes('')){
      Alert.alert(
        'Error',
        'Todos los campos son obligatorios',
        [{text: 'Ok'}]
      )
      return
    }

    //revisar registro nuevo o edicion
const nuevoPaciente = {
        paciente,
        propietario,
        email,
        telefono,
        fecha,
        sintomas
    }

    if(id){

    nuevoPaciente.id = id
    const pacientesActualizados = pacientes.map(pacienteState => pacienteState.id === nuevoPaciente.id ? nuevoPaciente : pacienteState)
    
    
    setPacientes(pacientesActualizados)
    setPacienteApp({})




    }else 
    {
   nuevoPaciente.id = Date.now()
   setPacientes([...pacientes,nuevoPaciente])
    }

    
   
    setModalVisible(false)
    setId('')
    setPaciente('')
    setPropietario('')
    setTelefono('')
    setFecha(new Date())
    setSintomas('')
    setEmail('')

}





  return (
    <Modal
    animationType='slide'
    visible={modalVisible}
    >
        <SafeAreaView style={style.contenido}>
            <ScrollView>
            <Text style={style.titulo}>
                {pacienteObj.id ? 'Editar' : 'Nueva'} {''}
                <Text style={style.subTitulo}>Cita</Text>
            </Text>

            <Pressable
             style={style.btnCancelar}
                onPress={()=>{
                setPacienteApp({})
                setModalVisible(false)
                setId('')
                setPaciente('')
                setPropietario('')
                setTelefono('')
                setFecha(new Date())
                setSintomas('')
                setEmail('')
            }}
             >
                 <Text style={style.btnCancelarTexto}>X Cancelar</Text>
            </Pressable>

            <View style={style.campo}>
                <Text style={style.label}>Nombre Paciente</Text>
                <TextInput
                style={style.input}
                placeholder='Ingrese Nombre de paciente'
                placeholderTextColor={'#668'}
                value={paciente}
                onChangeText={setPaciente}
                />
            </View>
            <View style={style.campo}>
                <Text style={style.label}>Nombre Propietario</Text>
                <TextInput
                style={style.input}
                placeholder='Ingrese nombre propietario'
                placeholderTextColor={'#668'}
                value={propietario}
                onChangeText={setPropietario}
                />
            </View>
            <View style={style.campo}>
                <Text style={style.label}>Email Propietario</Text>
                <TextInput
                style={style.input}
                placeholder='Ingrese mail'
                placeholderTextColor={'#668'}
                keyboardType='email-address'
                value={email}
                onChangeText={setEmail}
                />
            </View>

            <View style={style.campo}>
                <Text style={style.label}>Telefono Propietario</Text>
                <TextInput
                style={style.input}
                placeholder='Ingrese telefono'
                placeholderTextColor={'#668'}
                keyboardType='decimal-pad'
                value={telefono}
                onChangeText={setTelefono}
                maxLength={12}
                />
            </View>
            <View style={style.campo}>
                <Text style={style.label}>Fecha Alta</Text>
                <View style={style.fechaContenedor}>
                <DatePicker androidVariant = 'iosClone'
                textColor='black'
                date = {fecha} // asignar fecha con new Date() en un estado.
                locale='es' // cambiar idioma al picker.
                onDateChange={(date) => setFecha(date)} // para guardar la fecha elegida.
                />
                </View>
            </View>

            <View style={style.campo}>
                <Text style={style.label}>Sintomas paciente</Text>
                <TextInput
                style={style.input}
                placeholder='Ingrese sintomas'
                placeholderTextColor={'#668'}
                value={sintomas}
                onChangeText={setSintomas}
                multiline={true}
                numberOfLines={4}
                />
            </View>

           <Pressable 
           
           onPress={handleCita}
           style={style.agregarCita}>
            <Text style={style.agregarCitaTexto}>
            {pacienteObj.id ? 'Editar' : 'Agregar'} Paciente</Text>
           </Pressable>

        </ScrollView>
        </SafeAreaView>
     
    </Modal>
  )

}


const style = StyleSheet.create({
    contenido:{
      flex:1,
      backgroundColor:'#4111e6',
    },
    titulo:{
         fontSize:30,
         fontWeight:'600',
         textAlign:'center',
        marginTop:30,
        color:'#fff',  
     },
    subTitulo:{
         fontWeight:'900',

    },
    btnCancelar:{
     marginTop:20,
     backgroundColor:"#5827a4",
     marginHorizontal:30,
     padding:20,
     borderRadius:10,
     borderWidth:1,
     borderColor:"#fff",
    },
    btnCancelarTexto:{
          color:"#fff",
          textAlign:'center',
          fontWeight:'900',
          textTransform:'uppercase',
          fontSize:16,
    },
    campo:{
         marginTop:10,
         marginHorizontal: 30,
        
    },
    
    input:{
        backgroundColor:'#fff',
        padding:15,
        borderRadius:10,
        color:'#1e1e1e',
       

    },
    label:{
      color:'#fff',
      marginBottom:10,
      marginTop:15,
      fontSize:20,
      fontWeight:'600',
    },
    fechaContenedor:{
        backgroundColor:"#fff",
          
    },
    agregarCita:{
         backgroundColor:"#e66311",
         marginTop:30,
         marginBottom:20,
         marginHorizontal:30,
         padding:20,
         borderRadius:10,

    },
    agregarCitaTexto:{
         textAlign:'center',
         fontSize:20,
         textTransform:'uppercase',
         fontWeight:'bold',
         color:"#fff",
    }
})





export default Formulario