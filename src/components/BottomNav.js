import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../pages/Home";
import Login from "../pages/Login";
import { NavigationContainer } from "@react-navigation/native";

const Tab = createBottomTabNavigator();

const BottomNav = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Settings" component={Login} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default BottomNav;
