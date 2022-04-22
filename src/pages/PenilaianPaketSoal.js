import React from "react";
import { View, ScrollView } from "react-native";
import { Heading, StatusBar, Icon, IconButton, Text, Input } from "native-base";
import { Ionicons, Entypo, Feather } from "@expo/vector-icons";
import { Tab, TabView } from "react-native-elements";
import PaketSoalPremium from "../components/PaketSoalPremium";
import PaketSoalBiasa from "../components/PaketSoalBiasa";
import PenilaianButirSoalBiasa from "../components/PenilaianButirSoalBiasa";
import PenilaianButirSoalPremium from "../components/PenilaianButirSoalPremium";

function Header() {
  return (
    <View
      style={{
        justifyContent: "space-between",
        flexDirection: "row",
        paddingVertical: 10,
        backgroundColor: "white",
      }}
    >
      <Heading style={{ alignSelf: "center", marginLeft: 15 }}>
        Penilaian AGPAII
      </Heading>
      <View flexDirection="row">
        <IconButton
          icon={<Icon as={Ionicons} name="notifications-outline" />}
          borderRadius="full"
          _icon={{
            color: "black",
            size: "sm",
          }}
        />
        <IconButton
          icon={<Icon as={Feather} name="menu" />}
          borderRadius="full"
          _icon={{
            color: "black",
            size: "sm",
          }}
        />
      </View>
    </View>
  );
}

const PenilaianPaketSoal = () => {
  const [index, setIndex] = React.useState(0);

  return (
    <>
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
          title="Paket Soal"
          titleStyle={{
            fontSize: 14,
            textTransform: "capitalize",
            color: "#009788",
            fontWeight: "bold",
          }}
        />
      </Tab>

      <TabView value={index} onChange={setIndex} animationType="spring">
        <TabView.Item style={{ backgroundColor: "white", width: "100%" }}>

        <View>
            <View style={{ alignSelf: "center", marginVertical: 5 }}>
              <Input
                placeholder="Cari Paket Soal"
                placeholderTextColor="black"
                variant="filled"
                width="85%"
                borderRadius="20"
                my="1"
                InputLeftElement={
                  <Icon
                    ml="2"
                    size="5"
                    color="black"
                    as={<Ionicons name="ios-search" />}
                  />
                }
              />
            </View>
            <ScrollView>
            <PenilaianButirSoalPremium />
                <PenilaianButirSoalBiasa />
                <PenilaianButirSoalBiasa />
                <PenilaianButirSoalBiasa />
                <PenilaianButirSoalBiasa />
            </ScrollView>
          </View>
        </TabView.Item>
        <TabView.Item style={{ backgroundColor: "white", width: "100%" }}>
          <View>
            <View style={{ alignSelf: "center", marginVertical: 5 }}>
              <Input
                placeholder="Cari Paket Soal"
                placeholderTextColor="black"
                variant="filled"
                width="85%"
                borderRadius="20"
                my="1"
                InputLeftElement={
                  <Icon
                    ml="2"
                    size="5"
                    color="black"
                    as={<Ionicons name="ios-search" />}
                  />
                }
              />
            </View>
            <ScrollView>
              <PaketSoalPremium />
              <PaketSoalBiasa />
              <PaketSoalBiasa />
              <PaketSoalBiasa />
              <PaketSoalBiasa />
            </ScrollView>
          </View>
        </TabView.Item>
      </TabView>
    </>
  );
};

export default PenilaianPaketSoal;
