import * as React from 'react';
import { Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Courses from './Courses'
import Trucs from './Trucs'

function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
      <Button
          title="Voir la liste de Courses"
          onPress={() => navigation.navigate('Courses')}
        />
        <Button
          title="Voir les trucs à faire"
          onPress={() => navigation.navigate('Trucs')}
        />
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
        <Tab.Screen name="Trucs à faire" component={Trucs} />
        <Tab.Screen name="Courses" component={Courses} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}