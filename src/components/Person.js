import React from "react";
import { View, Text, Dimensions, TouchableOpacity } from "react-native";
import {
  StatusBar,
  HStack,
  IconButton,
  Heading,
  Icon,
  Input,
  Avatar,
  Divider,
} from "native-base";
import { Button } from "react-native-elements";
import { Ionicons , EvilIcons } from "@expo/vector-icons";


const Person = () => {
    return (
        <View style={{ marginTop: 10, flexDirection: "row", marginLeft:10 }}>
        <Avatar
          size="md"
          source={{
            uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
          }}
        ></Avatar>
        <View style={{ flexDirection: "column", marginLeft: 20 }}>
          <Heading size="md">Suparjo,S.Pd.I</Heading>
          <Text>Guru TK Sumber Makmur Sidodol</Text>
        </View>
      </View>
    )
}



export default Person;