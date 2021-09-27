import React from 'react';
import React from 'react';
import { createStackNavigator} from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Authentication from '../Screens/Authentication';
import Activities from '../Screens/Activities';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();


const screenOptionStyle = {
  headerStyle: {
    backgroundColor: "#F78400",
  },
  headerTintColor: "white",
  headerBackTitle: "Back",
  backgroundColor:'#f7f6f6'
};


const MainStackNavigator = () => {
  return (
   <Stack.Navigator>       
      <Stack.Screen name = 'Courses' component = {Courses} options={{ title: 'Courses' }}/> 
      <Stack.Screen name = 'Trucs' component = {Trucs} options={{ title: 'Trucs' }}/> 
    </Stack.Navigator>
  );
}

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator tabBarOptions={{activeTintColor: 'black',
                   labelStyle: {fontSize: 12, color: 'black'}, 
                   style: {backgroundColor: '#F78400'},
                     }}>      
      <Tab.Screen
          name={Courses}
          component={MainStackNavigator}
          options={{
              tabBarIcon: ({ focused, horizontal, tintColor }) => {
                return (
                  <Text>Courses</Text>
                );
              }
          }}
        />
        <Tab.Screen
          name={i18n.t("dashboard.title")}
          component={Dashboard}
          options={{
            tabBarIcon: ({ focused, horizontal, tintColor }) => {
              return (
                <Text>Trucs</Text>
              );
            }
          }}
        />       
    </Tab.Navigator>
  );
};


export default { MainStackNavigator, BottomTabNavigator };