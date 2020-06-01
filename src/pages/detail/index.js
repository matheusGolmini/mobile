import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';

import styles from './styles';
import logoImg from '../../assets/logo.png';
import Footer from '../footer';


export default function Detail(){
    const navigation = useNavigation();

    function navigateBack(){
        navigation.goBack()
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image style={styles.logo} source={logoImg}/>

                <TouchableOpacity onPress={navigateBack}>
                    <Feather name="arrow-left" size={28} color="#A2C43A"/>
                </TouchableOpacity>
            </View>

            <View style={styles.task}>
                <Text style={styles.taskProperty}>Nome:</Text>
                <Text style={styles.taskValue}>Reciclagem</Text>

                <Text style={styles.taskProperty}>Pontos:</Text>
                <Text style={styles.taskValue}>50</Text>

                <Text style={styles.taskProperty}>Descrição:</Text>
                <Text style={styles.taskValue}>Recicle seu lixo para salvar o mundo todo!!!</Text>
            </View>
           

            <TouchableOpacity 
                style={styles.tasksButton} 
                onPress={()=>{}}
            >
                <Text style={styles.tasksButtonText}>Iniciar missão</Text>
            </TouchableOpacity>
           

            <Footer />
          

        </View>
    )
}