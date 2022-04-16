import React from "react";
import { View, Text, Dimensions, TouchableOpacity } from "react-native";
import Header from "../components/HeaderRapat";
import { SvgXml } from "react-native-svg";
import logoBuat from "../assets/BuatRapat.svg";
import { Icon, IconButton , Input } from "native-base";
import { MaterialIcons, Feather, MaterialCommunityIcons } from "@expo/vector-icons";
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
            marginTop: 39,
            height: 455,
            borderTopLeftRadius: 30,
            borderTopRightRadius: 20,
          }}
        >
          <Input
          leftElement={<Icon marginLeft={2} size={7} as={MaterialIcons} name="search" color="#3E3E3E" />}
          variant="outlined"
          alignSelf={"center"}
          h="10"
          marginTop={15}
          borderRadius={20}
          fontWeight={"bold"}
          fontSize={15}
          color={"#3E3E3E"}
          w="330"
            backgroundColor={'white'}
            placeholder="Cari Rapat"
            placeholderTextColor="#3E3E3E"
          />
          <View
            style={{
              backgroundColor: "#FFFFFF",
              marginTop: 10,
              width: windowWidth,
              height: 415,
              borderTopLeftRadius: 30,
            }}
          >
        <TouchableOpacity>
          <View style={{flexDirection: "row" , marginTop: 46 , marginLeft: 17}}>
            <View style={{width: 56 , height: 56 , backgroundColor: "#F5F5F5" , borderRadius: 15}}>
              <View style={{backgroundColor: "#009788" , width: 47 , height: 47 , alignSelf: "center" , marginTop: 4 , borderRadius: 1000 }}>
                  <Icon as={Feather} name="video" color="white" size={6} style={{margin: 12}} />
              </View>
            </View>
            <Text style={{fontSize: 20 , textAlignVertical: "center" , marginLeft: 15 , fontWeight: "bold"}}>Buat Rapat</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View style={{flexDirection: "row" ,marginTop: 20 , marginLeft: 17}}>
            <View style={{width: 56 , height: 56 , backgroundColor: "#F5F5F5" , borderRadius: 15}}>
              <View style={{backgroundColor: "#009788" , width: 47 , height: 47 , alignSelf: "center" , marginTop: 4 , borderRadius: 1000 }}>
                  <Icon as={Feather} name="users" color="white" size={6} style={{margin: 12}} />
              </View>
            </View>
            <Text style={{fontSize: 20 , textAlignVertical: "center" , marginLeft: 15 , fontWeight: "bold"}}>Gabung Rapat</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View style={{flexDirection: "row" ,marginTop: 20 , marginLeft: 17}}>
            <View style={{width: 56 , height: 56 , backgroundColor: "#F5F5F5" , borderRadius: 15}}>
              <View style={{backgroundColor: "#009788" , width: 47 , height: 47 , alignSelf: "center" , marginTop: 4 , borderRadius: 1000 }}>
                  <Icon as={MaterialCommunityIcons} name="calendar-clock" color="white" size={6} style={{margin: 12}} />
              </View>
            </View>
            <Text style={{fontSize: 20 , textAlignVertical: "center" , marginLeft: 15 , fontWeight: "bold"}}>Jadwal Rapat</Text>
          </View>
        </TouchableOpacity>
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