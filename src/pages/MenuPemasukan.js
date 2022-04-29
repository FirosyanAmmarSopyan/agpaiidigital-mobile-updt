import React from "react";
import { View, StatusBar, TouchableOpacity } from "react-native";
import {
  IconButton,
  Icon,
  Heading,
  Text,
  Input,
  Avatar,
  ScrollView,
} from "native-base";
import { Ionicons, AntDesign } from "@expo/vector-icons";
import { SvgXml } from "react-native-svg";
import IconPemasukan from "./../assets/icon-pemasukan.svg";

function Header() {
  return (
    <View
      style={{ flexDirection: "row", backgroundColor: "#009788" }}
    >
      <IconButton
        style={{ width: "10%" }}
        icon={<Icon as={Ionicons} name="ios-arrow-back" />}
        borderRadius="full"
        _icon={{
          color: "white",
          size: "sm",
        }}
        _pressed={{
          bg: "silver",
        }}
      />
      <View style={{ marginLeft: 10, alignSelf: "center" }}>
        <Text fontSize="17" fontWeight={"thin"} color={"white"}>
          Pemasukan
        </Text>
      </View>
    </View>
  );
}

function IsiTransaksi() {
  return (
    <View
      flexDirection="row"
      style={{
        marginHorizontal: 12,
        marginTop: 5,
        justifyContent: "space-between",
      }}
    >
      <View flexDirection="row">
        <Avatar
          bg="amber.500"
          size={8}
          source={{
            uri: "https://bit.ly/broken-link",
          }}
        >
          SM
        </Avatar>
        <View style={{ marginLeft: 10 }}>
          <Text style={{ fontWeight: "bold" }}>Sulimin S.Pd I</Text>
          <Text style={{ color: "#B8B8B8", fontSize: 12, marginTop: -5 }}>
            butir soal
          </Text>
        </View>
      </View>
      <View>
        <Text style={{ fontWeight: "bold", alignSelf: "center" }}>
          Rp 5.000
        </Text>
      </View>
    </View>
  );
}

const MenuPemasukan = () => {
  return (
    <View>
      <StatusBar />
      <Header />
      <View style={{ backgroundColor: "#009788", height: "30%" }}>
        <SvgXml
          style={{ marginTop: 15, alignSelf: "center" }}
          xml={IconPemasukan}
          width="40%"
          height="30%"
        />
        <Heading style={{ color: "white", alignSelf: "center", marginTop: 10 }}>
          Rp 5.000
        </Heading>
        <View
          style={{ alignSelf: "center", flexDirection: "row", marginTop: 5 }}
        >
          <Icon
            style={{ alignSelf: "center" }}
            as={AntDesign}
            name="arrowdown"
            size={4}
            color="white"
          />
          <Text style={{ color: "white" }}>82.14%</Text>
        </View>
      </View>
      <View
        style={{
          marginHorizontal: 10,
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Input
          placeholder="Cari Transaksi"
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
        <IconButton
          style={{ alignSelf: "center" }}
          icon={<Icon as={Ionicons} name="filter" />}
          borderRadius="full"
          _icon={{
            color: "black",
            size: "sm",
          }}
          _pressed={{
            bg: "silver",
          }}
        />
      </View>
      <View>
        <Text style={{ color: "#B8B8B8", marginLeft: 10 }}>31 Maret 2022</Text>
          <ScrollView>
        <View>
            <IsiTransaksi />
            <IsiTransaksi />
            <IsiTransaksi />
        </View>
          </ScrollView>
      </View>
    </View>
  );
};

export default MenuPemasukan;
