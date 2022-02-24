import React, { Component } from "react";
import { View, Image, Text } from "react-native";
import { Logo, LogoSvg } from "./../store/Assets";
import { SvgXml } from "react-native-svg";

function PageA() {
  return (
    <View>
      <Text>Halo</Text>
      <Image source={Logo}></Image>
      <SvgXml width="200" height="200" xml={LogoSvg} />
    </View>
  );
}

export default PageA;
