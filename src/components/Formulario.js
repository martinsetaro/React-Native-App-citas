import React,{useState} from 'react'
import {
Modal,
Text,
SafeAreaView,
StyleSheet,
TextInput ,
 View,
 ScrollView,
 Pressable
}from 'react-native'

import DatePicker from 'react-native-date-picker'




const Formulario = ({modalVisible,setModalVisible}) => {

    const [paciente,setPaciente]= useState('')
    const [propietario,setPropietario]= useState('')
    const [email,setEmail]= useState('')
    const [telefono,setTelefono]= useState('')
    const [fecha,setFecha] = useState(new Date())
    const [sintomas,setSintomas]= useState('')







  return (
    <Modal
    animationType='slide'
    visible={modalVisible}
    >
        <SafeAreaView style={style.contenido}>
            <ScrollView>
            <Text style={style.titulo}>Nueva {''}
                <Text style={style.subTitulo}>Cita</Text>
            </Text>

            <Pressable
             style={style.btnCancelar}
             onPress={()=> setModalVisible(false)}
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
                <DatePicker
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
           







        </ScrollView>
        </SafeAreaView>
     
    </Modal>
  )

}


const style = StyleSheet.create({
    contenido:{
      flex:1,
      backgroundColor:'#6d28d9'
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
        borderRadius:10,
    }
})





export default Formulario