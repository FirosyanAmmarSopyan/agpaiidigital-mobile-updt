import React from "react";
import { View, ScrollView, Dimensions } from "react-native";
import { Heading, StatusBar, Icon, IconButton, Text, Input } from "native-base";
import { Ionicons, Entypo, Feather } from "@expo/vector-icons";
import { Tab, TabView } from "react-native-elements";
import DetailButirSoal from "../components/DetailButirSoal";
import DetailButirSoalEsai from "../components/DetailButirSoalEsai";
import DetailLengkapButirSoal from "../components/DetailLengkapButirSoal";

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
        <Text fontSize="22  ">Detail butir Soal</Text>
      </View>
    </View>
  );
}

const DetailPenilaianButirSoal = () => {
  const [index, setIndex] = React.useState(0);
  return (
    <View>
      <StatusBar />
      <Header />
      <Tab
        style={{ elevation: 2 }}
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
          title="Butir Soal"
          titleStyle={{
            fontSize: 14,
            textTransform: "capitalize",
            color: "#009788",
            fontWeight: "bold",
          }}
        />
        <Tab.Item
          containerStyle={{ backgroundColor: "white" }}
          title="Detail lengkap"
          titleStyle={{
            fontSize: 14,
            textTransform: "capitalize",
            color: "#009788",
            fontWeight: "bold",
          }}
        />
      </Tab>
      <TabView value={index} onChange={setIndex} animationType="spring">
        <TabView.Item style={{ backgroundColor: "white", width: "100%"}}>
          <View style={{ height: windowHeight, backgroundColor: "white" }}>
            <ScrollView>
              <DetailButirSoal />
              <DetailButirSoal />
              <DetailButirSoal />
            </ScrollView>
          </View>
        </TabView.Item>
        <TabView.Item style={{ backgroundColor: "white", width: "100%" }}>
        <View style={{ height: windowHeight, backgroundColor: "white" }}>  
          <DetailLengkapButirSoal/>
          </View>
        </TabView.Item>
      </TabView>
    </View>
  );
};

export default DetailPenilaianButirSoal;
