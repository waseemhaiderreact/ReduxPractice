import React from 'react';
import {View,Text} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const FoodList = ({route,navigation})=>{
    const {foodname} = route.params;
    return(
        <View><Text>{foodname}</Text></View>
    )
}

export default FoodList;