import React from "react";
import { View, StatusBar, TouchableOpacity } from "react-native";
import { SvgXml } from "react-native-svg";
import { Heading, IconButton, Icon, Text } from "native-base";
import { Ionicons } from "@expo/vector-icons";
import AbsentColor from "./../assets/absent-color.svg";
import CalendarColor from "./../assets/calendar-color.svg";
import HeartLinear from "./../assets/heart-linear.svg";
import ScheduleColor from "./../assets/schedule-color.svg";


function Header() {
    return (
      <View
        style={{
          flexDirection: "row",
          backgroundColor: "white",
          justifyContent: "space-between",
        }}
      >
        <View>
          <IconButton
            style={{ width: "12%" }}
            icon={<Icon size="7" as={Ionicons} name="ios-arrow-back" />}
            borderRadius="full"
            _icon={{
              color: "black",
              size: "md",
            }}
          />
        </View>
  
        <View style={{ alignSelf: "center",marginLeft:-20 }}>
          <Text fontSize="22">Menu lainnya</Text>
        </View>
        <View></View>
      </View>
    );
  }


const MenuLainnya = () => {
    return (
        <View>
        <StatusBar />
        <Header />
        <View
          style={{
            flexDirection: "column",
            backgroundColor: "white",
            height: "100%",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginHorizontal: 10,
              marginVertical: 20,
            }}
          >
            <TouchableOpacity   style={{
                  backgroundColor: "white",
                  elevation: 5,
                  padding: 10,
                  borderRadius: 10,
                  width: "45%",
                  height: 150,
                  paddingTop: 20,
                }}>
              <View
              
              >
                <SvgXml style={{ alignSelf: "center" }} xml={CalendarColor} />
                <Heading bold style={{ alignSelf: "center" }} size="md" mt="3">
                  Acara Saya
                </Heading>
              </View>
            </TouchableOpacity>
            <TouchableOpacity   style={{
                  backgroundColor: "white",
                  elevation: 5,
                  padding: 10,
                  borderRadius: 10,
                  width: "45%",
                  height: 150,
                  paddingTop: 20,
                }}>
              <View
              
              >
                <SvgXml style={{ alignSelf: "center" }} xml={HeartLinear} />
                <Heading bold style={{ alignSelf: "center" }} size="md" mt="3">
                  Acara Favorite
                </Heading>
              </View>
            </TouchableOpacity>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginHorizontal: 10,
              marginVertical: 20,
            }}
          >
            <TouchableOpacity   style={{
                  backgroundColor: "white",
                  elevation: 5,
                  padding: 10,
                  borderRadius: 10,
                  width: "45%",
                  height: 150,
                  paddingTop: 20,
                }}>
              <View
              
              >
                <SvgXml style={{ alignSelf: "center" }} xml={ScheduleColor} />
                <Heading bold style={{ alignSelf: "center" }} size="md" mt="3">
                  Acara Terbatas
                </Heading>
              </View>
            </TouchableOpacity>
            <TouchableOpacity   style={{
                  backgroundColor: "white",
                  elevation: 5,
                  padding: 10,
                  borderRadius: 10,
                  width: "45%",
                  height: 150,
                  paddingTop: 20,
                }}>
              <View
              
              >
                <SvgXml style={{ alignSelf: "center" }} xml={AbsentColor} />
                <Heading bold style={{ alignSelf: "center" }} size="md" mt="3">
                  Absen Saya
                </Heading>
              </View>
            </TouchableOpacity>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginHorizontal: 10,
              marginVertical: 20,
            }}
          >
          </View>
        </View>
      </View>
    )
}


export default MenuLainnya;