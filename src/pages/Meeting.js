import React from "react";
import { View, Text, Dimensions, TextInput , TouchableOpacity } from "react-native";
import Header from "../components/HeaderRapat";
import { SvgXml } from "react-native-svg";
import logoBuat from "../assets/BuatRapat.svg";
import { Icon, IconButton } from "native-base";
import { MaterialIcons, Feather } from "@expo/vector-icons";
import Meet from "../assets/MakeMeet.svg";

const windowWidth = Dimensions.get("window").width;
const Meeting = () => {
  return (
    <View>
      <Header />
      <View>
        <View style={{ alignItems: "center", marginTop: 5 }}>
          <SvgXml xml={logoBuat} />
          <Text
            style={{
              width: 154,
              textAlign: "center",
              fontSize: 25,
              fontWeight: "bold",
            }}
          >
            Buat Rapat Lebih Fleksibel
          </Text>
          <Text
            style={{
              textAlign: "center",
              width: 333,
              fontSize: 16,
              marginTop: 14,
            }}
          >
            Anda dapat membuat rapat untuk orang yang anda undang atau terbuka
            untuk umum
          </Text>
        </View>
        <View
          style={{
            width: windowWidth,
            backgroundColor: "#00E9D1",
            marginTop: 59,
            height: 415,
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
          }}
        >
          <TextInput
            style={{
              backgroundColor: "#F6F6F6",
              width: 330,
              alignSelf: "center",
              marginTop: 15,
              borderRadius: 20,
              color: "#3E3E3E",
              height: 40,
              fontSize: 17,
            }}
          >
            <Icon as={MaterialIcons} name="search" color="black" />

          </TextInput>
          <View
            style={{
              backgroundColor: "#FFFFFF",
              marginTop: 30,
              width: windowWidth,
              height: 415,
              borderTopLeftRadius: 70,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                marginTop: 20,
                alignSelf: "center",
                shadowColor: "#000",
                shadowOffset: {
                  width: 0,
                  height: 7,
                },
                shadowOpacity: 0.43,
                shadowRadius: 9.51,

              }}
            >
              <TouchableOpacity style={{flexDirection: "row"}}>
              <SvgXml  xml={Meet} />
              <Text
                style={{
                  textAlignVertical: "center",
                  fontWeight: "bold",
                  width: 280,
                  height: 56,
                  color: "#3E3E3E",
                  fontSize: 17,
                  shadowColor: "#3E3E3E"
                }}
              >
                Buat Rapat
              </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Meeting;


// shadowColor: "#000",
// shadowOffset: {
// 	width: 0,
// 	height: 7,
// },
// shadowOpacity: 0.43,
// shadowRadius: 9.51,

// elevation: 15,