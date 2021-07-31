import React from 'react';
import {Image} from 'react-native';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import DonateScreen from '../screens/donateScreen';
import RequestScreen from '../screens/requestScreen';

export const AppTabNavigator = createBottomTabNavigator({
    DonateBooks:{
        screen:DonateScreen,
            tabBarIcon:<Image source = {require("../assets/request-list.png")} style={{width:40, height:40}}/>,
        tabBarLabel:"Donate Books"
    },
    BookRequest:{
        screen:RequestScreen,
            tabBarIcon:<Image source = {require("../assets/request-book.png")} style={{width:40, height:40}}/>,
        tabBarLabel:"Request Books"
    }
})
