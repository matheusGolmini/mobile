import React, { useState } from 'react';
import { Alert, View, Image, Text, TextInput, TouchableOpacity, StatusBar, AsyncStorage } from 'react-native';
import logoImg from '../../assets/logo.png';
import stylesGlobal from '../styles-global';
import { useNavigation } from '@react-navigation/native'

import api from '../../services/api';


export default function Login(){
    const navigation = useNavigation();

    const [password, setPassword] = useState('');
    const[email, setEmail] = useState('');

    function navigateToRegister(){
        navigation.navigate('Register');
    }
    function navigateToHome(id){
        navigation.navigate('Home',{id});
    }
    async function login() {
        const data = ({
            email: email.toLowerCase(),
            password
        })
        try {
            const response = await api.post('users/login', data);
            if(!response.data){
                Alert.alert("Senha ou e-mail estão incorretas!")
            }else{
                await AsyncStorage.setItem("@user", JSON.stringify(response.data));
                navigateToHome(response.data.id)
            }
        } catch (error) {
            alert('Deu ruim')
        }
    }

    return (
        <View style={stylesGlobal.container}>
            <StatusBar barStyle="light-content" backgroundColor="#A2C43A"/>
            <Image style={stylesGlobal.logo} source={logoImg}/>
            <Text style={ stylesGlobal.headerText }>Seja bem vindo!</Text>
 
            <TextInput 
                style={stylesGlobal.input} 
                onChangeText={(val) => setEmail(val)}
                placeholder='Digite seu E-mail' 
            />
            <TextInput 
                style={stylesGlobal.input} 
                secureTextEntry={true} 
                onChangeText={(val) => setPassword(val)}
                placeholder='Digite sua senha' 
            />
            <TouchableOpacity 
                style={stylesGlobal.button}
                onPress={login}
            >
                <Text style={stylesGlobal.buttonText}>Login</Text>
            </TouchableOpacity>

            <TouchableOpacity 
                style={stylesGlobal.button}
                onPress={navigateToRegister}
            >
                <Text style={stylesGlobal.buttonText}>Inscreva-se e salve o mundo!!</Text>
            </TouchableOpacity>
  
        </View>
    )
}