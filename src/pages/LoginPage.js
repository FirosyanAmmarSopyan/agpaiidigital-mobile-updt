import React, { Component } from "react";
import {
  Box,
  Text,
  Button,
  Input,
  Center,
  ScrollView,
  Image,
} from "native-base";
import { Logo, LogoSvg, BgBawah } from "../store/Assets";
import { SvgXml } from "react-native-svg";
import { Dimensions } from "react-native";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
import { StyleSheet } from "react-native";

const LoginPage = ({ navigation }) => {
  return (
    <ScrollView>
      <Box style={{ marginTop: 40 }} px="5">
        <Box alignItems={"center"}>
          <SvgXml xml={LogoSvg} />
          <Text style={{ color: "#009788", fontWeight: "bold" }}>
            Tampilan Baru dan Ringan
          </Text>
        </Box>
        <Box style={{ marginTop: 30 }}>
          <Text bold fontSize="30">
            MASUK
          </Text>
        </Box>
        <Box marginTop="5">
          <Input
            placeholderTextColor="black"
            variant="underlined"
            placeholder="Email"
            type="email-address"
          />
        </Box>
        <Box marginTop="7">
          <Input
            placeholderTextColor="black"
            variant="underlined"
            placeholder="Kata Sandi"
            type="email-address"
          />
        </Box>
        <Box mt="3" alignItems="flex-start">
          <Button backgroundColor={"transparent"} variant="ghost">
            <Text style={{ color: "#009788" }} fontSize="sm">
              lupa kata sandi
            </Text>
          </Button>
        </Box>
        <Box mt="3">
          <Button height="10" style={{ backgroundColor: "#009788" }} size="sm">
            <Text bold style={{ color: "white" }}>
              MASUK
            </Text>
          </Button>
        </Box>
        <Box mt="3" alignItems={"center"}>
          <Text>Belum punya akun ?</Text>
        </Box>
        <Box mt="3">
          <Button
            variant="outline"
            height="10"
            backgroundColor={"transparent"}
            style={{ borderColor: "black" }}
            size="sm"
          >
            <Text bold style={{ color: "black" }}>
              DAFTAR
            </Text>
          </Button>
        </Box>
      </Box>
      <Box style={styles.footer}>
        <SvgXml height={200} width={windowWidth} xml={BgBawah} />
      </Box>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  footer: {
    position: "absolute",
    left: 0,
    height: 200,
    top: windowHeight - 200,
    width: windowWidth,
    // backgroundColor: "red",
  },
});

export default LoginPage;
