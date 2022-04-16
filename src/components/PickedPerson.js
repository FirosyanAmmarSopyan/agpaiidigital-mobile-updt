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
import { Ionicons, EvilIcons , MaterialIcons } from "@expo/vector-icons";

const PickedPerson = () => {
  return (
    <View style={{ marginTop: 10, flexDirection: "row", marginLeft: 10 }}>
      <Avatar
        size="md"
        source={{
          uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
        }}
      ></Avatar>
      <View style={{ flexDirection: "column", marginLeft: 20 }}>
        <Heading size="md">Suparjo,S.Pd.I</Heading>
        <View style={{ flexDirection: "row" ,width:"100%" }}>
          <Text>Guru TK Sumber Makmur Sidodol</Text>
          <IconButton
          style={{marginLeft:90,marginTop:-20}}
            icon={<Icon as={MaterialIcons} name="clear" />}
            borderRadius="full"
            _icon={{
              color: "#313131",
              size: "xs",
            }}

          />
        </View>
      </View>
    </View>
  );
};

export default PickedPerson;
