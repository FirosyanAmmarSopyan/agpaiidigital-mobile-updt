/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from "react";
import { View } from "react-native";
import RouteView from "./src/router/index";
import BottomNav from "./src/components/BottomNav";

import { NativeBaseProvider, Box } from "native-base";

const App = () => {
  return (
    <NativeBaseProvider>
      <RouteView></RouteView>
    </NativeBaseProvider>
  );
};

export default App;
