import React, { useState } from 'react';
import { Alert, View, Image, Text, TextInput, TouchableOpacity } from 'react-native';

import logoImg from '../../assets/logo.png';
import stylesGlobal from '../styles-global';

import api from '../../services/api';

export default function Reagister(){
    const [password, setPassword] = useState('');
    const[email, setEmail] = useState('');
    const[name, setName] = useState('');

    register = async () => {
        const data = ({
            email,
            password,
            name
        })
        try {
            const response = await api.post('users', data);
            console.log(response.data);
            Alert.alert("Será que foi?", `${response.data}`)
        } catch (error) {
            alert('Deu ruim')
        }
    }
    return (
        <View style={stylesGlobal.container}>
            <Image style={stylesGlobal.logo} source={logoImg}/>
            <Text style={ stylesGlobal.headerText }>Vida Sustentável</Text>
      
            <TextInput 
                style={stylesGlobal.input} 
                onChangeText={(val) => setName(val)}
                placeholder='Digite seu nome' 
            />
            <TextInput 
                style={stylesGlobal.input} 
                onChangeText={(val) => setEmail(val)}
                placeholder='Digite seu e-mail' 
            />
            <TextInput 
                style={stylesGlobal.input} 
                secureTextEntry={true} 
                onChangeText={(val) => setPassword(val)}
                placeholder='Digite sua senha' 
            />
            <TouchableOpacity 
                style={stylesGlobal.button}
                onPress={ () => { this.register() }}
            >
                <Text style={stylesGlobal.buttonText}>Cadastrar</Text>
            </TouchableOpacity>
        </View>
    )
}