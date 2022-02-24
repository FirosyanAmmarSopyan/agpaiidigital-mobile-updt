import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomePage from "./../pages/Home";
import LoginPage from "./../pages/Login-page";
import PageA from "./../pages/PageA";
import React, { Component } from "react";

const Stack = createNativeStackNavigator();
const router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomePage}
          options={{ title: "Beranda" }}
        />
        <Stack.Screen name="LoginPage" component={LoginPage} />
        <Stack.Screen name="PageA" component={PageA} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default router;
