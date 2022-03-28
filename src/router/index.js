import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomePage from "./../pages/Home";
import LoginPage from "./../pages/LoginPage";
import RegisterPage from "./../pages/RegisterPage";
import PageA from "./../pages/PageA";
import React from "react";
import PickPhoto from "../pages/PickPhoto";
import LogiN from "../pages/LogiN"
import Beranda from "../pages/Beranda"
import Meeting from "../pages/Meeting"
import SearchAccount from "../pages/SearchAccount"
// import component
import Header from "./../components/Header"
import Modal from "./../components/Modal"
import ImageSlider from "./../components/ImageSlider"
import Tabs from "./../components/Tabs"
import HeaderRapat from "./../components/HeaderRapat"


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
          name="LogiN"
          component={LogiN}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Tabs"
          component={Tabs}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Header"
          component={Header}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Modal"
          component={Modal}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="ImageSlider"
          component={ImageSlider}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Beranda"
          component={Beranda}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="HeaderRapat"
          component={HeaderRapat}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Meeting"
          component={Meeting}
        />
           <Stack.Screen
          options={{ headerShown: false }}
          name="SearchAccount"
          component={SearchAccount}
        />
     
      
        {/* <Stack.Screen
          options={{ headerShown: false }}
          name="Beranda"
          component={Beranda}
          options={{ header: (props) => <HeaderHome /> }}
        /> */}
        <Stack.Screen name="PageA" component={PageA} />
        <Stack.Screen name="PickPhoto" component={PickPhoto} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default router;
