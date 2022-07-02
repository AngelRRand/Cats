import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { FontAwesome } from '@expo/vector-icons';

import HomeScreen from "./src/component/HomeScreen/HomeScreen";
import SettingsScreen from "./src/component/SettingsScreen/SettingsScreen";
import StackScreen from "./src/component/StackScreen/StackScreen";

//Screens
const HomeStackNavigator = createStackNavigator()

function MyStack(){
    return(
        <HomeStackNavigator.Navigator
            initialRouteName="HomeScreen"
        >
            <HomeStackNavigator.Screen
                name="HomeScreen"
                component={HomeScreen}
            />
            <HomeStackNavigator.Screen
                name="Setting"
                component={SettingsScreen}
            />
        </HomeStackNavigator.Navigator>
    )
}


const Tab = createBottomTabNavigator()



function MyTabs() {
    return (
        <Tab.Navigator
            initialRouteName="Home"
            screenOptions={{
                tabBarActiveTintColor: 'purple',
            }}
        >
            <Tab.Screen
                name='Home'
                component={MyStack}
                options={{
                    tabBarLabel: '',
                    tabBarIcon: ({color, size}) => (
                        <FontAwesome name="home" size={size} color={color} />
                    ),
                    headerShown: false
                }}
                />
                
            
            <Tab.Screen
                name='Stack'
                component={StackScreen}
                options={{
                    tabBarLabel: '',
                    tabBarBadge: 9,
                    tabBarIcon: ({color, size}) => (
                        <FontAwesome name="music" size={size} color={color} />
                    )
                }}
                
                />
        </Tab.Navigator>
    )
}


export default function Navigation() {
    return (
        <NavigationContainer>
            <MyTabs />
        </NavigationContainer>
    )
}