import React from "react";
import { HStack, Button, IconButton, Icon, NativeBaseProvider, Center, Box, StatusBar, View } from "native-base";
import { MaterialIcons , FontAwesome , Ionicons, AntDesign } from "@expo/vector-icons";
import {SvgXml} from "react-native-svg"
import logo from "../assets/Logo_header.svg"
import {Dimensions , Text} from "react-native"


const windowWidth = Dimensions.get('window').width;
function HeaderInvitation(){
    return <>
   <StatusBar backgroundColor="grey" barStyle="light-content" />
      <Box safeAreaTop backgroundColor="red" />
      <HStack backgroundColor="white" height="60" px="1" py="3" borderBottomRadius="30" justifyContent="space-between" alignItems="center" width={windowWidth}>
        <HStack alignItems="center">
            <IconButton icon={<Icon size="7" as={Ionicons} name="ios-arrow-back" />} />
            <Text style={{fontWeight: "bold" , fontSize: 20 , color: "#3E3E3E" , textAlignVertical: "center" }}>Detail Acara</Text>
            <IconButton style={{ }} icon={<Icon size="7" as={AntDesign} name="arrowright" />} />
        </HStack>
        <HStack>
        </HStack>
      </HStack>
   </>
    }

    const HeaderInvitation = () => {
        return (
            <View>
                <Header />
            </View>       
        )
    }

    export default HeaderInvitation;