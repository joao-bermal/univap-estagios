import React, { useState, useEffect, useContext } from 'react';
import { View, StyleSheet, TouchableOpacity, FlatList, ActivityIndicator, Text, Linking } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import firebase from '../services/firebaseConnection';
import Listagem from './Listagem';
import { AuthContext } from '../contexts/auth';

console.disableYellowBox = true;

export default function App(){
  const navigation = useNavigation();
  const [propostas, setPropostas] = useState([]);
  const [loading, setLoading] = useState(true);
  const { user, sair } = useContext(AuthContext);

  useEffect(()=> {

    async function select(){
      await firebase.database().ref('propostas').on('value', (snapshot)=> {
        setPropostas([]);
        snapshot.forEach((chilItem) => {
          let data = {
            key: chilItem.key,
            empresa: chilItem.val().empresa,
            curso: chilItem.val().curso,
            descrição: chilItem.val().descrição,
            requisitos: chilItem.val().requisitos,
            salário: chilItem.val().salário,
            link: chilItem.val().link,
            email: chilItem.val().email,
            data: chilItem.val().data,
          };

          setPropostas(oldArray => [...oldArray, data].reverse());
        })

        setLoading(false);
      })
    }
    select();

  }, []);

  return(
    <View style={styles.container}>
      {loading ? 
      (
        <ActivityIndicator color="#121212" size={45} />
      ) :
      (
        <FlatList
          keyExtractor={item => item.key}
          data={propostas}
          renderItem={ ({item}) => ( <Listagem data={item} /> )  }
        />
      )
      }
      <TouchableOpacity onPress={() => Linking.openURL('mailto:support@example.com') }
        title="support@example.com">
          <Text>OI</Text>
      </TouchableOpacity>
      <TouchableOpacity 
        style={styles.button} 
        onPress={ sair }
      >
        <Text style={styles.buttonText}>Voltar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#00488B',
    padding: 25
  },
  button: {
    height: 54,
    alignSelf: 'stretch',
    backgroundColor: '#00488B',
    borderRadius: 6,
    marginTop: 15,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 16,
  }
});
