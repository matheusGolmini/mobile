import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';

import styles from './styles'; 
import { useNavigation } from '@react-navigation/core';

export default function Footer(){
    const navigation = useNavigation();
    function logout(){
        navigation.navigate('Login');
    }
    function navigateToTasks(){
        navigation.navigate('Tasks');
    }
    function navigateToProfile(){
        navigation.navigate('Profile');
    }
    function navigateToHome(){
        navigation.navigate('Home');
    }

    
    return (
        <View style={styles.footer}>
           <TouchableOpacity 
                style={styles.button}
                onPress={navigateToHome}
            >
                <Feather name="home" size={25} color="black"/>
                <Text style={styles.iconText}> Home </Text>

            </TouchableOpacity>
            <TouchableOpacity 
                style={styles.button}
                onPress={navigateToProfile}
            >
                <Feather name="user" size={25} color="black"/>
                <Text style={styles.iconText}> Perfil </Text>
            </TouchableOpacity>
            <TouchableOpacity 
                style={styles.button}
                onPress={navigateToTasks}
            >
                <Feather name="book" size={25} color="black"/>
                <Text style={styles.iconText}> Missões</Text>
            </TouchableOpacity>
            <TouchableOpacity 
                style={styles.button}
                onPress={logout}
            >
                <Feather name="power" size={25} color="black"/>
                <Text style={styles.iconText}> Sair </Text>

            </TouchableOpacity>
         
        </View>
    )
}