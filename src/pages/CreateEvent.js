import React, { useState } from "react";
import { Box, IconButton, Icon, StatusBar, HStack, Button } from "native-base";
import {
  View,
  StyleSheet,
  Image,
  ScrollView,
  Dimensions,
  TouchableOpacity,
  Picker,
} from "react-native";
import { SvgXml } from "react-native-svg";
import pensil from "../assets/pensil.svg";
import DescEvent from "../assets/product-desc.svg";
import PinLokasi from "../assets/pin-lokasi.svg";
import IconMeeting from "../assets/icon-rapat.svg";
import Mata from "../assets/mata.svg";
import { Ionicons, Entypo, MaterialIcons } from "@expo/vector-icons";
import { ButtonGroup, withTheme, Text } from "react-native-elements";

const windowWidth = Dimensions.get("window").width;

function Header() {
  return (
    <>
      <StatusBar backgroundColor="grey" barStyle="light-content" />
      <Box safeAreaTop bg="white" />
      <HStack
        bg="white"
        px="1"
        py="1"
        justifyContent="space-between"
        alignItems="center"
        width={windowWidth}
        elevation={3}
      >
        <HStack alignItems="center">
          <IconButton
            icon={<Icon size="7" as={Ionicons} name="ios-arrow-back" />}
          />
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 20,
              color: "#3E3E3E",
              marginHorizontal: 10,
            }}
          >
            Buat acara
          </Text>
        </HStack>
      </HStack>
    </>
  );
}

