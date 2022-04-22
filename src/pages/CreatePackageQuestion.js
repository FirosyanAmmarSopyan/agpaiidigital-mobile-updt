import React from "react";
import { View, Text, Dimensions } from "react-native";
import {
  ScrollView,
  StatusBar,
  Box,
  HStack,
  IconButton,
  Icon,
  Input,
  Fab,
} from "native-base";
import { Ionicons, AntDesign, MaterialIcons , FontAwesome5 } from "@expo/vector-icons";
import {SvgXml} from "react-native-svg"
import paper from "../assets/homework2.svg"
import DetailCreatePackageQuestion from "../components/DetailCreatePackageQuestion";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
function Header() {
  return (
    <>
      <StatusBar bg="grey" />
      <Box safeAreaTop />
      <HStack
        flexDirection="row"
        bg="white"
        px="1"
        py="3"
        alignItems="center"
        width={windowWidth}
      >
        <HStack>
          <IconButton
            icon={
              <Icon as={AntDesign} name="arrowleft" size="md" color="black" />
            }
          />
          <Text
            style={{
              textAlignVertical: "center",
              fontWeight: "bold",
              fontSize: 18,
            }}
          >
            Paket Soal
          </Text>
        </HStack>
        <HStack></HStack>
      </HStack>
    </>
  );
}

const CreatePackageQuestion = () => {
  return (
    <View style={{backgroundColor: "#F9F9F9" , height: windowHeight}}>
      <Header />
      <View>
        <Input
          fontWeight="bold"
          fontSize="13"
          placeholder="Cari Paket Soal"
          color="black"
          placeholderTextColor="black"
          leftElement={
            <Icon ml="3" as={MaterialIcons} size="sm" name="search" />
          }
          w="330"
          bg="#F6F6F6"
          alignSelf="center"
          mt="10"
          borderRadius="20"
        />
      </View>

      <View style={{width: 360 , height: 82 , backgroundColor: "white" , marginTop: 20 , alignSelf: "center"}}>
          <View style={{flexDirection: "row"}}>
              <SvgXml style={{marginTop: 5 , marginLeft: 8}} xml={paper} width="70" height="70"/>
              <View style={{flexDirection: "column" , alignSelf: "center" , marginTop: 10}}>
                <Text style={{color: "#3E3E3E" , fontWeight: "bold" , fontSize: 15}}>Total Paket Soal Dikerjakan</Text>
                <Text style={{color: "#3E3E3E" , fontWeight: "bold" , fontSize: 18}}>47811</Text>
              </View>
      <IconButton alignSelf="center" ml="16" icon={<Icon as={MaterialIcons} name="keyboard-arrow-right" size="md" color="black" />} />
          </View>
      </View>
      <View style={{alignSelf: "center"}}>
              <SvgXml style={{alignSelf: "center" , marginTop: 58}} xml={paper} />
              <Text style={{fontWeight: "bold" , fontSize: 20 , width: 221 , textAlign: "center"}}>Anda belum mempunyai paket soal.</Text>
          {/* <DetailCreatePackageQuestion/> */}
      </View>
              <Fab backgroundColor="#009788" position="absolute" size="sm" icon={<Icon color="white" as={<FontAwesome5 name="plus" />} size="sm" />} />
    </View>
  );
};

export default CreatePackageQuestion;
