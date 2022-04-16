import { HStack, StatusBar , Heading ,  Icon , IconButton } from "native-base";
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
        <HStack style={{justifyContent:"flex-start"}}  width={windowWidth} backgroundColor= "white"  height="10">
            <HStack style={{alignSelf:"center"}}>
            <IconButton
            style={{ width: "15%",marginTop:5 }}
            icon={<Icon size="md" as={Ionicons} name="arrow-back" />}
          />
            </HStack>
            <HStack style={{alignSelf:"center",marginLeft:70}}>
                {/* Center */}
                <Heading size="md">
                    Undangan untuk anda
                </Heading>

            </HStack>
        </HStack>
        </HStack>
    </>
        
}

const InvitationEmpty = () => {
    return (
        <View style={{backgroundColor: "white" , height: "100%"}}>
            <Header/>
        <View style={{alignSelf:"center",marginTop:100}}>
            <SvgXml width="150" xml={EmptyInvite}/>
        </View>
        <View >
        <Heading style={{alignSelf:"center"}}>Belum ada undangan buat kamu</Heading>
        <Text style={{alignSelf:"center",color:"#B8B8B8"}}>Kamu bisa bergabung dengan acara orang lain lewat undangan.</Text>
        </View>
        </View>
    );
}

export default InvitationEmpty;