import React from "react";
import { View, StatusBar, TouchableOpacity } from "react-native";
import { Heading, Icon, Text, Divider , ScrollView } from "native-base";
import { SvgXml } from "react-native-svg";
import DiaryIcon from "../assets/diary-icon.svg";
import NoteCheck from "../assets/note-check.svg";
import CalendarTime from "../assets/calendar-time.svg";
import CalendarHat from "../assets/calendar-hat.svg";
import TeachIcon from "../assets/teach-icon.svg";
import LampIcon from "../assets/lamp-icon.svg";
import IconKertas from "../assets/icon-kertas.svg";
import IndikatorButirSoal from "../components/IndikatorButirSoal";

const DetailLengkapButirSoal = () => {
  return (
    <View style={{ marginLeft: 15, marginTop: 15 }}>
        <ScrollView>
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
          Soal akidah dan akhlak
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
          Pengetahuan dan Pemahaman
        </Text>
      </View>

      <View style={{ flexDirection: "row", marginTop: 20 }}>
        <SvgXml xml={IconKertas} width="10%" />
        <Text
          style={{
            alignSelf: "center",
            fontSize: 19,
            fontWeight: "bold",
            marginLeft: 10,
          }}
        >
         Sopan santun terhadap orang tua
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
      <Divider my="2"></Divider>
      <IndikatorButirSoal/>
      </ScrollView> 
    </View>
  );
};

export default DetailLengkapButirSoal;
