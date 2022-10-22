

import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button,
  Pressable,
  Modal,
  Image,
  FlatList,
  Alert
} from 'react-native';
import Formulario from './src/components/Formulario';
import Paciente from './src/components/Paciente';
import InformacionPaciente from './src/components/InformacionPaciente';

const App = () =>  {

   const [pacientes,setPacientes] = useState([])
   const [modalVisible,setModalVisible] = useState(false)
   const [paciente,setPaciente] = useState({})
   const [modalPaciente,setModalPaciente] = useState(false)

   const pacienteEditar = id => {
    const pacienteEditar = pacientes.filter (paciente => paciente.id === id)
    setPaciente(pacienteEditar[0])
   }

   const pacienteEliminar = id => {
    Alert.alert(
      'Deseas eliminar este paciente?',
      'Un paciente eliminado no se puede recuperar',
      [
        {text: 'Cancelar'},
        {text:'Si, Eliminar', onPress: () => {
          const pacientesActualizados = pacientes.filter(pacientesState => pacientesState.id != id)
          setPacientes(pacientesActualizados)
        }}
      ]
    )
   }

  

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.titulo}>Administrador de citas</Text>
      <Text style={styles.subTitulo}>Veterinaria</Text>
      <Pressable
      onPress={() => {setModalVisible(true)}}
      style={styles.btnNuevaCita}
      >
        <Text
        style={styles.btnTextNuevaCita}
        >Nueva Cita</Text>
      </Pressable>
  
  {pacientes.length === 0 ? <Image
     style={styles.imagenPortada}
     source={require('./src/img/veterinaria.jpg')}
     /> :
  <FlatList
  style={styles.listado}
  data={pacientes}
  keyExtractor={(item) => item.id}
  renderItem= {({item}) => {
    return (
       <Paciente
       pacienteEditar={pacienteEditar}
       setModalVisible={setModalVisible}
       setPaciente={setPaciente}
       item={item}
       pacienteEliminar={pacienteEliminar}
       setModalPaciente={setModalPaciente}
       />
  )
  }}
  
  />
  
  }



      <Formulario
      pacientes={pacientes}
      setPacientes={setPacientes}
      modalVisible = {modalVisible}
      setModalVisible = {setModalVisible}
      paciente={paciente}
      setPaciente={setPaciente}
      />

     <Modal
     visible={modalPaciente}
     animationType='fade'
     >

      <InformacionPaciente
      setModalPaciente={setModalPaciente}
      paciente={paciente}
      setPaciente={setPaciente}
      />
     </Modal>

   </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container:{
    backgroundColor:'#fff',
    flex:1 // ocupa toda la pantalla
  },
  titulo:{
    textAlign:'center',
    fontSize:30,
    color: '#374151',
    fontWeight:'bold',
    marginTop:10,
  },
  subTitulo : {
    textAlign:'center',
    fontSize:30,
    fontWeight:'bold',
    color: '#9040F1',
  },
  btnNuevaCita:{
    backgroundColor:'#6d28d9',
    padding:20,
    marginTop:20,
    marginLeft:20,
    marginRight:20,
    borderRadius:10
  },
  btnTextNuevaCita:{
     textAlign:'center',
     color:'#fff',
     fontWeight:'900',
     textTransform:'uppercase',
     fontSize:18,
  },
  imagenPortada:{
    width:'100%',
    height:500,
    
  },
  listado:{
    marginTop:50,
    marginHorizontal:30,
  }
  
})



export default App;
