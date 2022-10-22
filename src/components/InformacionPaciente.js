import React from 'react'
import {
Text,
SafeAreaView,
StyleSheet,
View,
Pressable
} from 'react-native'
import { formatearFecha} from '../helpers'




const InformacionPaciente = ({paciente,setModalPaciente,setPaciente}) => {




  return (
    <SafeAreaView
    style={style.contenedor}
    >
        
          <Text style={style.titulo}>Informacion {''}
          <Text style={style.subTitulo}>Pacientes</Text>
          </Text>
          <View>
            <Pressable
            style={style.btnCancelar}
            onPress={() => {
                setPaciente({})
                setModalPaciente(false)}}
            >
                <Text style={style.btnCancelarTexto}>Cerrar X</Text>
            </Pressable>
        </View>

        <View style={style.contenido}>
            <Text style={style.label}>Nombre:</Text>
            <Text style={style.nombre}>{paciente.paciente}</Text>
        </View>
        <View style={style.contenido}>
            <Text style={style.label}>Propietario:</Text>
            <Text style={style.nombre}>{paciente.propietario}</Text>
        </View>
        <View style={style.contenido}>
            <Text style={style.label}>Telefono:</Text>
            <Text style={style.nombre}>{paciente.telefono}</Text>
        </View>
        <View style={style.contenido}>
            <Text style={style.label}>Email:</Text>
            <Text style={style.nombre}>{paciente.email}</Text>
        </View>
        <View style={style.contenido}>
            <Text style={style.label}>Fecha Alta:</Text>
            <Text style={style.nombre}>{formatearFecha(paciente.fecha)}</Text>
        </View>
        <View style={style.contenido}>
            <Text style={style.label}>Sintomas:</Text>
            <Text style={style.nombre}>{paciente.sintomas}</Text>
        </View>
         
    </SafeAreaView>
  )
}
 const style = StyleSheet.create({
    titulo:{
     color:'#1e1e1e',
     fontSize: 20,
     textAlign:'center',
     color:'#fff',
     marginTop:20,
    },
    subTitulo:{
         fontWeight:'700',
         
    },
    contenedor:{
        backgroundColor:'#F59E0b',
        flex:1,
    },
    btnCancelar:{
        marginTop:20,
        backgroundColor:"#e06900",
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
       contenido:{
       backgroundColor:'#fff',
       marginHorizontal:20,
       marginTop:20,
       marginBottom:-20,
       padding:10,
       shadowColor: "#000",
        shadowOffset: {
	    width: 0,
	    height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,

         elevation: 10,
        

       },
       nombre:{
      fontWeight:'700',
      fontSize:20,
      color:'#334155'
       },
       label:{
       textTransform:'uppercase',
       color:'#374151',
       fontWeight:'600',
       }
 })

export default InformacionPaciente