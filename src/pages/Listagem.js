import React from 'react'
import {View, Text, StyleSheet, Button} from 'react-native';

export default function Listagem({ data }){
  return(
      <View style={styles.whiteContainer}>
        <Text>{data.empresa}</Text>
        <Text>{data.curso}</Text>
        <Text>{data.descrição}</Text>
        <Text>{data.requisitos}</Text>
        <Text>{data.salário}</Text>
        <Text>{data.link}</Text>
        <Text>{data.email}</Text>
        <Text>{data.data}</Text>
      </View>
      
  )
}

const styles = StyleSheet.create({
  whiteContainer: { 
    flex: 0,
    backgroundColor: '#fff',
    padding: 15,
    height: 100,
    width: 340,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#999',
    marginTop: 30,
  },
  text: {
    
  }
});