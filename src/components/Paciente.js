import { 
    Text,
    View ,
    StyleSheet,
    Pressable
 } from 'react-native'
 import { formatearFecha } from '../helpers'

const Paciente = ({
    item,
    setModalVisible,
    pacienteEditar,
    pacienteEliminar,
    setModalPaciente,
    setPaciente
}) => {
    
    const {paciente,fecha, id } = item

    
  return (
    <Pressable
    onPress={() => {
        setPaciente(item)
        setModalPaciente(true)}}
    >
    <View style={style.contenedor}>
        <Text style={style.label}>Paciente:</Text>
        <Text style={style.texto}>{paciente}</Text>
        <Text style={style.fecha}>{formatearFecha(fecha)}</Text>
    <View style={style.contenedorBotones}>

        <Pressable 
        style={[style.btn , style.btnEditar]}
        onPress={() => {
            setModalVisible(true)
            pacienteEditar(id)
        }}
        >
            <Text style={style.btnTexto}>Editar</Text>
        </Pressable > 

        <Pressable
         onPress = {()=> pacienteEliminar(id)}
         style={[style.btn , style.btnEliminar]}>
            <Text style={style.btnTexto}>Eliminar</Text>
        </Pressable>        
    </View>


    </View>
    </Pressable>
   
   
  )
}

const style = StyleSheet.create({
    contenedor:{
       backgroundColor:'#fff',
       padding:20,
       borderBottomColor:'#94a3b8',
       borderBottomWidth:1,
    },
    label:{
     color:'#374151',
     textTransform:'uppercase',
     fontWeight: '700',
     marginBottom:10,
    },
    texto:{
    color:'#6d28d9',
    fontSize:24,
    fontWeight:'700',
    marginBottom:10,
    },
    fecha:{
        color:'#6d28d9'

    },
    contenedorBotones:{
     flexDirection: 'row',
     justifyContent:'space-between',
     marginTop:20,
    },
    btn:{
        paddingVertical:5,
        paddingHorizontal:20,
        borderRadius:5

    },
    btnEditar:{
        backgroundColor:'#f59e0b',

    },
    btnEliminar:{
backgroundColor:'#ef4444',
    },
    btnTexto:{
        textTransform:'uppercase',
        fontWeight:'700',
        fontSize:12,
        color:'#fff',
    }

})

export default Paciente