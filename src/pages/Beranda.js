import {
  Box,
  Text,
  Button,
  Input,
  Center,
  IconButton,
  ScrollView,
  HStack,
  MaterialIcons,
  Icon,
  AppBar,
  StyleSheet,
  StatusBar,
  Select,
  Image,
} from "native-base";
import React, { Component } from "react";
import { Logo, LogoSvg, BgBawah, Contohuser } from "../store/Assets";
import { SvgXml } from "react-native-svg";

const Beranda = ({ navigation }) => {
  return (
    <Box m={5}>
      <Box ml="3">
        <SvgXml xml={Contohuser} width={"80"} height={"80"} />
      </Box>
      <Box>
        <Text style={{ fontWeight: "bold", color: "#3E3E3E" }} fontSize="2xl">
          Pupu, S.Pd.I
        </Text>
        <Text style={{ color: "#586369", fontWeight: "bold" }}>
          Guru PAI SDN 2 kembangan
        </Text>
        <Text>
          is simply dummy text of the printing and typesetting industry. Lorem
          Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a type specimen book.
        </Text>
      </Box>
    </Box>
  );
};

export default Beranda;
