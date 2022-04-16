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
} from "native-base";
import { Ionicons, MaterialIcons, AntDesign } from "@expo/vector-icons";

function SearchBar() {
  return (
    <View>
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
    <View style={{ alignSelf: "center" }}>
      <SearchBar />
      <View style={{ marginTop: 10, flexDirection: "row" }}>
        <Avatar
        size="md"
          source={{
            uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
          }}
        ></Avatar>
        <View style={{ flexDirection: "column", marginLeft: 20 }}>
          <Heading>Suparjo,S.Pd.I</Heading>
          <Text>Guru TK Sumber Makmur Sidodol</Text>
        </View>
      </View>
      <Divider my="2" />
      <View style={{ marginTop: 10, flexDirection: "row" }}>
        <Avatar
          source={{
            uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
          }}
        ></Avatar>
        <View style={{ flexDirection: "column", marginLeft: 20 }}>
          <Heading>Suparjo,S.Pd.I</Heading>
          <Text>Guru TK Sumber Makmur Sidodol</Text>
        </View>
      </View>
    </View>
  );
};

export default SearchAccount;
