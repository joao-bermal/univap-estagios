import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import firebase from '../services/firebaseConnection';
import { useNavigation } from '@react-navigation/native';

console.disableYellowBox = true;

export default function App(){
  const navigation = useNavigation();
  const [empresa, setEmpresa] = useState('');
  const [curso, setCurso] = useState('');
  const [descrição, setDescrição] = useState('');
  const [requisitos, setRequisitos] = useState('');
  const [salário, setSalário] = useState('');
  const [link, setLink] = useState('');
  const [email, setEmail] = useState('');
  const [data, setData] = useState('');

  async function cadastrar(){
    if(empresa !== '' & curso !== '' & descrição !== '' & requisitos !== '' & salário !== '' & link !== '' & email !== '' & data !== ''){
      let propostas = await firebase.database().ref('propostas');
      let chave = propostas.push().key;
      propostas.child(chave).set({
        empresa: empresa,
        curso: curso,
        descrição: descrição,
        requisitos: requisitos,
        salário: salário,
        link: link,
        email: email,
        data: data,
      });

      alert('Cadastrado com sucesso!');
      setEmpresa('');
      setCurso('');
      setDescrição('');
      setRequisitos('');
      setSalário('');
      setLink('');
      setEmail('');
      setData('');
    }
  }

  return(
    <View style={styles.container}>
      <View style={styles.whiteContainer}>
      <Text style={styles.texto}>Empresa</Text>
      <TextInput
      style={styles.input}
      underlineColorAndroid="transparent"
      onChangeText={(texto) => setEmpresa(texto) }
      value={empresa}
      />

      <Text style={styles.texto}>Curso</Text>
      <TextInput
      style={styles.input}
      underlineColorAndroid="transparent"
      onChangeText={(texto) => setCurso(texto) }
      value={curso}
      />

      <Text style={styles.texto}>Descrição</Text>
      <TextInput
      style={styles.input}
      underlineColorAndroid="transparent"
      onChangeText={(texto) => setDescrição(texto) }
      value={descrição}
      />

      <Text style={styles.texto}>Requisitos</Text>
      <TextInput
      style={styles.input}
      underlineColorAndroid="transparent"
      onChangeText={(texto) => setRequisitos(texto) }
      value={requisitos}
      />

      <Text style={styles.texto}>Salário</Text>
      <TextInput
      style={styles.input}
      underlineColorAndroid="transparent"
      onChangeText={(texto) => setSalário(texto) }
      value={salário}
      />

      <Text style={styles.texto}>Link</Text>
      <TextInput
      style={styles.input}
      underlineColorAndroid="transparent"
      onChangeText={(texto) => setLink(texto) }
      value={link}
      />

      <Text style={styles.texto}>Email</Text>
      <TextInput
      style={styles.input}
      underlineColorAndroid="transparent"
      onChangeText={(texto) => setEmail(texto) }
      value={email}
      />

      <Text style={styles.texto}>Data</Text>
      <TextInput
      style={styles.input}
      underlineColorAndroid="transparent"
      onChangeText={(texto) => setData(texto) }
      value={data}
      />

      <Button
        title="Nova Proposta"
        onPress={cadastrar}
      />
      <Button
        title="Listar"
        onPress={() => navigation.navigate('Propostas')}
      />
      <Button
        title="Home"
        onPress={() => navigation.navigate('Home')}
      />

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#00488B',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 25
  },
  texto: {
    fontSize: 16,
  },
  input:{
    marginBottom: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#121212',
    height: 45,
    fontSize: 17
  },
  whiteContainer: {
    flex: 0,
    backgroundColor: '#fff',
    padding: 25,
    height: 780,
    width: 365,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#999',
  }
    
});