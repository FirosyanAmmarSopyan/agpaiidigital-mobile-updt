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
const App = () => {
  return (
    <View>
      <RouteView></RouteView>
      <BottomNav></BottomNav>
    </View>
  );
};

export default App;
