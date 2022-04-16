import React from "react";
import { View, Text, StatusBar } from "react-native";
import { IconButton, Icon, Heading, Input, ScrollView } from "native-base";
import { Button } from "react-native-elements";
import { Ionicons, MaterialIcons, AntDesign } from "@expo/vector-icons";
import IsiListRapat from "../components/IsiListRapat";

function Header() {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: "white",
      }}
    >
      <View>
        <IconButton
          style={{ alignSelf: "center" }}
          icon={<Icon as={AntDesign} name="arrowleft" />}
        />
      </View>
      <View style={{ alignSelf: "center", marginLeft: -50 }}>
        <Heading bolds size="lg">Rapat</Heading>
      </View>
      <View></View>
    </View>
  );
}

const SelectListMeeting = () => {
  return (
    <View style={{ backgroundColor: "white", height: "100%" }}>
      <StatusBar />
      <Header />
      <View
        style={{
          flexDirection: "row",
          marginTop: 10,
          alignSelf: "center",
          backgroundColor: "white",
        }}
      >
        <Button
          title={"Explore"}
          titleStyle={{ fontSize: 15, color: "white" }}
          buttonStyle={{
            width: 132,
            height: 38,
            backgroundColor: "#009788",
            borderRadius: 20,
            marginRight: 20,
          }}
        />
        <Button
          title={"Bergabung"}
          titleStyle={{ fontSize: 15, color: "black" }}
          buttonStyle={{
            width: 132,
            height: 38,
            backgroundColor: "#F6F6F6",
            borderRadius: 20,
          }}
        />
      </View>
      <View style={{ alignSelf: "center", marginTop: 20 }}>
        <Input
          placeholder="Cari"
          placeholderTextColor="black"
          variant="filled"
          fontSize={20}
          backgroundColor="#F6F6F6"
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
        <ScrollView>
          <IsiListRapat />
          <IsiListRapat />
          <IsiListRapat />
          <IsiListRapat />
          <IsiListRapat />
          <IsiListRapat />

        </ScrollView>
      </View>
    </View>
  );
};

export default SelectListMeeting;
