import React from "react";
import { View, StatusBar, Dimensions, ScrollView } from "react-native";
import { Icon, IconButton, Heading, HStack, Text , TextArea,Button } from "native-base";
import { Ionicons , AntDesign } from "@expo/vector-icons";
import { Tab, TabView } from "react-native-elements";
import ButirSoal from "./ButirSoal";
import DetailPaketSoal from "../components/DetailPaketSoal";
import PaketSoalSiswaKosong from "../components/PaketSoalSiswaKosong";
import MakePackageQuestionStandar from "../components/MakePackageQuestionStandar";

import { SvgXml } from "react-native-svg";

const windowHeight = Dimensions.get("window").height;
const windowWidth = Dimensions.get("window").width;

function Header() {
  return (
        <View style={{backgroundColor: "white"}}>
          <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
            <View flexDirection="row">
              <IconButton
                style={{ alignSelf: "center" }}
                icon={<Icon as={AntDesign} size="7" name="arrowleft" />}
                backgroundColor="transparent"
              />
              <Heading size="md" style={{ alignSelf: "center",marginLeft:10 }}>Buat Paket Soal</Heading>
            </View>
            <View style={{ alignSelf: "center" }}>
              <Button
                small
                style={{ borderRadius: 20, width: 100, backgroundColor: "transparent" }}
              >
                <Heading size="sm" style={{ color: "#313131" }}>Berikutnya</Heading>
              </Button>
            </View>
          </View>
        </View>
      );
}

const MakeQuestion = () => {
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
          title="Rakit Soal"
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
          title="Selesai"
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
            width: "100%",
            height: windowHeight,
            marginTop: 39
          }}
        >
          <MakePackageQuestionStandar/>
        </TabView.Item>
        <TabView.Item  style={{ backgroundColor: "white", width: "100%" , height: windowHeight }}>
            <ButirSoal />
        </TabView.Item>
        <TabView.Item style={{ backgroundColor: "white", width: "100%" }}>
          <View style={{ height: windowHeight }}>
            <PaketSoalSiswaKosong />
          </View>
        </TabView.Item>
      </TabView>
    </View>
  );
};

export default MakeQuestion;
