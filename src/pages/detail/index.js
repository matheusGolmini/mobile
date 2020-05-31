import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import styles from './styles';
import Footer from '../footer';


export default function Detail(){
    return (
        <View style={styles.container}>
            <View style={styles.titleView}>
                    <Text style={styles.title}>VOCÊ É A DIFERENÇA!</Text>
            </View>
            <View style={styles.task}>
                <Text style={styles.taskProperty}>Nome:</Text>
                <Text style={styles.taskValue}>Reciclagem</Text>

                <Text style={styles.taskProperty}>Pontos:</Text>
                <Text style={styles.taskValue}>50</Text>

                <Text style={styles.taskProperty}>Descrição:</Text>
                <Text style={styles.taskValue}>Recicle seu lixo para salvar o mundo todo!!!</Text>
                <TouchableOpacity 
                    style={styles.tasksButton} 
                    onPress={()=>{}}
                >
                    <Text style={styles.tasksButtonText}>Iniciar missão</Text>
                </TouchableOpacity>
            </View>

            <Footer />
          

        </View>
    )
}