import { HStack, StatusBar , Heading ,  Icon , IconButton , ScrollView } from "native-base";
import React from "react";
import { View , Text , Dimensions } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import  EmptyInvite  from "../assets/EmptyInvite.svg";
import { SvgXml } from "react-native-svg";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").Height;
function Header() {
    return <>
        <StatusBar backgroundColor="grey"/>
        <HStack>
        <HStack style={{justifyContent:"flex-start",height:50}}  width={windowWidth} backgroundColor= "white">
            <HStack style={{alignSelf:"center"}}>
            <IconButton
            style={{ width: "35%",marginTop:5 }}
            icon={<Icon size="md" as={Ionicons} name="arrow-back" />}
          />
            </HStack>
            <HStack style={{alignSelf:"center"}}>
                {/* Center */}
                <Heading size="md">
                    Undangan untuk anda
                </Heading>

            </HStack>
        </HStack>
        </HStack>
    </>
        
}

const Invitation = () => {
    return (
        <View>
            <Header></Header>
            <ScrollView>
            <View style={{marginBottom:50}}>

            </View>
            </ScrollView>
        </View>
    )
}

export default Invitation;