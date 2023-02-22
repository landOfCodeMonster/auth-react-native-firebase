import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { HomeScreen } from '../screens';


export default function UserStack() {

    const Stack = createStackNavigator();
    return (
        <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Welcome" component={HomeScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    )
}