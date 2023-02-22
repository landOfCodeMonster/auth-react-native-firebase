import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import {SigninScreen, SignupScreen, WelcomeScreen } from '../screens';


export default function AuthStack() {

    const Stack = createStackNavigator();
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Welcome" component={WelcomeScreen} />
          <Stack.Screen name="Sign Up" component={SignupScreen} />
          <Stack.Screen name="Sign In" component={SigninScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    )
}