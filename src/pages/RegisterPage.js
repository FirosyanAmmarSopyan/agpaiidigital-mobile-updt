import {
  Box,
  Text,
  Button,
  Input,
  Center,
  ScrollView,
  StyleSheet,
  Select,
  Image,
} from "native-base";
import React, { Component } from "react";
import { Logo, LogoSvg, BgBawah } from "../store/Assets";
import { SvgXml } from "react-native-svg";

const RegisterPage = ({ navigation }) => {
  let [service, setService] = React.useState("");
  return (
    <ScrollView mt="15">
      <Box style={{ marginTop: 40 }} px="5">
        <Box alignItems={"center"}>
          <SvgXml xml={LogoSvg} />
          <Text style={{ color: "#009788", fontWeight: "bold" }}>
            Tampilan Baru dan Ringan
          </Text>
        </Box>
        <Box style={{ marginTop: 30 }}>
          <Text bold fontSize="30">
            DAFTAR
          </Text>
        </Box>
        <Box marginTop="4">
          <Input
            variant="underlined"
            placeholderTextColor="black"
            placeholder="Nama anda"
          />
        </Box>
        <Box marginTop="3">
          <Input
            variant="underlined"
            placeholderTextColor="black"
            placeholder="Email"
            type="email-address"
          />
        </Box>
        <Box marginTop="3">
          <Input
            variant="underlined"
            placeholderTextColor="black"
            placeholder="Kata Sandi"
            type="password"
          />
        </Box>
        <Box marginTop="3">
          <Input
            variant="underlined"
            placeholderTextColor="black"
            placeholder="Ulangi kata Sandi"
            type="password"
          />
        </Box>
        <Box>
          <Select
            selectedValue={service}
            minWidth="200"
            accessibilityLabel="Daftar sebagai"
            placeholder="Daftar sebagai"
            placeholderTextColor="black"
            mt={1}
            onValueChange={(itemValue) => setService(itemValue)}
          >
            <Select.Item label="Guru PAI" value="GP" />
            <Select.Item label="Kepala sekolah dan guru PAI" value="KSGP" />
            <Select.Item label="Pengawas PAI" value="PP" />
            <Select.Item label="Pembina" value="P" />
          </Select>
        </Box>

        <Box mt="3">
          <Button height="10" style={{ backgroundColor: "#009788" }} size="sm">
            <Text bold style={{ color: "white" }}>
              MASUK
            </Text>
          </Button>
        </Box>
      </Box>
    </ScrollView>
  );
};

export default RegisterPage;
