import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomePage from "./../pages/Home";
import LoginPage from "./../pages/LoginPage";
import RegisterPage from "./../pages/RegisterPage";
import Beranda from "./../pages/Beranda";
import PageA from "./../pages/PageA";
import React from "react";
import PickPhoto from "../pages/PickPhoto";
// import component header Beranda
import HeaderHome from "./../components/HeaderHome";

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
        <Stack.Screen
          options={{ headerShown: false }}
          name="LoginPage"
          component={LoginPage}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="RegisterPage"
          component={RegisterPage}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Beranda"
          component={Beranda}
          options={{ header: (props) => <HeaderHome /> }}
        />
        <Stack.Screen name="PageA" component={PageA} />
        <Stack.Screen name="PickPhoto" component={PickPhoto} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default router;
