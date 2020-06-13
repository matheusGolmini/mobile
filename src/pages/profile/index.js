import React, { useState, useEffect } from 'react';
import { Alert, View, Image, Text, TextInput, TouchableOpacity, AsyncStorage } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

import logoImg from '../../assets/user.png';
import stylesGlobal from '../styles-global';


import api from '../../services/api';
import { useNavigation, useRoute } from '@react-navigation/native';

export default function Home(){
    // const route = useRoute();
    // const user_id = route.params.id;

    const navigation = useNavigation();

    const [image, setImage] = useState(null);
    const [password, setPassword] = useState('');
    const[email, setEmail] = useState('');
    const[name, setName] = useState('');
    const[user, setUser] = useState({});

    
    useEffect(() => {
        AsyncStorage.getItem("@user").then(r => {
            const res = JSON.parse(r);
            setUser(res);
            setImage(res.image_uri)
            setName(res.name)
            setPassword(res.password)
            setEmail(res.email)
            console.log("antiga: ", res.image_uri)
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

    function navigateToBack(){
        navigation.goBack();
    }    

    function navigateToHome(id){
        navigation.navigate('Home', {id});
    }

    async function updateUser () {
        const data = ({
            email: email.toLowerCase(),
            password,
            name,
            image_uri: image,
            sign_in_date: new Date(),
            is_admin: false
        });
        try {
            const response = await api.put(`users/${user.id}`, data);
            await AsyncStorage.setItem("@user", JSON.stringify(data))
            console.log("image:", image)
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
                onPress={ updateUser }
            >
                <Text style={stylesGlobal.buttonText}>Alterar</Text>
            </TouchableOpacity>
            <TouchableOpacity 
                style={stylesGlobal.button}
                onPress={ navigateToBack }
            >
                <Text style={stylesGlobal.buttonText}>Voltar</Text>
            </TouchableOpacity>
        </View>
    )

}