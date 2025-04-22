import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home2 from "../screens/Home2";
import Details2 from "../screens/Details2";

const Stack = createNativeStackNavigator();

export default function Home2Navigator() {
    return (
        <Stack.Navigator initialRouteName="Home2" screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Home2" component={Details2} />
            <Stack.Screen name="Details2" component={Home2} />
        </Stack.Navigator>
    );
}