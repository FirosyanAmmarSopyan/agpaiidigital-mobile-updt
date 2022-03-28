import React from "react";
import { HStack, Button, IconButton, Icon, Text, NativeBaseProvider, Center, Box, StatusBar } from "native-base";
import { MaterialIcons , FontAwesome , Ionicons } from "@expo/vector-icons";
import {SvgXml} from "react-native-svg"
import logo from "../assets/Logo_header.svg"
import {Dimensions} from "react-native"

const windowWidth = Dimensions.get("window").width;
function Header() {
  return <>
      <StatusBar bg="white" barStyle="light-content" />
      <Box safeAreaTop bg="white" />
      <HStack bg="white" px="1" py="3" justifyContent="space-between" alignItems="center" width={windowWidth}>
        <HStack alignItems="center">
            <SvgXml style={{marginLeft: 20 }} xml={logo}/>
        </HStack>
        <HStack>
          <IconButton icon={<Icon as={MaterialIcons} name="search" size="sm" color="black" />} />
          <IconButton icon={<Icon as={Ionicons} name="notifications-outline" size="sm" color="black" />} />
          <IconButton icon={<Icon as={FontAwesome} name="calendar-check-o" size="sm" color="black" />} />
        </HStack>
      </HStack>
    </>;
}


    export default Header;
    