const CreateEvent = ({ navigatio }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedIndexes, setSelectedIndexes] = useState([0, 2, 3]);
  const [selectedValue, setSelectedValue] = React.useState("00");
  const [value, setValue] = React.useState("00");
  return (
    <View>
      <View>
        <Header />
      </View>
      {/* batas Row */}
      <View style={{ flexDirection: "column" }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 10,
          }}
        >
          <View
            style={{
              borderRadius: 10,
              elevation: 2,
              marginLeft: 10,
            }}
          >
            <Icon
              style={{ margin: 12 }}
              color="#009788"
              as={Ionicons}
              name="ios-image-outline"
              size="6"
            />
          </View>
          <TouchableOpacity>
            <View
              style={{
                paddingVertical: 7,
                alignItems: "center",
                flexDirection: "row",
                justifyContent: "space-between",
                backgroundColor: "#019F8F",
                width: windowWidth - 70,
                borderRadius: 15,
              }}
            >
              <View style={{ width: 30 }}></View>
              <View>
                <Text bold style={{ fontSize: 15, color: "white" }}>
                  Banner
                </Text>
              </View>
              <View>
                <Icon as={Entypo} style={{ color: "white" }} name="plus" />
              </View>
            </View>
          </TouchableOpacity>
        </View>

        {/* BATAS */}

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 10,
          }}
        >
          <View
            style={{
              borderRadius: 10,
              elevation: 2,
              marginLeft: 10,
            }}
          >
            <SvgXml style={{ margin: 7 }} width="35" xml={pensil} />
          </View>
          <TouchableOpacity>
            <View
              style={{
                paddingVertical: 7,
                alignItems: "center",
                flexDirection: "row",
                justifyContent: "space-between",
                backgroundColor: "#019F8F",
                width: windowWidth - 70,
                borderRadius: 15,
              }}
            >
              <View style={{ width: 30 }}></View>
              <View>
                <Text bold style={{ fontSize: 15, color: "white" }}>
                  Nama Acara
                </Text>
              </View>
              <View>
                <Icon as={Entypo} style={{ color: "white" }} name="plus" />
              </View>
            </View>
          </TouchableOpacity>
        </View>

        {/* BATAS */}

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 10,
          }}
        >
          <View
            style={{
              borderRadius: 10,
              elevation: 2,
              marginLeft: 10,
            }}
          >
            <SvgXml style={{ margin: 7 }} width="35" xml={DescEvent} />
          </View>
          <TouchableOpacity>
            <View
              style={{
                paddingVertical: 7,
                alignItems: "center",
                flexDirection: "row",
                justifyContent: "space-between",
                backgroundColor: "#019F8F",
                width: windowWidth - 70,
                borderRadius: 15,
              }}
            >
              <View style={{ width: 30 }}></View>
              <View>
                <Text bold style={{ fontSize: 15, color: "white" }}>
                  Deskripsi Acara
                </Text>
              </View>
              <View>
                <Icon as={Entypo} style={{ color: "white" }} name="plus" />
              </View>
            </View>
          </TouchableOpacity>
        </View>

        {/* BATAS */}

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 10,
          }}
        >
          <View
            style={{
              borderRadius: 10,
              elevation: 2,
              marginLeft: 10,
            }}
          >
            <SvgXml
              style={{ margin: 7, marginTop: 7 }}
              width="35"
              xml={PinLokasi}
            />
          </View>
          <TouchableOpacity>
            <View
              style={{
                paddingVertical: 7,
                alignItems: "center",
                flexDirection: "row",
                justifyContent: "space-between",
                backgroundColor: "#019F8F",
                width: windowWidth - 70,
                borderRadius: 15,
              }}
            >
              <View style={{ width: 30 }}></View>
              <View>
                <Text bold style={{ fontSize: 15, color: "white" }}>
                  Lokasi Acara
                </Text>
              </View>
              <View>
                <Icon as={Entypo} style={{ color: "white" }} name="plus" />
              </View>
            </View>
          </TouchableOpacity>
        </View>

        {/* BATAS */}

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 10,
          }}
        >
          <View
            style={{
              borderRadius: 10,
              elevation: 2,
              marginLeft: 10,
            }}
          >
            <SvgXml
              style={{ margin: 7, marginTop: 7 }}
              width="35"
              xml={IconMeeting}
            />
          </View>
          <TouchableOpacity>
            <View
              style={{
                paddingVertical: 7,
                alignItems: "center",
                flexDirection: "row",
                justifyContent: "space-between",
                backgroundColor: "#019F8F",
                width: windowWidth - 70,
                borderRadius: 15,
              }}
            >
              <View style={{ width: 30 }}></View>
              <View>
                <Text bold style={{ fontSize: 15, color: "white" }}>
                  Tambah Rapat AGPAII
                </Text>
              </View>
              <View>
                <Icon as={Entypo} style={{ color: "white" }} name="plus" />
              </View>
            </View>
          </TouchableOpacity>
        </View>

        {/* BATAS */}

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 10,
          }}
        >
          <View
            style={{
              borderRadius: 10,
              elevation: 2,
              marginLeft: 10,
            }}
          >
            <SvgXml
              style={{ margin: 7, marginTop: 12 }}
              width="35"
              xml={Mata}
            />
          </View>
          <TouchableOpacity>
            <View
              style={{
                paddingVertical: 7,
                alignItems: "center",
                flexDirection: "column",
                justifyContent: "flex-end",
                backgroundColor: "#019F8F",
                width: windowWidth - 70,
                borderRadius: 15,
              }}
            >
              <Picker
            selectedValue={selectedValue}
            style={{ height: 30, width: "65%",marginLeft:100,color:"white"}}
            onValueChange={(itemValue) => {
              setValue(itemValue);
            }}
          >
            <Picker.Item
              style={{ fontWeight: "bold" }}
              label="Publik"
              bold
              value="Acara akan terlihat untuk semua pengguna AGPAII."
            />
            <Picker.Item
              style={{ fontWeight: "bold" }}
              label="Diundang"
              value="Acara akan terlihat untuk orang yang anda undang"
            />
          </Picker>
            </View>
          </TouchableOpacity>
        </View>
        <View>
        <Text style={{ marginLeft: 90,color:"grey" }}>*{value}</Text>
        </View>
      </View>
    </View>
  );
};

export default CreateEvent;
