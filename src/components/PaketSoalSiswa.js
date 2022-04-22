import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { SvgXml } from "react-native-svg";
import { Heading, Avatar , Divider} from "native-base";

const PaketSoalSiswa = () => {
  return (
    <View>
      <View style={{ flexDirection: "row", marginLeft: 20, marginVertical: 10 }}>
        <Avatar
          bg="transparent"
          source={{
            uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
          }}
        ></Avatar>
        <View
          style={{
            flexDirection: "column",
            alignSelf: "center",
            marginLeft: 10,
          }}
        >
          <Heading style={{ fontWeight: "bold" }}>Hartini</Heading>
          <Text style={{ color: "#B8B8B8" }}>10 kali sesi</Text>
        </View>
      </View>
      <View style={{ flexDirection: "row", marginLeft: 20,  marginVertical: 10 }}>
        <Avatar
          bg="transparent"
          source={{
            uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
          }}
        ></Avatar>
        <View
          style={{
            flexDirection: "column",
            alignSelf: "center",
            marginLeft: 10,
          }}
        >
          <Heading style={{ fontWeight: "bold" }}>Puang</Heading>
          <Text style={{ color: "#B8B8B8" }}>10 kali sesi</Text>
        </View>
      </View>

      <View style={{ flexDirection: "row", marginLeft: 20, marginVertical: 10}}>
        <Avatar
          bg="transparent"
          source={{
            uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
          }}
        ></Avatar>
        <View
          style={{
            flexDirection: "column",
            alignSelf: "center",
            marginLeft: 10,
          }}
        >
          <Heading style={{ fontWeight: "bold" }}>Blangkon</Heading>
          <Text style={{ color: "#B8B8B8" }}>10 kali sesi</Text>
        </View>
      </View>
      <Divider thickness="2"/>
    </View>
  );
};

export default PaketSoalSiswa;
