import React from 'react';
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack";
import Login from './pages/login';
import Register from './pages/register';

const AppStack = createStackNavigator();


export default function Routes(){
    return(
       <NavigationContainer>
           <AppStack.Navigator screenOptions={{ headerShown: false }}>
               <AppStack.Screen name='Login' component={Login} />
               <AppStack.Screen name="Register" component={Register} />
           </AppStack.Navigator>
       </NavigationContainer>
    )
}