import React from "react";
import { View, StatusBar, Dimensions, ScrollView } from "react-native";
import { Icon, IconButton, Heading, HStack, Text , TextArea,Button } from "native-base";
import { Ionicons } from "@expo/vector-icons";
import { Tab, TabView } from "react-native-elements";
import ButirSoal from "./ButirSoal";
import DetailPaketSoal from "../components/DetailPaketSoal";
import PaketSoalSiswaKosong from "../components/PaketSoalSiswaKosong";
import PaketSoalKomentar from "../components/PaketSoalKomentar";
import PaketSoalKomentarKosong from "../components/PaketSoalKomentarKosong";
import { SvgXml } from "react-native-svg";
import DiaryIcon from "../assets/diary-icon.svg";
import NoteCheck from "../assets/note-check.svg";
import CalendarTime from "../assets/calendar-time.svg";
import CalendarHat from "../assets/calendar-hat.svg";
import TeachIcon from "../assets/teach-icon.svg";
import LampIcon from "../assets/lamp-icon.svg";

const windowHeight = Dimensions.get("window").height;
const windowWidth = Dimensions.get("window").width;

function Header() {
  return (
    <View style={{ flexDirection: "row", backgroundColor: "white" }}>
      <IconButton
        style={{ width: "12%" }}
        icon={<Icon size="7" as={Ionicons} name="ios-arrow-back" />}
        borderRadius="full"
        _icon={{
          color: "black",
          size: "md",
        }}
      />
      <View style={{ alignSelf: "center" }}>
        <Text bold fontSize="22  ">Paket Soal</Text>
      </View>
    </View>
  );
}

const PaketSoalDetail = () => {
  const [index, setIndex] = React.useState(0);
  return (
    <View>
      <StatusBar backgroundColor="grey" />
      <Header />
      <Tab
        style={{ height: "90%" }}
        value={index}
        onChange={(e) => setIndex(e)}
        indicatorStyle={{
          backgroundColor: "#009788",
          height: 2,
        }}
        variant="default"
      >
        <Tab.Item
          containerStyle={{ backgroundColor: "white" }}
          title="Detail"
          titleStyle={{
            fontSize: 12,
            textTransform: "capitalize",
            color: "#009788",
            fontWeight: "bold",
            marginTop: 10,
          }}
        />
        <Tab.Item
          containerStyle={{ backgroundColor: "white" }}
          title="Butir Soal"
          titleStyle={{
            fontSize: 12,
            textTransform: "capitalize",
            color: "#009788",
            fontWeight: "bold",
            marginTop: 10,
          }}
        />
        <Tab.Item
          containerStyle={{ backgroundColor: "white" }}
          title="Siswa"
          titleStyle={{
            fontSize: 12,
            textTransform: "capitalize",
            color: "#009788",
            fontWeight: "bold",
            marginTop: 10,
          }}
        />
        <Tab.Item
          containerStyle={{ backgroundColor: "white" }}
          title="Komentar"
          titleStyle={{
            fontSize: 12,
            textTransform: "capitalize",
            color: "#009788",
            fontWeight: "bold",
            marginTop: 10,
          }}
        />
      </Tab>
      <TabView value={index} onChange={setIndex} animationType="spring">
        <TabView.Item
          style={{
            backgroundColor: "white",
            width: "100%",
            height: windowHeight,
          }}
        >
          <DetailPaketSoal />
        </TabView.Item>
        <TabView.Item  style={{ backgroundColor: "white", width: "100%" , height: windowHeight }}>
            <ButirSoal />
        </TabView.Item>
        <TabView.Item style={{ backgroundColor: "white", width: "100%" }}>
          <View style={{ height: windowHeight }}>
            <PaketSoalSiswaKosong />
          </View>
        </TabView.Item>
        <TabView.Item style={{ width: windowWidth }}>
          <View style={{ height: windowHeight, backgroundColor: "white" }}>
            <View style={{position:"relative"}}>
            <PaketSoalKomentar />
            <PaketSoalKomentar />
            </View>
            <View
              style={{
                flexDirection: "row",
                backgroundColor: "white",
                borderTopWidth: 1,
                borderTopColor: "#efefef",
              }}
            >
              <TextArea
              zIndex={1}
                h={10}
                width="75%"
                variant="unstyled"
                placeholder="Tulis Komentar"
                placeholderTextColor="black"
                fontSize="15"
              />
              <Button
                style={{
                  width: 70,
                  marginHorizontal: 10,
                  height: 30,
                  marginTop: 5,
                  backgroundColor: "#009788",
                }}
              >
                Kirim
              </Button>
            </View>
          </View>
        </TabView.Item>
      </TabView>
    </View>
  );
};

export default PaketSoalDetail;
