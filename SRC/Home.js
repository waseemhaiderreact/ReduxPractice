import React,{useState} from 'react';
import {View,Text,TextInput,Button,Alert} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';


const Home = ({navigation})=>{
    const [namefood,setFood]=useState('');
    return(
        <View style={{flex:1,justifyContent:'center'}}>

        <View style={{flex:1,alignItems:'center',justifyContent:
    'center'}}><Text style={{fontSize:40}}>Redux</Text>
    
    <TextInput placeholder='Name' style={{borderWidth:1,width:'80%',margin:10}} onChangeText={(food)=>setFood(food)} />
    <Button title='Submit' onPress={()=> navigation.push('FoodList',{
        foodname:namefood
    })} />
    
    </View>
        </View>
    )
}

export default Home;