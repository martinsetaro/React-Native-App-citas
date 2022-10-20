

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
  Pressable,Modal
} from 'react-native';
import Formulario from './src/components/Formulario';

const App = () =>  {

   const [clientes,setClientes] = useState([])
   const [modalVisible,setModalVisible] = useState(false)

  

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
      <Formulario
      modalVisible = {modalVisible}
      setModalVisible = {setModalVisible}
      />
   </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container:{
    backgroundColor:'#f3f4f6',
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
  }
})



export default App;
