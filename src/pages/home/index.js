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
            const newUser = await AsyncStorage.getItem('@user')
            if(!user.name || JSON.stringify(user) !== newUser){
                const res = await api.get(`users/${user_id}`);
                await AsyncStorage.setItem('@user', JSON.stringify(res.data));
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
                data={user.userSkillList}
                style={styles.taskList}
                keyExtractor={userSkillList => String(userSkillList.idUserSkill)}
                showsVerticalScrollIndicator={false}
                horizontal={true}
                renderItem={({item : userSkillList })=> (
                    <View style={styles.skill}>
                        <Text style={styles.skillProperty}>Habilidade:</Text>
                        <Text style={styles.skillValue}>{userSkillList.skill.name}</Text>

                        <Text style={styles.skillProperty}>Level:</Text>
                        <Text style={styles.skillValue}>{userSkillList.level}</Text>

                        <Text style={styles.skillProperty}>Experiência:</Text>
                        <Text style={styles.skillValue}>{userSkillList.experience}</Text>

                    </View>
                )}
            />
            <Footer params={user.id} />
        </View>
    )
}