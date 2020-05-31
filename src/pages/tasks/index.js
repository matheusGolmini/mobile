import * as React from 'react';
import { Text, View, FlatList, TouchableOpacity } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Feather } from '@expo/vector-icons';

import Footer from '../footer';
import styles from './styles';



function HomeScreen() {
  return (
    <View>
      <FlatList 
        data={[1,2,3,4,5,6]}
        style={styles.taskList}
        keyExtractor={task => String(task)}
        showsVerticalScrollIndicator={false}
        renderItem={()=> (
          <View style={styles.task}>
            <Text style={styles.taskProperty}>Nome:</Text>
            <Text style={styles.taskValue}>Reciclagem:</Text>

            <Text style={styles.taskProperty}>Pontos:</Text>
            <Text style={styles.taskValue}>50</Text>

            <TouchableOpacity 
              style={styles.tasksButton} 
              onPress={()=>{}}
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
  return (
    <View>
      <FlatList 
        data={[1,2,3,4,5,6]}
        style={styles.taskList}
        keyExtractor={task => String(task)}
        showsVerticalScrollIndicator={false}
        renderItem={()=> (
          <View style={styles.task}>
            <Text style={styles.taskProperty}>Nome:</Text>
            <Text style={styles.taskValue}>Reciclagem:</Text>

            <Text style={styles.taskProperty}>Pontos:</Text>
            <Text style={styles.taskValue}>50</Text>

            <TouchableOpacity 
              style={styles.tasksButton} 
              onPress={()=>{}}
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
