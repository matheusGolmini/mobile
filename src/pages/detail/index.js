import React, { useEffect, useState} from 'react';
import { View, Text, TouchableOpacity, Image, AsyncStorage } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';

import styles from './styles';
import robo from '../../assets/robo.jpeg';
import { FlatList } from 'react-native-gesture-handler';
import api from '../../services/api';


export default function Detail(){
    const navigation = useNavigation();
    const route = useRoute();
    const state = route.params.state;

    const [user, setUser] =  useState([]);
    const [task, setTask] =  useState([]);

    async function getUser(){
        const res = await AsyncStorage.getItem("@user");
        console.log("user", user);
    }
    async function getTask(){
        const res = await AsyncStorage.getItem("@task");
        console.log("user", res);
    }

    useEffect(() => {
        getUser();
        getTask();
        AsyncStorage.getItem('@user')
            .then(user =>{
                setUser(user !== null ? JSON.parse(user) : []);
            });

        AsyncStorage.getItem('@task')
        .then(task =>{
            setTask(task !== null ? JSON.parse(task) : []);
        });
    }, []);


    function navigateBack(){
        navigation.goBack()
    }

    async function  initialTask(){
        try {
            await api.post(`users/${user.id}/start_task/${task.id}`);
            navigation.navigate("Home");
        } catch (error) {
            console.log("Error ---> ", error);
        }
    }

    async function endTask(){
        try {
            await api.post(`users/${user.id}/complete_task/${task.id}`);
            const newUSer = await api.get(`users/${user.id}`);
            await AsyncStorage.setItem('@user', JSON.stringify(newUSer.data))
            navigation.navigate("Home", {id: user.id });
        } catch (error) {
            console.log("Error ---> ", error);
        }
    }

    async function canceledTask(){
        try {
            await api.post(`users/${user.id}/cancel_task/${task.id}`);
            const newUSer = await api.get(`users/${user.id}`);
            await AsyncStorage.setItem('@user', JSON.stringify(newUSer.data))
            navigation.navigate("Home", {id: user.id });
        } catch (error) {
            console.log("Error ---> ", error);
        }
    }

    if(state){
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    {user.image_uri !== null ? <Image style={styles.logo} source={{uri: user.image_uri}}/> : <Image style={styles.logo} source={robo}/>}

                    <TouchableOpacity onPress={navigateBack}>
                        <Feather name="arrow-left" size={28} color="#A2C43A"/>
                    </TouchableOpacity>
                </View>
                <View style={styles.task}>
                    <Text style={styles.taskProperty}>Nome:</Text>
                    <Text style={styles.taskValue}>{task.name}</Text>

                    <Text style={styles.taskProperty}>Descrição:</Text>
                    <Text style={styles.taskValue}>{task.description}</Text>

                    <FlatList 
                        data={task.rewards}
                        keyExtractor={rewards => String(rewards.skill.id)}

                        showsVerticalScrollIndicator={false}
                        renderItem={({item : rewards })=> (
                            <>
                                <Text style={styles.taskProperty}>Habilidade:</Text>
                                <Text style={styles.taskValue}>{rewards.skill.name}</Text>
                                <Text style={styles.taskProperty}>XP:</Text>
                                <Text style={styles.taskValue}>{rewards.xp_reward}</Text>
                            </>
                        )}
                    />
                </View>

                <View style={styles.footer}>
                    <TouchableOpacity 
                        style={styles.tasksButton} 
                        onPress={endTask}
                    >
                        <Text style={styles.tasksButtonText}>Finalizar missão</Text>
                    </TouchableOpacity>

                    <TouchableOpacity 
                        style={styles.tasksButton} 
                        onPress={canceledTask}
                    >
                        <Text style={styles.tasksButtonText}>Cancelar missão</Text>
                    </TouchableOpacity>

                </View>
                
            </View>
        )
    }else {
        return(
            <View style={styles.container}>
                <View style={styles.header}>
                    {user.image_uri !== null ? <Image style={styles.logo} source={{uri: user.image_uri}}/> : <Image style={styles.logo} source={robo}/>}

                    <TouchableOpacity onPress={navigateBack}>
                        <Feather name="arrow-left" size={28} color="#A2C43A"/>
                    </TouchableOpacity>
                </View>

                <View style={styles.task}>
                    <Text style={styles.taskProperty}>Nome:</Text>
                    <Text style={styles.taskValue}>{task.name}</Text>

                    <Text style={styles.taskProperty}>Descrição:</Text>
                    <Text style={styles.taskValue}>{task.description}</Text>

                    <FlatList 
                        data={task.rewards}
                        keyExtractor={rewards => String(rewards.skill.id)}

                        showsVerticalScrollIndicator={false}
                        renderItem={({item : rewards })=> (
                            <>
                                <Text style={styles.taskProperty}>Habilidade:</Text>
                                <Text style={styles.taskValue}>{rewards.skill.name}</Text>
                                <Text style={styles.taskProperty}>XP:</Text>
                                <Text style={styles.taskValue}>{rewards.xp_reward}</Text>
                            </>
                        )}
                    />
                </View>


                <TouchableOpacity 
                    style={styles.tasksButton} 
                    onPress={initialTask}
                >
                    <Text style={styles.tasksButtonText}>Iniciar missão</Text>
                </TouchableOpacity>

            </View>
        )
    }
}