import React from "react";
import { Text, Avatar, Heading, StatusBar } from "native-base";
import { View, StyleSheet, Image, TouchableOpacity } from "react-native";
import { SvgXml } from "react-native-svg";
import LogoPremi from "../assets/logo-premi.svg";

const PaketSoalPremium = () => {
  return (
    <View>
      <StatusBar />

      <TouchableOpacity>
        <View
          style={{
            backgroundColor: "white",
            width: "95%",
            alignSelf: "center",
            borderRadius: 5,
            borderColor: "#E5E5E5",
            borderWidth: 2,
          }}
        >
          <View
            style={{
              marginHorizontal: 10,
              marginVertical: 10,
              flexDirection: "row",
            }}
          >
            <Avatar
              bg="transparent"
              source={{
                uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
              }}
            ></Avatar>
            <Text
              underline
              fontSize="lg"
              alignSelf="center"
              ml="4"
              color="grey"
            >
              Sulimin,S.Pd.I
            </Text>
          </View>
          <View style={{ flexDirection: "row" }}>
            <View
              style={{
                backgroundColor: "#009788",
                marginLeft: 10,
                padding: 5,
                paddingHorizontal: 10,
                borderRadius: 10,
              }}
            >
              <Text fontSize="md" color="white">
                Semester gasal
              </Text>
            </View>
            <View
              style={{
                backgroundColor: "#009788",
                marginLeft: 10,
                padding: 5,
                paddingHorizontal: 10,
                borderRadius: 10,
              }}
            >
              <Text fontSize="md" color="white">
                6 SD
              </Text>
            </View>
            <View
              style={{
                backgroundColor: "#009788",
                marginLeft: 10,
                padding: 5,
                paddingHorizontal: 10,
                borderRadius: 10,
              }}
            >
              <Text fontSize="md" color="white">
                Pengetahuan
              </Text>
            </View>
          </View>
          <View style={{ marginLeft: 10, marginTop: 5, maxWidth: 220 }}>
            <Text fontSize="xl">
              Penilaian tengah semester Akidah dan Akhlak
            </Text>
          </View>
          <View style={{ marginLeft: 10, marginVertical: 10 }}>
            <SvgXml xml={LogoPremi} width="25" height="25" />
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default PaketSoalPremium;
