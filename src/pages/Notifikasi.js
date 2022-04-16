import React from "react";
import { View, Text } from "react-native";
import {
  Avatar,
  Heading,
  Image,
  Button,
  Divider,
  Flex,
  Box,
  NativeBaseProvider,
  ScrollView,
} from "native-base";

const Notifikasi = () => {
  return (
    <ScrollView>
    <View style={{ marginTop: 15 }}>
      <Text thin style={{ marginLeft: 10, fontSize: 20 }}>
        Hari Ini
      </Text>
      <View style={{ marginTop: 15, marginLeft: 10, flexDirection: "row" }}>
        <Avatar
          size="10"
          source={{
            uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
          }}
        ></Avatar>
        <View style={{ marginLeft: 10 }}>
          <Heading size="md" bold>
            Pupu,S.Pd.I
          </Heading>
          <Heading size="sm">Memposting postingan baru</Heading>
        </View>
        <Text
          style={{
            alignSelf: "center",
            color: "#b1b1b1",
            marginTop: -20,
            marginLeft: -30,
          }}
        >
          3 menit
        </Text>
        <View>
          <Image
            style={{ borderRadius: 10, width: 50, height: 50, marginLeft: 75 }}
            source={{
              uri: "https://wallpaperaccess.com/full/317501.jpg",
            }}
            alt="Alternate Text"
            size={100}
          />
        </View>
      </View>
      <View style={{ marginTop: 15, marginLeft: 10, flexDirection: "row" }}>
        <Avatar
          size="10"
          source={{
            uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
          }}
        ></Avatar>
        <View style={{ marginLeft: 10 }}>
          <Heading size="md" bold>
            Pupu,S.Pd.I
          </Heading>
          <Heading size="sm">Memposting postingan baru</Heading>
        </View>
        <Text
          style={{
            alignSelf: "center",
            color: "#b1b1b1",
            marginTop: -20,
            marginLeft: -30,
          }}
        >
          3 menit
        </Text>
        <View style={{ marginLeft: 50 }}>
          <Button style={{ backgroundColor: "#009788" }}>ikuti balik</Button>
        </View>
      </View>
      <View style={{ marginTop: 15, marginLeft: 10, flexDirection: "row" }}>
        <Avatar
          size="10"
          source={{
            uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
          }}
        ></Avatar>
        <View style={{ marginLeft: 10 }}>
          <Heading size="md" bold>
            Pupu,S.Pd.I
          </Heading>
          <Heading size="sm">Menyukai postingan Anda</Heading>
        </View>
        <Text
          style={{
            alignSelf: "center",
            color: "#b1b1b1",
            marginTop: -20,
            marginLeft: -10,
          }}
        >
          3 menit
        </Text>
        <View>
          <Image
            style={{ borderRadius: 10, width: 50, height: 50, marginLeft: 70 }}
            source={{
              uri: "https://wallpaperaccess.com/full/317501.jpg",
            }}
            alt="Alternate Text"
            size={100}
          />
        </View>
      </View>
      <View>
        <Text thin style={{ fontSize: 20, marginLeft: 10, marginTop: 20 }}>
          Minggu Ini
        </Text>
        <View style={{ marginTop: 15, marginLeft: 10, flexDirection: "row" }}>
          <Avatar
            size="10"
            source={{
              uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
            }}
          ></Avatar>
          <View style={{ marginLeft: 10 }}>
            <Heading size="md" bold>
              Pupu,S.Pd.I
            </Heading>
            <Heading size="sm">Menyukai komentar Anda</Heading>
            <View style={{flexDirection:"row"}}>
              <Divider
                bg="#BCBCBC"
                thickness="2"
                orientation="vertical"
                height="4"
              />
              <Text style={{color:"#BCBCBC",marginLeft:5,alignSelf:"center",fontSize:12}}>selamat pagi guru rembang</Text>
            </View>
          </View>
          <Text
            style={{
              alignSelf: "center",
              color: "#b1b1b1",
              marginTop: -20,
              marginLeft: -10,
            }}
          >
            3 menit
          </Text>
          <View>
            <Image
              style={{
                borderRadius: 10,
                width: 50,
                height: 50,
                marginLeft: 70,
              }}
              source={{
                uri: "https://wallpaperaccess.com/full/317501.jpg",
              }}
              alt="Alternate Text"
              size={100}
            />
          </View>
        </View>
      </View>
    </View>
    </ScrollView>
  );
};

export default Notifikasi;
