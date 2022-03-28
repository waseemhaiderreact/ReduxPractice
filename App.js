import React,{useState} from 'react';
import {View,Text,TextInput,Button,Alert} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './SRC/Home';
import FoodList from './SRC/FoodList'
const Stack = createNativeStackNavigator();
const App = ()=>{
 
  
    return(
      <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="FoodList" component={FoodList} />
      </Stack.Navigator>
    </NavigationContainer>
    )
}

export default App;