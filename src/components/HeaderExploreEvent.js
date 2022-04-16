import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import {
  Icon,
  IconButton,
  NativeBaseProvider,
  Center,
  Box,
  StatusBar,
  Heading,
  AspectRatio,
  HStack,
  Stack,
  ScrollView,
  Avatar,
  Fab,
} from "native-base";
import { AntDesign, Ionicons, Entypo } from "@expo/vector-icons";
import { SvgXml } from "react-native-svg";
import { FAB, Button } from "react-native-elements";

const HeaderExploreEvent = () => {
  return (
    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
      <View>
        <TouchableOpacity>
          <IconButton
            style={{ width: "15%",marginTop:5 }}
            icon={<Icon size="lg" as={Ionicons} name="arrow-back" />}
          />
        </TouchableOpacity>
      </View>
      <View style={{ alignSelf: "center" }}>
        <Text style={{ fontSize: 10, marginLeft: -110, color: "grey" }}>
          hello,
        </Text>
        <Text style={{ fontSize: 20, marginLeft: -110, fontWeight: "bold" }}>
          Suparjo,S.Pd.I
        </Text>
      </View>
      <View style={{ alignSelf: "center" }}>
      <Avatar style={{marginLeft:-20,marginTop:5}} bg="white" source={{
      uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
    }}>
      </Avatar>
      </View>
    </View>
  );
};

export default HeaderExploreEvent;
