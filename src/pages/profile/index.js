import React, { useState } from 'react';
import { Alert, View, Image, Text, TextInput, TouchableOpacity } from 'react-native';

import logoImg from '../../assets/logo.png';
import styles from './styles'; 
import stylesGlobal from '../styles-global';

import api from '../../services/api';

export default function Login(){
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
        <View style={styles.container}>
          
        </View>
    )
}