/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from "react";
import RouteView from "./src/router/index";
import { NativeBaseProvider, Box } from "native-base";
import Boot from "./src/boot";

Boot();
const App = () => {
  return (
    <NativeBaseProvider>
      <RouteView></RouteView>
    </NativeBaseProvider>
  );
};

export default App;
