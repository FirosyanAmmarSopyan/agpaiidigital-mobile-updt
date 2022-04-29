import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { IconButton, StatusBar, Icon,Heading,Button } from "native-base";
import { AntDesign } from "@expo/vector-icons";

const HeaderPickPhoto = () => {
  return (
    <View>
      <StatusBar />
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <View flexDirection="row">
          <IconButton
            style={{ alignSelf: "center" }}
            icon={<Icon as={AntDesign} name="arrowleft" />}
          />
          <Heading size="md" style={{ alignSelf: "center",marginLeft:10 }}>Galeri</Heading>
        </View>
        <View style={{ alignSelf: "center" }}>
          <Button
            small
            style={{ borderRadius: 20, width: 100, backgroundColor: "transparent" }}
          >
            <Heading size="xs" style={{ color: "black" }}>Selesai</Heading>
          </Button>
        </View>
      </View>
    </View>
  );
};

export default HeaderPickPhoto;
