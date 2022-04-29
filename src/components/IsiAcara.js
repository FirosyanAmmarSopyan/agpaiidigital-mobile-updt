import React from "react";
import { View } from "react-native";
import {
  StatusBar,
  Text,
  Icon,
  IconButton,
  Heading,
  Avatar,
} from "native-base";
import BannerIsiAcara from "./../assets/banner-isiacara.svg";
import { SvgXml } from "react-native-svg";
import { Ionicons, FontAwesome } from "@expo/vector-icons";
import UserSpeak from "./../assets/user-speak.svg";

const IsiAcara = () => {
  return (
    <View style={{ marginVertical: 15 }}>
      <StatusBar />
      <View
        style={{
          alignSelf: "center",
          backgroundColor: "white",
          borderRadius: 20,
          elevation: 10,
          width:"100%"
        }}
      >
        <View>
          <SvgXml xml={BannerIsiAcara} />
        </View>
        <View
          flexDirection="row"
          style={{
            position: "absolute",
            backgroundColor: "white",
            maxWidth: 220,
            borderBottomEndRadius: 20,
            padding: 5,
            
          }}
        >
          <Avatar
            bg="transparent"
            size={30}
            source={{
              uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
            }}
          ></Avatar>
          <Heading
            size="md"
            bold
            style={{ marginLeft: 10, alignSelf: "center", maxWidth: 150 }}
          >
            Sulimin Subrek,S.Pd.I
          </Heading>
        </View>
        <View style={{ marginLeft: 20 }}>
          <Heading bold>Rapat bulanan bersama guru agama</Heading>
          <Text style={{ marginVertical: 5, color: "grey" }}>
            22 Desember 2022 pukul 13:11
          </Text>
          <View
            flexDirection="row"
            style={{ marginLeft: -5, marginVertical: 5 }}
          >
            <Icon
              name="md-location-sharp"
              as={Ionicons}
              size="sm"
              style={{ color: "#009788" }}
            ></Icon>
            <Text
              style={{
                alignSelf: "center",
                fontWeight: "bold",
                fontSize: 17,
                marginLeft: 10,
              }}
            >
              Bujangan Bontot
            </Text>
          </View>
          <View
            style={{
              justifyContent: "space-between",
              flexDirection: "row",
              marginRight: 10,
            }}
          >
            <View flexDirection="row">
              <SvgXml
                style={{ marginVertical: 5, alignSelf: "center" }}
                xml={UserSpeak}
              />
              <Text
                style={{
                  alignSelf: "center",
                  marginLeft: 10,
                  fontWeight: "bold",
                  fontSize: 17,
                }}
              >
                Pelatihan
              </Text>
            </View>
            <View>
              <IconButton
                style={{ alignSelf: "center" }}
                width={"10%"}
                icon={<Icon as={FontAwesome} name="heart-o" />}
                borderRadius="full"
                _icon={{
                  color: "grey",
                  size: "6",
                }}
              />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default IsiAcara;
