import React, { useState, useEffect } from 'react'
import { Linking, StatusBar, Text, StyleSheet, TouchableOpacity, View, ScrollView, Image, useWindowDimensions } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import Modal from 'react-native-modal';

export default function Listagem({ data }){
  let [ icon, setIcon ] = useState('')
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const windowWidth = useWindowDimensions().width;
  const windowHeight = useWindowDimensions().height;

  function showModal(){
    if(isModalVisible){
      return (
        <View style={{flex: 1}}>
          <Modal 
            isVisible={isModalVisible} 
            style={{justifyContent: "center", alignItems: "center"}} 
            onRequestClose={toggleModal}
            onBackdropPress={toggleModal}
            backdropOpacity={0.6}
          >
            {//filtrar, xzinho, melhorar modal, sair
            }
            <StatusBar backgroundColor="#001c38" barStyle="light-content" translucent={true}/>
            <ScrollView style={styles.whiteModalContainer}>
              <View>
                <Text style={{marginTop: 10}}></Text>
                <Text style={styles.modalText1}>Empresa: </Text>
                <Text style={styles.modalText2}>{data.empresa}</Text>
              </View>
              <View>  
                <Text style={styles.modalText1}>Curso: </Text>
                <Text style={styles.modalText2}>{data.curso}</Text>
              </View>
              <View>
                <Text style={styles.modalText1}>Descrição: </Text>
                <Text style={styles.modalText2}>{data.descrição}</Text>
              </View>
              <View>
                <Text style={styles.modalText1}>Requisitos: </Text>
                <Text style={styles.modalText2}>{data.requisitos}</Text>
              </View>
              <View>
                <Text style={styles.modalText1}>Salário: </Text>
                <Text style={styles.modalText2}>R$ {data.salário}</Text>
              </View>
              <View>
                <Text style={styles.modalText1}>Link: </Text>
                <Text style={styles.modalText2}>{data.link}</Text>
              </View>
              <View>
                <Text style={styles.modalText1}>Email: </Text>
                <Text style={styles.modalText2}>{data.email}</Text>
              </View>
              <View>
                <Text style={styles.modalText1}>Data: </Text>
                <Text style={styles.modalText2}>{data.data}</Text>
              </View>
              <TouchableOpacity onPress={() => Linking.openURL(`mailto:${data.email}`) }
                title="support@example.com"
                style={styles.openEmailButton}
              >
                <Text>Abrir Email</Text>
              </TouchableOpacity>
            </ScrollView>
          </Modal>
        </View>
      );
    }
  }

  useEffect(() => {
    switchImage()
  }, []);

  function switchImage(){
    if (data.curso == "Administração")
      setIcon(require('../assets/cursos/administracao.png'));
    else if (data.curso == "Análises Clínicas")
      setIcon(require('../assets/cursos/analises.png'));
    else if (data.curso == "Eletrônica")
      setIcon(require('../assets/cursos/eletronica.png'));
    else if (data.curso == "Informática")
      setIcon(require('../assets/cursos/informatica2.png'));
    else if (data.curso == "Publicidade")
      setIcon(require('../assets/cursos/publicidade.png'));
    else if (data.curso == "Química")
      setIcon(require('../assets/cursos/quimica.png'));
  }
  
  const styles = StyleSheet.create({
    whiteContainer: { 
      flex: 1,
      backgroundColor: '#fff',
      padding: 15,
      height: 85,
      width: 330,
      borderRadius: 8,
      borderWidth: 1,
      borderColor: '#999',
      marginTop: 10,
      marginBottom: 20,
      alignItems: "center",
      flexDirection: "row",
      justifyContent: "space-between"
    },
    whiteModalContainer: {
      backgroundColor: '#fff',
      height: windowHeight * 0.9,
      width: windowWidth * 0.9,
      borderRadius: 8,
      borderWidth: 1,
      borderColor: '#999',
    },
    modalText1: {
      color: '#0e0872',
      marginTop: 15,
      marginLeft: 15,
      marginRight: 15,
      fontWeight: 'bold',
      fontSize: 18
    },
    modalText2: {
      marginTop: 5,
      marginLeft: 15,
      marginRight: 15,
      fontSize: 16
    },
    openEmailButton: {
      marginTop: 5,
      alignItems: 'center',
    },
    container: {
      flexDirection: "row",
      alignItems: "center",
    },
    imageContainer: {
      marginRight: 20,
    },
    empresaText: {
      fontSize: 17
    },
    cursoText:{
      color: '#AAABAD',
      fontSize: 14
    },
    image: {
      width: 50,
      height: 50,
      borderRadius: 60
    }
  });

  return(
    <>
    <StatusBar backgroundColor="transparent" barStyle="light-content" translucent={true}/>
    {showModal()}
    <View style={styles.whiteContainer}>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image source={icon} style={styles.image}/>
        </View>
        <View>
          <Text style={styles.empresaText}>{data.empresa}</Text>
          <Text style={styles.cursoText}>{data.curso}</Text>
        </View>
      </View>
      <TouchableOpacity onPress={() => toggleModal()}>
        <Icon name="right" size={22} color="#9999"/>
      </TouchableOpacity>
    </View>   
    </>
  )
}