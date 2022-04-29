import React from "react";
import { View, StatusBar, TouchableOpacity } from "react-native";
import { IconButton, Icon, Heading, Text } from "native-base";
import MoneyBag1 from "./../assets/money-bag1.svg";
import { Ionicons, AntDesign } from "@expo/vector-icons";
import { AnimatedCircularProgress } from "react-native-circular-progress";

function Header() {
  return (
    <View style={{ flexDirection: "row", backgroundColor: "white" }}>
      <IconButton
        style={{ width: "10%" }}
        icon={<Icon as={Ionicons} name="ios-arrow-back" />}
        borderRadius="full"
        _icon={{
          color: "black",
          size: "sm",
        }}
        _pressed={{
          bg: "silver",
        }}
      />
      <View style={{ marginLeft: 10, alignSelf: "center" }}>
        <Text fontSize="17  ">Penghasilan</Text>
      </View>
    </View>
  );
}

const PenilianPenghasilan = () => {
  return (
    <View style={{ height: "100%", backgroundColor: "white" }}>
      <StatusBar />
      <Header />
      <View
        style={{ marginTop: 20, flexDirection: "row", alignSelf: "center" }}
      >
        <TouchableOpacity>
          <IconButton
            style={{ width: "100%", backgroundColor: "#F1F1F1" }}
            icon={<Icon size="7" as={AntDesign} name="caretleft" />}
            borderRadius="full"
            _icon={{
              color: "black",
              size: "xs",
            }}
            _pressed={{
              bg: "silver",
            }}
          />
        </TouchableOpacity>
        <View style={{ marginHorizontal: 15 }}>
          <Heading style={{ alignSelf: "center" }} size="md">
            Maret
          </Heading>
          <Text bold style={{ alignSelf: "center", color: "#FBC02D" }}>
            2022
          </Text>
        </View>
        <TouchableOpacity>
          <IconButton
            style={{ width: "100%", backgroundColor: "#F1F1F1" }}
            icon={<Icon size="7" as={AntDesign} name="caretright" />}
            borderRadius="full"
            _icon={{
              color: "black",
              size: "xs",
            }}
            _pressed={{
              bg: "silver",
            }}
          />
        </TouchableOpacity>
      </View>
      <View
        style={{
          justifyContent: "space-between",
          flexDirection: "row",
          marginTop: 15,
          marginHorizontal: 10,
        }}
      >
        <View>
          <Text style={{ color: "#B8B8B8" }}>Total Sharing</Text>
          <Heading size="sm">Rp 5.000</Heading>
        </View>
        <View>
          <Text style={{ color: "#B8B8B8" }}>Total Pemasukan</Text>
          <Heading size="sm">Rp 5.000</Heading>
        </View>
      </View>
      <View>
        <AnimatedCircularProgress
          size={120}
          width={15}
          fill={50}
          prefill={60}
          tintColor="#00e0ff"
          tintColorSecondary="red"
          onAnimationComplete={() => console.log("onAnimationComplete")}
          backgroundColor="#3d5875"
        />
      </View>
    </View>
  );
};

export default PenilianPenghasilan;
