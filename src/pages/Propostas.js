import React, { useState, useEffect, useContext } from 'react';
import { StatusBar, ScrollView, View, StyleSheet, TouchableOpacity, FlatList, ActivityIndicator, Text } from 'react-native';
import firebase from '../services/firebaseConnection';
import Listagem from './Listagem';
import { AuthContext } from '../contexts/auth';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';

console.disableYellowBox = true;

export default function App(){
  const [propostas, setPropostas] = useState([]);
  const [loading, setLoading] = useState(true);
  const { sair } = useContext(AuthContext);
  const navigation = useNavigation();

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
    <>
      <StatusBar backgroundColor="transparent" barStyle="light-content" translucent={true}/>
      <View style={styles.areaView}>
        <Container>
          <ButtonMenu onPress={ () => navigation.toggleDrawer() }>
            <Icon name="menu" color="#FFF" size={30} />
          </ButtonMenu>
        </Container>
        <ScrollView>
          <View style={{alignItems: 'center'}}>
            {loading ? 
            (
              <ActivityIndicator color="#121212" size={45} />
            ) :
            (
              <FlatList
                keyExtractor={item => item.key}
                data={propostas}
                renderItem={ ({item}) => ( <Listagem data={item} /> ) }
              />
            )
            }
          </View>
          <View style={{alignItems: 'center'}}>
            {loading ? 
            (
              <ActivityIndicator color="#121212" size={45} />
            ) :
            (
              <FlatList
                keyExtractor={item => item.key}
                data={propostas}
                renderItem={ ({item}) => ( <Listagem data={item} /> ) }
              />
            )
            }
          </View>
        </ScrollView>
        <TouchableOpacity 
          style={styles.button} 
          onPress={ sair }
        >
          <Text style={styles.buttonText}>Voltar</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  areaView:{
    flex: 1,
    backgroundColor: '#00488B',
    padding: 5,
    justifyContent: 'flex-start',
  }
});

const Container = styled.View`
  justify-content: flex-start;
  align-items: flex-start;
  margin-top: 30px;
  margin-left: 25px;
  margin-bottom: 10px;
  background-color: #00488B;
`;

const ButtonMenu = styled.TouchableWithoutFeedback`
  justify-content: center;
  align-items: center;
`;