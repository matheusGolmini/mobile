import React, { useState, useEffect } from 'react';
import { View, Image, Text, AsyncStorage } from 'react-native';
import { useRoute } from '@react-navigation/native'
import api from '../../services/api';

import robo from '../../assets/robo.jpeg';
import styles from './styles'; 
import Footer from '../footer';
import { FlatList } from 'react-native-gesture-handler';

export default function Home(){
    const [ user, setUser ] = useState({});
    const route = useRoute();
    let user_id = route.params.id;

    async function getUser() {
        try {
            if(!user.name || JSON.stringify(user) !== await AsyncStorage.getItem('@user')){
                const res = await api.get(`users/${user_id}`);
                setUser(res.data);
            }
        } catch (error) {
            console.log("error: ", error)
        }
        
    }

    useEffect(()=>{
        getUser();
    })



    if(!user.name){
        return null;
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                {user.image_uri !== null ? <Image style={styles.logo} source={{uri: user.image_uri}}/> : <Image style={styles.logo} source={robo}/>}
                <Text style={styles.name}>{user.name}</Text>
            </View> 
            <FlatList 
                data={[1,2,3]}
                style={styles.taskList}
                keyExtractor={task => String(task)}
                showsVerticalScrollIndicator={false}
                renderItem={()=> (
                <View style={styles.skill}>
                    <Text style={styles.skillProperty}>Skill:</Text>
                    <Text style={styles.skillValue}>Reciclagem</Text>

                    <Text style={styles.skillProperty}>Level:</Text>
                    <Text style={styles.skillValue}>50</Text>

                    {/* <TouchableOpacity 
                    style={styles.tasksButton} 
                    onPress={()=>{}}
                    >
                    <Text style={styles.tasksButtonText}> Ver mais detalhes</Text>
                    <Feather name="arrow-right" size={16} color="#A2C43A"/> */}
                     {/*</TouchableOpacity>  */}
                </View>
                )}
            />
            <Footer params={user.id} />
        </View>
    )
}