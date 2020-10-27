import React, { useState, useContext } from 'react';
import { TextInput, KeyboardAvoidingView, TouchableOpacity, StyleSheet,
        Text, Platform, StatusBar, ActivityIndicator } from 'react-native';
import styled from 'styled-components';
import { AuthContext } from '../contexts/auth';

export default function Home(){
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ matrícula, setMatrícula ] = useState('');
    const [ nome, setNome ] = useState('');
    const [ curso, setCurso ] = useState('');
    const [ ano, setAno ] = useState('');

    const { cadastrar, loadingAuth } = useContext(AuthContext);

    function handleCadastro(){
        cadastrar(email, password, matrícula, nome, curso, ano);
    }
    return(
        <KeyboardAvoidingView 
            behavior="padding"
            enabled={Platform.OS === 'ios'}
            style={styles.container}
        >
            <StatusBar backgroundColor="transparent" barStyle="light-content" translucent={true}/>
            <WhiteContainer style={styles.whiteContainer}>

                <TextInput 
                    autoCapitalize="none"
                    placeholder="Email"
                    autoCorrect={false}
                    placeholderTextColor="#999"
                    style={styles.input}   
                    value={email} 
                    onChangeText={ (text) => setEmail(text) } 
                />
                <TextInput 
                    autoCapitalize="none"
                    placeholder="Senha"
                    autoCorrect={false}
                    placeholderTextColor="#999"
                    style={styles.input}   
                    value={password} 
                    onChangeText={ (text) => setPassword(text) }
                    secureTextEntry={true}    
                />
                <TextInput 
                    autoCapitalize="none"
                    placeholder="Matrícula"
                    autoCorrect={false}
                    placeholderTextColor="#999"
                    style={styles.input}   
                    value={matrícula} 
                    onChangeText={ (text) => setMatrícula(text) } 
                />
                <TextInput 
                    autoCapitalize="none"
                    placeholder="Nome"
                    autoCorrect={false}
                    placeholderTextColor="#999"
                    style={styles.input}   
                    value={nome} 
                    onChangeText={ (text) => setNome(text) } 
                />
                <TextInput 
                    autoCapitalize="none"
                    placeholder="Curso"
                    autoCorrect={false}
                    placeholderTextColor="#999"
                    style={styles.input}   
                    value={curso} 
                    onChangeText={ (text) => setCurso(text) }
                />
                <TextInput 
                    autoCapitalize="none"
                    placeholder="Ano"
                    autoCorrect={false}
                    placeholderTextColor="#999"
                    style={styles.input}   
                    value={ano} 
                    onChangeText={ (text) => setAno(text) }
                />

                <TouchableOpacity style={styles.button} onPress={handleCadastro}>
                    {
                        loadingAuth ? (
                            <ActivityIndicator size={25} color="#FFF"/>
                        ) : (
                            <Text style={styles.buttonText}>Cadastrar</Text>
                        )
                    }            
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
        paddingTop: 0,
    }, 
    whiteContainer: {
        flex: 0,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 22,
        height: 540,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#999',
    }, 
    input: { 
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