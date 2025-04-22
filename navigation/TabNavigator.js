import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import HomeScreen from '../screens/Home1';
import DetailsScreen from '../screens/Home2';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
    return (
        <Tab.Navigator>
        <Tab.Screen name="T1" component={HomeScreen} options= {{
            tabBarIcon: ({ color, size }) => (
                <Ionicons name="heart" size={size} color={color} />
            ),
        }}
    />
        <Tab.Screen name="T2" component={DetailsScreen} options= {{
            tabBarIcon: ({ color, size }) => (
                <Ionicons name="star" size={size} color={color} />
            ),
        }}
    />
        </Tab.Navigator>
        
    )
}