import React from "react";
import { View, Text, Dimensions } from "react-native";
import {
  Icon,
  IconButton,
  HStack,
  NativeBaseProvider,
  Center,
  Box,
  StatusBar,
  Image,
  Heading,
} from "native-base";
import { Button } from "react-native-elements";
import { SvgXml } from "react-native-svg";
import HeaderEvent from "../assets/HeaderEvent.svg";
import EmptyEvent2 from "../assets/EmptyEvent2.svg";
import { MaterialIcons, AntDesign, Ionicons, Entypo } from "@expo/vector-icons";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const MakeEventEmpty = () => {
  return (
    <View>
      <View>
        <IconButton
          style={{ width: "15%", zindex: 1, position: "absolute", top: "5%" }}
          icon={<Icon size="md" as={Ionicons} name="arrow-back" />}
        />
      </View>
      <View>
        <SvgXml style={{ zIndex: -1 }} xml={HeaderEvent} />
      </View>
      <View style={{ alignSelf: "center", marginVertical: 10 }}>
        <Heading size="2xl">Acara AGPAII</Heading>
      </View>
      <View style={{ flexDirection: "row", justifyContent: "space-evenly" }}>
        <Button
          title="Explore"
          buttonStyle={{
            backgroundColor: "#009788",
            borderRadius: 10,
          }}
          containerStyle={{
            width: 132,
            marginVertical: 10,
          }}
        />
        <Button
          title="Undangan"
          buttonStyle={{
            borderColor: "#009788",
            borderRadius: 10,
          }}
          type="outline"
          titleStyle={{ color: "#009788" }}
          containerStyle={{
            width: 132,
            marginVertical: 10,
          }}
        />
      </View>
      <View>
        <SvgXml
          style={{ alignSelf: "center", marginTop: 20 }}
          xml={EmptyEvent2}
        />
      </View>
      <View style={{ alignItems: "center" }}>
        <Heading size="lg" style={{ alignSelf: "center" }}>
          Belum ada acara yang kamu buat
        </Heading>
        <Text
          style={{ alignSelf: "center", textAlign: "center", color: "#B8B8B8" }}
        >
          Buat acara anda dan terhubung dengan pengguna lain. acara yang adan
          buat akan muncul disiniI
        </Text>
        <View>
          <IconButton
            icon={<Icon as={Entypo} name="plus" />}
            borderRadius="full"
            backgroundColor="#009788"
            _icon={{
              color: "white",
              size: "md",
            }}
          />
        </View>
      </View>
    </View>
  );
};

export default MakeEventEmpty;
