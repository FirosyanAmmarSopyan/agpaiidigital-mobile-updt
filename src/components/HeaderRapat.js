import React from "react";
import { HStack, Button, IconButton, Icon, NativeBaseProvider, Center, Box, StatusBar } from "native-base";
import { MaterialIcons , FontAwesome , Ionicons } from "@expo/vector-icons";
import {SvgXml} from "react-native-svg"
import logo from "../assets/Logo_header.svg"
import {Dimensions , Text} from "react-native"


const windowWidth = Dimensions.get("window").width;
  const HeaderRapat = () => {
      return <>
   <StatusBar bg="white" barStyle="light-content" />
      <Box safeAreaTop bg="white" />
      <HStack height="60" bg="white" px="1" py="3" justifyContent="space-between" alignItems="center" width={windowWidth}>
        <HStack alignItems="center">
            <Text style={{fontWeight: "bold" , fontSize: 20 , color: "#3E3E3E" , marginLeft: 24}}>Rapat AGPAII</Text>
        </HStack>
        <HStack>
        </HStack>
      </HStack>
   </>
}

export default HeaderRapat;