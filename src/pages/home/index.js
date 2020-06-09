import React, { useState, useEffect } from 'react';
import { View, Image, Text } from 'react-native';
import { useRoute } from '@react-navigation/native'
import api from '../../services/api';

import robo from '../../assets/robo.jpeg';
import styles from './styles'; 
import Footer from '../footer';

export default function Home(){
    const [ user, setUser] = useState({});
    const route = useRoute();
    const user_id = route.params.id;

    useEffect(() => {
        api.get(`users/${user_id}`)
            .then(response => {
                setUser(response.data)
            })
    }, [user])

    if(!user.name){
        return null;
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                {user.image_uri !== null ? <Image style={styles.logo} source={{uri: user.image_uri}}/> : <Image style={styles.logo} source={robo}/>}
                <Text style={styles.level}> Nome {user.name}</Text>
            </View> 
            <Footer params={user}/>
        </View>
    )
}