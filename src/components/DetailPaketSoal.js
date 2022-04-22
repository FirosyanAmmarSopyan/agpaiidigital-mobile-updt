import React from "react";
import { View, StatusBar, TouchableOpacity } from "react-native";
import { Heading, Icon, Text, Divider } from "native-base";
import { SvgXml } from "react-native-svg";
import DiaryIcon from "../assets/diary-icon.svg";
import NoteCheck from "../assets/note-check.svg";
import CalendarTime from "../assets/calendar-time.svg";
import CalendarHat from "../assets/calendar-hat.svg";
import TeachIcon from "../assets/teach-icon.svg";
import LampIcon from "../assets/lamp-icon.svg";

const DetailPaketSoal = () => {
  return (
    <View style={{ marginLeft: 15, marginTop: 15 }}>
      <Heading bold color="#009788">
        Detail Paket
      </Heading>
      <View style={{ flexDirection: "row", marginTop: 20 }}>
        <SvgXml xml={DiaryIcon} width="10%" />
        <Text
          style={{
            alignSelf: "center",
            fontSize: 19,
            fontWeight: "bold",
            marginLeft: 10,
          }}
        >
          Penilaian tengah semester
        </Text>
      </View>
        

      <View style={{ flexDirection: "row", marginTop: 20 }}>
        <SvgXml xml={NoteCheck} width="10%" />
        <Text
          style={{
            alignSelf: "center",
            fontSize: 19,
            fontWeight: "bold",
            marginLeft: 10,
          }}
        >
          Akidah dan akhlak
        </Text>
      </View>

      <View style={{ flexDirection: "row", marginTop: 20 }}>
        <SvgXml xml={CalendarTime} width="10%" />
        <Text
          style={{
            alignSelf: "center",
            fontSize: 19,
            fontWeight: "bold",
            marginLeft: 10,
          }}
        >
          2022/2023
        </Text>
      </View>

      <View style={{ flexDirection: "row", marginTop: 20 }}>
        <SvgXml xml={LampIcon} width="10%" />
        <Text
          style={{
            alignSelf: "center",
            fontSize: 19,
            fontWeight: "bold",
            marginLeft: 10,
          }}
        >
          Pengetahuan
        </Text>
      </View>

      <View style={{ flexDirection: "row", marginTop: 20 }}>
        <SvgXml xml={TeachIcon} width="10%" />
        <Text
          style={{
            alignSelf: "center",
            fontSize: 19,
            fontWeight: "bold",
            marginLeft: 10,
          }}
        >
          6 SD
        </Text>
      </View>

      <View style={{ flexDirection: "row", marginTop: 20 }}>
        <SvgXml xml={CalendarHat} width="10%" />
        <Text
          style={{
            alignSelf: "center",
            fontSize: 19,
            fontWeight: "bold",
            marginLeft: 10,
          }}
        >
          Genap
        </Text>
      </View>
    </View>
  );
};

export default DetailPaketSoal;
