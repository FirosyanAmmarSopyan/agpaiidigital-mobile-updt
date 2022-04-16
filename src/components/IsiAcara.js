import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import {
  Icon,
  IconButton,
  NativeBaseProvider,
  Center,
  Box,
  StatusBar,
  Heading,
  AspectRatio,
  HStack,
  Stack,
  ScrollView,
  Avatar,
} from "native-base";
import PosterAcara2 from "../assets/posterAcara2.svg";
import MapsAcara from "../assets/MapsAcara.svg";
import { MaterialIcons, AntDesign, Ionicons, Entypo, FontAwesome } from "@expo/vector-icons";
import { SvgXml } from "react-native-svg";

const IsiAcara = () => {
  return (
    <View style={{ backgroundColor: "#ffffff" }}>
      <Box alignItems="center">
        <View
          style={{
            borderTopStartRadius: 15,
            borderTopEndRadius: 15,
            backgroundColor: "#009788",
            paddingBottom: 15,
            marginBottom: 20,
            borderBottomEndRadius: 15,
            borderBottomStartRadius: 15,
          }}
        >
          <Box
            style={{
              borderTopStartRadius: 15,
              borderTopEndRadius: 15,
              borderBottomEndRadius: 15,
              borderBottomStartRadius: 0,
            }}
            maxW="80"
            rounded="lg"
            overflow="hidden"
            borderColor="coolGray.200"
            borderWidth="1"
            _dark={{
              borderColor: "coolGray.600",
              backgroundColor: "gray.700",
            }}
            _web={{
              shadow: 2,
              borderWidth: 0,
            }}
            _light={{
              backgroundColor: "gray.50",
            }}
          >
            <Box>
              <AspectRatio w="100%" ratio={16 / 9}>
                <SvgXml xml={PosterAcara2} />
              </AspectRatio>
              <Box
                style={{
                  borderBottomEndRadius: 20,
                  flexDirection: "row",
                  alignItems: "center",
                }}
                bg="#ffffff"
                _text={{
                  fontWeight: "500",
                  fontSize: "md",
                  marginX: 5,
                }}
                position="absolute"
                top="0"
                px="3"
                py="1.5"
              >
                <Avatar
                  size="sm"
                  source={{
                    uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
                  }}
                />
                Sulimin,S.Pd.I
              </Box>
            </Box>
            <Stack p="4" space={3}>
              <Stack space={3}>
                <View style={{ flexDirection: "row" }}>
                  <Heading style={{ maxWidth: 200 }} size="md" ml="-1">
                    Rapat bulanan bersama guru agama
                  </Heading>
                  <View style={{backgroundColor:"white",marginLeft:50,borderRadius:100,width:43,height:"100%",marginTop:-30 }}>
                  <LinearGradient
                      // Button Linear Gradient
                      colors={["#00E9D1", "#009788"]}
                      start={{ x: 0, y: 1 }}
                      style={{ borderRadius: 100, margin:5 }}
                      end={{ x: 1, y: 0.9 }}
                    >
                      <IconButton
                      style={{borderRadius:100}}
                        icon={<Icon style={{marginLeft:3}} as={FontAwesome} name="bookmark" />}
                        _icon={{
                          color: "white",
                          size: "xs",
                        }}
                      />
                    </LinearGradient>
                  </View>
                </View>

                <Text fontSize="xs" color="silver" fontWeight="100" ml="-0.5">
                  22 Desember 2022 pukul 13:11
                </Text>
              </Stack>
              <View alignItems="center">
                <SvgXml style={{ marginBottom: -10 }} xml={MapsAcara} />
              </View>
            </Stack>
          </Box>
        </View>
      </Box>
    </View>
  );
};

export default IsiAcara;
