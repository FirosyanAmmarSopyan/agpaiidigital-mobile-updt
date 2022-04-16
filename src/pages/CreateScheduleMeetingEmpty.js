import React from "react";
import { View } from "react-native";
import { StatusBar, Heading, Icon, IconButton } from "native-base";
import { Button } from "react-native-elements";
import { AntDesign } from "@expo/vector-icons";
import { SvgXml } from "react-native-svg";
import JadwalKalender3 from '../assets/jadwal-kalender3.svg';

function Header({ navigation }) {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        paddingVertical: 3,
        backgroundColor: "white",
        elevation: 5,
      }}
    >
      <View>
        <IconButton
          style={{ alignSelf: "center" }}
          icon={<Icon as={AntDesign} name="arrowleft" />}
        />
      </View>
      <View style={{ alignSelf: "center", marginLeft: -40 }}>
        <Heading bold size="md">
          Jadwal Rapat
        </Heading>
      </View>
      <View></View>
    </View>
  );
}

const CreateScheduleMeetingEmpty = () => {
  return (
    <View style={{ backgroundColor: "white", height: "100%" }}>
      <StatusBar />
      <Header />
      <View>
        <Button
          title="Buat jadwal Rapat"
          buttonStyle={{
            backgroundColor: "#009788",
            height: 50,
            marginTop: 10,
            marginLeft: 10,
          }}
          containerStyle={{
            width: "90%",
            alignSelf: "center",
          }}
          titleStyle={{ marginTop: -3, fontSize: 18, color: "white" }}
        />
      </View>
      <View style={{alignSelf:"center"}}>
        <SvgXml
          style={{
            marginTop: 10,
            marginLeft: 13,
            width: 40,
            height: 40,
          }}
          xml={JadwalKalender3}
        />
      </View>
      <View style={{alignSelf:"center"}}>
          <Heading bold>
              Belum ada jadwal rapat
          </Heading>
      </View>
    </View>
  );
};

export default CreateScheduleMeetingEmpty;
