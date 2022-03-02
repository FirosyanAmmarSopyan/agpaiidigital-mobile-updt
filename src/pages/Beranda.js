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
import { Logo, LogoSvg, BgBawah, Contohuser, content1 } from "../store/Assets";
import { SvgXml } from "react-native-svg";

const Beranda = ({ navigation }) => {
  return (
    <ScrollView>
      <Box flexDirection="row" bg="#FFFFFD" mt="0.5" width={"100%"}>
        <Box mt="2" ml="2" width={"75"} height={"75"}>
          <SvgXml xml={Contohuser} width={"100%"} height={"100%"} />
        </Box>

        <Box ml="1.5">
          <Box>
            <Text
              style={{
                fontWeight: "bold",
                color: "#3E3E3E",
              }}
              fontSize="2xl"
            >
              Pupu, S.Pd.I
            </Text>
            <Text
              style={{
                color: "#586369",
                fontWeight: "bold",
              }}
            >
              Guru PAI SDN 2 kembangan
            </Text>
            <Text
              style={{
                color: "#1C1D1F",
              }}
            >
              is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book.
            </Text>
          </Box>

          <Box bg="#9ADCFF">
            <SvgXml xml={content1} />
          </Box>
        </Box>
      </Box>
    </ScrollView>
  );
};

export default Beranda;
