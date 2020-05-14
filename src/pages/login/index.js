import React, { useState } from 'react';
import { Alert, View, Image, Text, TextInput, TouchableOpacity } from 'react-native';

import logoImg from '../../assets/logo.png';
import styles from './styles'; 
import { useNavigation } from '@react-navigation/native'

import api from '../../services/api';


export default function Login(){
    const navigation = useNavigation();

    const [password, setPassword] = useState('');
    const[email, setEmail] = useState('');

    function navigateToRegister(){
        navigation.navigate('Register');
    }
    function navigateToProfile(){
        navigation.navigate('Profile');
    }
    login = async () => {
        const data = ({
            email: email.toLowerCase(),
            password
        })
        try {
            const response = await api.post('login', data);
            console.log(response.email);
            if(!response){
                Alert.alert("Você não foi encontrado na base")
            }
            
            //levar para a página de perf
            navigateToProfile()
           
        } catch (error) {
            alert('Deu ruim')
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image style={styles.logo} source={logoImg}/>
                <Text style={ styles.logoText }>Vida Sustentável</Text>
                <Text style={ styles.headerText }>Seja bem vindo!</Text>
            </View> 
            <TextInput 
                style={styles.input} 
                // value={email}
                onChangeText={(val) => setEmail(val)}
                placeholder='Digite seu E-mail' 
            />
            <TextInput 
                style={styles.input} 
                secureTextEntry={true} 
                // value={password}
                onChangeText={(val) => setPassword(val)}
                placeholder='Digite sua senha' 
            />
            <TouchableOpacity 
                style={styles.button}
                onPress={ () => { this.login() }}
            >
                <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>

            <TouchableOpacity 
                style={styles.button}
                onPress={navigateToRegister}
            >
                <Text style={styles.buttonText}>Inscreva-se e salve o mundo!!</Text>
            </TouchableOpacity>
  
        </View>
    )
}