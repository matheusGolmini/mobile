import React from 'react';
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack";
import Login from './pages/login';
import Register from './pages/register';
import Profile from './pages/profile';

const AppStack = createStackNavigator();


export default function Routes(){
    return(
       <NavigationContainer>
           <AppStack.Navigator screenOptions={{ headerShown: false }}>
               <AppStack.Screen name='Login' component={Login} />
               <AppStack.Screen name="Register" component={Register} />
               <AppStack.Screen name="Profile" component={Profile} />
           </AppStack.Navigator>
       </NavigationContainer>
    )
}