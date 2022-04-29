import React from "react";
import { View } from "react-native";
import {
  VStack,
  Input,
  Button,
  IconButton,
  Icon,
  Text,
  NativeBaseProvider,
  Center,
  Box,
  Divider,
  Heading,
  StatusBar,
  Avatar,
  ScrollView
} from "native-base";
import { Ionicons, MaterialIcons, AntDesign } from "@expo/vector-icons";
import IsiAcara from "../components/IsiAcara";



function SearchBar() {
  return (
    <View style={{backgroundColor:"white"}}>
      <View style={{ flexDirection: "row" }}>
        <IconButton
          style={{ alignSelf: "center" }}
          icon={<Icon as={AntDesign} name="arrowleft" />}
        />
        <Input
          placeholder="Cari Akun"
          placeholderTextColor="black"
          variant="filled"
          width="85%"
          borderRadius="20"
          my="1"
          InputLeftElement={
            <Icon
              ml="2"
              size="5"
              color="black"
              as={<Ionicons name="ios-search" />}
            />
          }
        />
      </View>
    </View>
  );
}

const SearchAccount = () => {
  return (
    <View style={{ alignSelf: "center",backgroundColor:"white",height:"100%" }}>
      <SearchBar />
      <ScrollView>
        <IsiAcara />
        <IsiAcara />
        <IsiAcara />
        <IsiAcara />
        
      </ScrollView>
    </View>
  );
};

export default SearchAccount;
