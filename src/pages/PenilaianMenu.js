import React from "react";
import { View, StatusBar, TouchableOpacity } from "react-native";
import { SvgXml } from "react-native-svg";
import { Heading, IconButton, Icon, Text } from "native-base";
import { Ionicons } from "@expo/vector-icons";
import MoneyBag1 from "./../assets/money-bag1.svg";
import StudyIcon1 from "./../assets/study-icon1.svg";
import Assignment1 from "./../assets/assignment1.svg";
import Homework1 from "./../assets/homework1.svg";
import LogoPremi from "./../assets/logo-premi.svg";
import Premium1 from "./../assets/premium1.svg";

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

      <View style={{ alignSelf: "center" }}>
        <Text fontSize="22">Menu lainnya</Text>
      </View>
      <View></View>
    </View>
  );
}

const PenilaianMenu = () => {
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
              <SvgXml style={{ alignSelf: "center" }} xml={MoneyBag1} />
              <Heading style={{ alignSelf: "center" }} size="md" mt="3">
                Penghasilan
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
              <SvgXml style={{ alignSelf: "center" }} xml={StudyIcon1} />
              <Heading style={{ alignSelf: "center" }} size="md" mt="3">
                Kelas
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
              <SvgXml style={{ alignSelf: "center" }} xml={Assignment1} />
              <Heading style={{ alignSelf: "center" }} size="md" mt="3">
                Butir Soal
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
              <SvgXml style={{ alignSelf: "center" }} xml={Homework1} />
              <Heading style={{ alignSelf: "center" }} size="md" mt="3">
                Paket Soal
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
              <SvgXml style={{ alignSelf: "center" }} xml={Premium1} />
              <Heading style={{ alignSelf: "center" }} size="md" mt="3">
                Item Premium
              </Heading>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default PenilaianMenu;
