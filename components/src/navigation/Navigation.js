import React from "react";
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Courses from "../screens/Courses";
import Trucs from '../screens/Trucs'

const Drawer = createDrawerNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Drawer.Navigator initialRouteName="Courses">
                <Drawer.Screen name="Liste de Courses" component={Courses} />
                <Drawer.Screen name="Trucs à faire" component={Trucs} />
            </Drawer.Navigator>
        </NavigationContainer>
    );
}