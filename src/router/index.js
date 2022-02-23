import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomePage from './../pages/Home';
import LoginPage from './../pages/Login';
import Rabbitpage from './../pages/rabbit-experiment';
import React, {Component} from 'react';

const Stack = createNativeStackNavigator();
const router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomePage}
          options={{title: 'Beranda'}}
        />
        <Stack.Screen name="Login" component={LoginPage} />
        <Stack.Screen 
          options={
              {
                title: "Firos",
              }
          }
        name="rabbit-experiments" component={Rabbitpage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default router;
