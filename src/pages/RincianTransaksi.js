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

function Header() {
  return (
    <View style={{ flexDirection: "row", backgroundColor: "white" }}>
      <IconButton
        style={{ width: "10%" }}
        icon={<Icon as={Ionicons} name="ios-arrow-back" />}
        borderRadius="full"
        _icon={{
          color: "black",
          size: "sm",
        }}
        _pressed={{
          bg: "silver",
        }}
      />
      <View style={{ marginLeft: 10, alignSelf: "center" }}>
        <Text fontSize="17" fontWeight={"thin"} color={"black"}>
          Rincian Transaksi
        </Text>
      </View>
    </View>
  );
}

const RincianTransaksi = () => {
  return (
    <View style={{ backgroundColor: "#F5F8FF", height: "100%" }}>
      <StatusBar />
      <Header />
      <View
        style={{
          alignSelf: "center",
          backgroundColor: "white",
          width: "80%",
          marginTop: 20,
          flexDirection: "row",
          justifyContent: "space-between",
          paddingHorizontal: 20,
          paddingVertical: 10,
        }}
      >
        <View style={{ flexDirection: "column" }}>
          <Text style={{ fontWeight: "bold" }}>Icha Nurizfa</Text>
          <Text style={{ color: "#B8B8B8", fontSize: 12, marginTop: -5 }}>
            Paket soal
          </Text>
        </View>
        <View>
          <Avatar
            bg="amber.500"
            size={8}
            source={{
              uri: "https://bit.ly/broken-link",
            }}
          >
            IN
          </Avatar>
        </View>
      </View>
      <View
        style={{
          alignSelf: "center",
          backgroundColor: "white",
          width: "80%",
          justifyContent: "space-between",
          paddingHorizontal: 20,
          paddingVertical: 10,
          paddingBottom:60
        }}
      >
        <Text style={{ color: "#B8B8B8", alignSelf: "center", marginTop: -10 }}>
          __ __ __ __ __ __ __ __ __ __ __ __ __ __ __{" "}
        </Text>
        <View>
          <Text bold style={{ color: "#B8B8B8", fontSize: 13, marginTop: 10 }}>
            ID Transaksi
          </Text>
          <Heading size="xs">3023209244</Heading>
        </View>
        <View>
          <Text bold style={{ color: "#B8B8B8", fontSize: 13, marginTop: 10 }}>
          Tanggal & waktu transaksi
          </Text>
          <Heading size="xs">04 Apr 2022, 18.00 WIB</Heading>
        </View>
        <View>
          <Text bold style={{ color: "#B8B8B8", fontSize: 13, marginTop: 10 }}>
          Detail Item
          </Text>
          <Heading size="xs">Akidah dan akhlak</Heading>
        </View>
        <View>
          <Text bold style={{ color: "#B8B8B8", fontSize: 13, marginTop: 10 }}>
          Jumlah Transfer
          </Text>
          <Heading size="xs">Rp3.000</Heading>
        </View>
        <View>
          <Text bold style={{ color: "#B8B8B8", fontSize: 13, marginTop: 10 }}>
          Sumber pembayaran
          </Text>
          <Heading size="xs">Siswa pai</Heading>
        </View>
      </View>
    </View>
  );
};

export default RincianTransaksi;
