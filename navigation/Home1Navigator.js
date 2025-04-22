import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home1 from "../screens/Home1";
import Details1 from "../screens/Details1";

const Stack = createNativeStackNavigator();

export default function Home1Navigator() {
    return (
        <Stack.Navigator initialRouteName="Home1" screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Home1" component={Details1} />
            <Stack.Screen name="Details1" component={Home1} />
        </Stack.Navigator>
    );
}