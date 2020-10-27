import React, { useState, useContext } from 'react';
import { TextInput, KeyboardAvoidingView, ActivityIndicator, TouchableOpacity, 
    StyleSheet, Image, Text, Platform, StatusBar } from 'react-native';
import styled from 'styled-components';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { useNavigation } from '@react-navigation/native';
import logo from '../assets/logo.png';
import { AuthContext } from '../contexts/auth';

export default function Home(){
    const navigation = useNavigation();
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');

    const { logar, loadingAuth } = useContext(AuthContext);

    function handleLogin(){
        logar(email, password);
    }

    return(
        <KeyboardAvoidingView 
            behavior="padding"
            enabled={Platform.OS === 'ios'}
            style={styles.container}
        >
            <StatusBar backgroundColor="transparent" barStyle="light-content" translucent={true}/>
            <WhiteContainer style={styles.whiteContainer}>
                <Image source={logo}/>  
                <TextInput 
                    autoCapitalize="none"
                    placeholder="Email"
                    autoCorrect={false}
                    placeholderTextColor="#999"
                    style={styles.userInput}   
                    value={email} 
                    onChangeText={ (text) => setEmail(text) } 
                />
                <TextInput 
                    autoCapitalize="none"
                    placeholder="Senha"
                    autoCorrect={false}
                    placeholderTextColor="#999"
                    style={styles.passInput}   
                    value={password} 
                    onChangeText={ (text) => setPassword(text) }
                    secureTextEntry={true}
                />
                <TouchableOpacity style={styles.button} onPress={handleLogin}>
                    {
                        loadingAuth ? (
                            <ActivityIndicator size={25} color="#FFF"/>
                        ) : (
                            <Text style={styles.buttonText}>Entrar</Text>
                        )
                    }            
                </TouchableOpacity>
                
                <TouchableOpacity 
                    style={styles.link} 
                    onPress={ () => navigation.navigate('Cadastro')}
                >
                    <Text style={{color: '#999'}}>Criar nova conta!</Text>
                </TouchableOpacity>
            </WhiteContainer>
        </KeyboardAvoidingView> 
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#00488B',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 25,
        paddingTop: 0 + getStatusBarHeight(),
    }, 
    whiteContainer: {
        flex: 0,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 22,
        height: 460,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#999',
    }, 
    userInput: { 
        height: 54,
        alignSelf: 'stretch',
        backgroundColor: '#FFF',
        borderWidth: 1,
        borderColor: '#DDD',
        borderRadius: 6,
        marginTop: 30,
        paddingHorizontal: 15,
    },
    passInput: {
        height: 54,
        alignSelf: 'stretch',
        backgroundColor: '#FFF',
        borderWidth: 1,
        borderColor: '#DDD',
        borderRadius: 6,
        marginTop: 15,
        paddingHorizontal: 15,
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
    },
    link: {
        marginTop: 20,
        marginBottom: 5,
    }
});

const WhiteContainer = styled.View`
    width: 102%;
`;
