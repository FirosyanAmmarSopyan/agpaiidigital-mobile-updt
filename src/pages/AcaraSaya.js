import React from "react";
import { View, StatusBar, TouchableOpacity } from "react-native";
import {
  Text,
  IconButton,
  Icon,
  Heading,
  ScrollView,
  Input,
  Fab
} from "native-base";
import IsiAcara from "../components/IsiAcara";
import { Ionicons , AntDesign } from "@expo/vector-icons";

function Header(){
    return(
        <View flexDirection="row">
        <IconButton
          style={{ width: "17%" }}
          icon={<Icon size="7" as={Ionicons} name="ios-arrow-back" />}
          borderRadius="full"
          _icon={{
            color: "black",
            size: "md",
          }}
        />
        <Text style={{ alignSelf: "center" }} fontSize="22">
          Acara Saya
        </Text>
      </View>
    )
}

const AcaraSaya = () => {
  return (
    <View style={{ backgroundColor: "white", height: "100%" }}>
        <Header />
      <View style={{ marginHorizontal: 10, marginTop: 15 }}>
        <View style={{ alignSelf: "center" }}>
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
          <View>
            <IsiAcara />
            <IsiAcara />
            <IsiAcara />
            <IsiAcara />
          </View>
        </ScrollView>
      </View>
      <Fab backgroundColor={"#009788"} renderInPortal={false} shadow={2} size="sm" icon={<Icon color="white" as={<AntDesign name="plus" />} size="sm" />} />
    </View>
  );
};

export default AcaraSaya;
