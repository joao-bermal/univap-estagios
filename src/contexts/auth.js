import React, { useState, createContext, useEffect } from 'react';
import firebase from '../services/firebaseConnection';
import AsyncStorage from '@react-native-community/async-storage';

export const AuthContext = createContext({});

function AuthProvider({ children }){
  const [ user, setUser ] = useState(null);
  const [loading, setLoading] = useState(true);
  const [loadingAuth, setLoadingAuth ] = useState(false);

  useEffect(() => {
    async function loadStorage(){
      const storageUser = await AsyncStorage.getItem('Auth_user');

      if(storageUser){
        setUser(JSON.parse(storageUser));
        setLoading(false);
      }

      setLoading(false);
    }
    loadStorage();
 }, []);

  async function logar(email, password){
    setLoadingAuth(true);
    await firebase.auth().signInWithEmailAndPassword(email,password)
    .then(async (value) => { 
      let uid = value.user.uid;
      await firebase.database().ref('alunos').child(uid).once('value')
      .then((snapshot) => {
        let data = {
          uid: uid,
          email: snapshot.val().email,
          matrícula: snapshot.val().matrícula,
          nome: snapshot.val().nome,
          curso: snapshot.val().curso,
          ano: snapshot.val().ano,
        };
        setUser(data);
        storageUser(data);
        setLoadingAuth(false);
      })
    })
    .catch((error)=> {
      alert(error.code)
      setLoadingAuth(false);
    });
  } 

  async function cadastrar(email, password, matrícula, nome, curso, ano){
    setLoadingAuth(true);
    await firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(async (value) => {
      let uid = value.user.uid;
      await firebase.database().ref('alunos').child(uid).set({
        email: email,
        matrícula: matrícula,
        nome: nome,
        curso: curso,
        ano: ano,
      })
      .then(() => {
        let data = {
          uid: uid,
          email: email,
          matrícula: matrícula,
          nome: nome,
          curso: curso,
          ano: ano,
        };
        setUser(data);
        storageUser(data);
        setLoadingAuth(false);
      })
    })
    .catch((error) => {
      alert(error.code);
      setLoadingAuth(false);
    });
  }

  async function sair(){
    await firebase.auth().signOut();
    await AsyncStorage.clear()
    .then( () => {
      setUser(null);
    })

  }

  async function storageUser(data){
    await AsyncStorage.setItem('Auth_user', JSON.stringify(data));
  }

  return(
    <AuthContext.Provider value={{ signed: !!user, user, loading, loadingAuth, cadastrar, logar, sair }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;