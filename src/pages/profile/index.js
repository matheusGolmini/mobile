import React, { useState, useEffect } from 'react';
import { Alert, View, Image, Text, TextInput, TouchableOpacity } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

import logoImg from '../../assets/user.png';
import stylesGlobal from '../styles-global';


import api from '../../services/api';
import { useNavigation, useRoute } from '@react-navigation/native';
import Footer from '../footer';

export default function Home(){
    const route = useRoute();
    const user_id = route.params.id;

    const navigation = useNavigation();

    const [image, setImage] = useState(null);
    const [password, setPassword] = useState('');
    const[email, setEmail] = useState('');
    const[name, setName] = useState('');
    const[user, setUser] = useState({});

    useEffect(() => {
        api.get(`users/${user_id}`)
            .then(response => {
                setUser(response.data)
                setImage(response.data.image_uri)
            })
    }, [])

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
        });
        if (!result.cancelled) {
        setImage(result.uri);
        }
    };

    

    function navigateToHome(id){
        navigation.navigate('Home', {id});
    }

    async function register () {
        const data = ({
            email: email.toLowerCase(),
            password,
            name,
            image_uri: image,
            sign_in_date: new Date(),
            is_admin: false
        });
        try {
            console.log("data:", data);
            const response = await api.put(`users/${user.id}`, data);
            console.log("response: ", response.data);
            navigateToHome(response.data.id);
        } catch (error) {
            alert('Deu ruim');
        }
    };

    if(!user.name){
        return null;
    }

    return (
        <View style={stylesGlobal.container}>
            <TouchableOpacity 
                onPress={ pickImage }
            >
                {image !== null ? <Image style={stylesGlobal.logo} source={{uri: image}}/> : <Image style={stylesGlobal.logo} source={logoImg}/>}
            </TouchableOpacity>
            <Text style={ stylesGlobal.headerText }>Alterar dados pessoais</Text>
            <TextInput 
                style={stylesGlobal.input} 
                onChangeText={(val) => setName(val)}
                // value={user.name}
                placeholder='Digite seu nome' 
            />
            <TextInput 
                style={stylesGlobal.input} 
                onChangeText={(val) => setEmail(val)}
                // value={user.email}
                placeholder='Digite seu e-mail' 
            />
            <TextInput 
                style={stylesGlobal.input} 
                secureTextEntry={true} 
                onChangeText={(val) => setPassword(val)}
                // value={user.password}
                placeholder='Digite sua senha' 
            />
            <TouchableOpacity 
                style={stylesGlobal.button}
                onPress={ register }
            >
                <Text style={stylesGlobal.buttonText}>Alterar</Text>
            </TouchableOpacity>
            <Footer/>
        </View>
    )

}