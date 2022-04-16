import React from "react";
import { View, Text, Dimensions, TouchableOpacity } from "react-native";
import Header from "../components/HeaderRapat";
import { SvgXml } from "react-native-svg";
import logoBuat from "../assets/BuatRapat.svg";
import { Avatar, Divider, Icon, IconButton , Input, ScrollView , Box , Center } from "native-base";
import { MaterialIcons, Feather, MaterialCommunityIcons, AntDesign, FontAwesome } from "@expo/vector-icons";
import hisyam from "../assets/hisyam.jpeg";
import Meet from "../assets/MakeMeet.svg";
import VirtualScroll from "react-dynamic-virtual-scroll";



function Footer() {
    return <>
        <Box flex={1} bg="transparent" safeAreaTop alignSelf="center" zIndex="1" position= 'absolute' left= '0' right= '0' bottom= '0' top="359">
          <Center flex={1}></Center>
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
        </Box>
        </>;
  }


const windowWidth = Dimensions.get("window").width;
const MeetingIsi = () => {
  return (
      <View>
      <Header />
        <VirtualScroll
    minItemHeight={40}
    totalLength={100}
    renderItem={(rowIndex) => {
        return (
            <View>
              <Text style={{fontSize: 17 , fontWeight: "bold" , color: "#3E3E3E" , marginLeft: 8 , marginTop: 10}}>
                  Rapat Tertunda
              </Text>
        <View style={{flexDirection: "row" , marginLeft: 18 , marginTop: 22}}>
                <Avatar source={hisyam}/>
            <View style={{flexDirection: "column" , marginLeft: 10}}>
                <Text style={{fontSize: 23 , fontWeight: "bold" , width: 287 }}>Pengurus DPD Agpaii Kab. Pluto</Text>
                <Text style={{color: "#586369" , fontSize: 15 , fontWeight: "bold"}}>Bambang, S.pd.I</Text>
                <View style={{flexDirection: "row" , marginTop: 5}}>
                <Icon as={AntDesign} size="5" color="#586369" name="clockcircle"/>
                    <Text style={{textAlignVertical: "center" , color: "#586369" , marginLeft: 7}}>22 Januari 3033, 25.70</Text>
                </View>
            </View>
        </View>
        <Divider height="0.5" mt="15"/>

              <Text style={{fontSize: 17 , fontWeight: "bold" , color: "#3E3E3E" , marginLeft: 8 , marginTop: 10}}>
                  Riwayat
              </Text>
        <View style={{flexDirection: "row" , marginLeft: 18 , marginTop: 22}}>
                <Avatar source={hisyam}/>
            <View style={{flexDirection: "column" , marginLeft: 10}}>
                <Text style={{fontSize: 23 , fontWeight: "bold" , width: 287 }}>Pengurus DPD Agpaii Kab. Pluto</Text>
                <Text style={{color: "#586369" , fontSize: 15 , fontWeight: "bold"}}>Bambang, S.pd.I</Text>
                <View style={{flexDirection: "row" , marginTop: 5}}>
                <Icon alignSelf="center" as={FontAwesome} size="4" color="#586369" name="users"/>
                    <Text style={{textAlignVertical: "center" , color: "#586369" , marginLeft: 4}}>22</Text>
                    <Text style={{textAlignVertical: "center" , color: "#586369" , marginLeft: 10}}>22 Januari 3033, 25.70</Text>
                </View>
            </View>
        </View>
        <Divider height="0.5" mt="15"/> 
        </View>
        );
    }}
/>
      <Footer/>
    </View>
);
};

export default MeetingIsi;


// shadowColor: "#000",
// shadowOffset: {
// 	width: 0,
// 	height: 7,
// },
// shadowOpacity: 0.43,
// shadowRadius: 9.51,

// elevation: 15,