import React, { useState, useEffect } from 'react';
import { Text, View, FlatList, TouchableOpacity, AsyncStorage, Image } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'

import Footer from '../footer';
import styles from './styles';
import notTasks from '../../assets/notTasks.jpeg'

import api from '../../services/api';


function HomeScreen() {
  const [tasks, setTasks] = useState([]);

  const navigation = useNavigation();

  async function navigateToDetail(task){
    await AsyncStorage.setItem('@task', JSON.stringify(task))
    navigation.navigate('Detail', {'state': false});
  }

  async function loadTasks(){
    const response = await api.get('/tasks');
    setTasks(response.data);
  }

  useEffect(() => {
    loadTasks();
  }, [])

  if(!tasks[0]) {
    return (
      <View style={styles.headerNotTasks}>
        <Text style={styles.textNotTask}>Concluio todas as tarefas</Text>
        <Image  style={ styles.imageNotTask } source={notTasks} />
      </View>
    )
  }
  console.log(tasks[0])
  return (
    <View style={styles.container}>
      <FlatList 
        data={tasks}
        style={styles.taskList}
        keyExtractor={task => String(task.id)}
       
        showsVerticalScrollIndicator={false}
        renderItem={({item : task })=> (
          <View style={styles.task}>
            <Text style={styles.taskProperty}>Nome:</Text>
            <Text style={styles.taskValue}>{task.name}</Text>

            {/*Tasks n"ao vão possuir pontos???  */}
            <Text style={styles.taskProperty}>Pontos:</Text>
            <Text style={styles.taskValue}>50</Text>

            <TouchableOpacity 
              style={styles.tasksButton} 
              onPress={() => navigateToDetail(task)}
            >
              <Text style={styles.tasksButtonText}> Ver mais detalhes</Text>
              <Feather name="arrow-right" size={16} color="#A2C43A"/>
            </TouchableOpacity>
          </View>
        )}
      />
      <Footer />
    </View>
  );
}

function SettingsScreen() {
  const [tasks, setTasks] = useState([]);

  const navigation = useNavigation();

  async function navigateToDetail(task){
    await AsyncStorage.setItem('@task', JSON.stringify(task));
    navigation.navigate('Detail',{"state": true});
  }

  async function loadTasks(){
    const res = await AsyncStorage.getItem('@user');
    const user = JSON.parse(res);
    const response = await api.get(`/users/${user.id}`);
    const progressTasks = response.data.userTaskList.map((task) => {
      if(task.status !== 'c' && task.status !== 'x'){
        return task;
      }
    })
    setTasks(progressTasks);
    await AsyncStorage.setItem('@user', JSON.stringify(response.data))
  }

  useEffect(() => {
    loadTasks();
  }, []);


  if(!tasks[0]) {
    return (
      <View style={styles.headerNotTasks}>
        <Text style={styles.textNotTask}>Adicione tarefas</Text>
        <Image  style={ styles.imageNotTask } source={notTasks} />
        <Footer />
      </View>
    )
  }

  console.log(tasks)
  return (
    <View style={styles.container}>
      <FlatList 
        data={tasks}
        style={styles.taskList}
        keyExtractor={task => String(task.idTask.id)}

        showsVerticalScrollIndicator={false}
        renderItem={({item : task })=> (
          <View style={styles.task}>
            <Text style={styles.taskProperty}>Nome:</Text>
            <Text style={styles.taskValue}>{task.idTask.name}</Text>
            <Text style={styles.taskProperty}>Descrição:</Text>
            <Text style={styles.taskValue}>{task.idTask.description}</Text>

            <TouchableOpacity 
              style={styles.tasksButton} 
              onPress={() => navigateToDetail(task.idTask)}
            >
              <Text style={styles.tasksButtonText}> Ver mais detalhes</Text>
              <Feather name="arrow-right" size={16} color="#A2C43A"/>
            </TouchableOpacity>
            
          </View>
        )}
      />
      <Footer />
    </View>
  );
}



const Tab = createMaterialTopTabNavigator();

export default function Navigator() {
  return (

    <Tab.Navigator>
        <Tab.Screen name="Tarefas" component={HomeScreen}/>
        <Tab.Screen name="Tarefas em andamento" component={SettingsScreen} />
    </Tab.Navigator>
  );
}
