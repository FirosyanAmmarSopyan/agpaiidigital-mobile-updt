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
  AppBar,
  StyleSheet,
  StatusBar,
  Select,
  Image,
} from "native-base";
import { Flex, Spacer } from "native-base";
import { Col, Row, Grid } from "react-native-easy-grid";
import Icon from "react-native-vector-icons/FontAwesome5";
import { Logo, LogoSvg, BgBawah, Agpaii } from "../store/Assets";
import { SvgXml } from "react-native-svg";
import React from "react";

const Header = () => {
  return (
    <Box height="60">
      <Box alignItems={"flex-start"} ml="7" mt="3">
        <SvgXml xml={Agpaii} width={"40"} height={"40"} />
      </Box>
      <Box alignItems={"center"}>
        <Text>Tes</Text>
      </Box>
    </Box>
  );
};

export default Header;
