import React from "react";
import { View, ScrollView, Dimensions } from "react-native";
import { Heading, StatusBar, Icon, IconButton, Text, Input } from "native-base";
import { Ionicons, Entypo, Feather } from "@expo/vector-icons";
import ComponentPackageSoalBiasa from "../components/ComponentPackageSoalBiasa";
import ComponentPackageSoalPremium from "../components/ComponentPackageSoalPremium";

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
        <Text fontSize="22  ">Paket Soal</Text>
      </View>
    </View>
  );
}

const PackageSoal = () => {

  return (
    <View style={{height:windowHeight,backgroundColor:"white"}}>
      <Header />
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
        <ComponentPackageSoalPremium />
        <ComponentPackageSoalBiasa />
        <ComponentPackageSoalBiasa />
        <ComponentPackageSoalBiasa />
      </ScrollView>
    </View>
  );
};

export default PackageSoal;
