import React from "react";
import { View, Text, TouchableOpacity, Dimensions } from "react-native";
import { LinearGradient, SvgXml } from "react-native-svg";
import logo from "../assets/VeectorAcara.svg";
import {
  Icon,
  IconButton,
  StatusBar,
  Fab,
  ScrollView,
  Heading,
} from "native-base";
import { MaterialIcons, Feather, AntDesign, Entypo } from "@expo/vector-icons";
import { Button } from "react-native-elements";
import logo2 from "../assets/VectorJadwal.svg";
import IsiAcara from "../components/IsiAcara";

const windowHeight = Dimensions.get("window").height;
const HomeEvent = () => {
  return (
    <View style={{ backgroundColor: "white", height: windowHeight }}>
      <StatusBar backgroundColor="grey" barStyle="light-content" />
      <View>
        <TouchableOpacity>
          <Icon
            style={{ alignItems: "center" }}
            size="7"
            mt={11}
            ml={11}
            as={Feather}
            name="arrow-left"
          />
        </TouchableOpacity>
        <SvgXml
          style={{ position: "absolute", zIndex: -100 }}
          xml={logo}
          width="100%"
        />
      </View>

      <View style={{ alignSelf: "center", marginTop: 110 }}>
        <Text style={{ alignSelf: "center", fontWeight: "bold", fontSize: 30 }}>
          Acara AGPAII
        </Text>
        <View style={{ flexDirection: "row", marginTop: 10 }}>
          <Button
            title={"Acara Lainnya"}
            titleStyle={{ fontSize: 15, color: "white" }}
            buttonStyle={{
              width: 132,
              height: 38,
              backgroundColor: "#009788",
              borderRadius: 10,
            }}
          />
          <Button
            title={"Menu"}
            titleStyle={{ fontSize: 15, color: "#009788" }}
            buttonStyle={{
              marginLeft: 9,
              width: 132,
              borderRadius: 10,
              height: 38,
              borderColor: "#009788",
              borderWidth: 1,
              backgroundColor: "transparent",
            }}
          />
        </View>
      </View>
      <View style={{ marginVertical: 20, justifyContent: "space-between" , flexDirection:"row"}}>
        <Heading style={{alignSelf:"center"}} marginLeft="3" size="md">
          Acara Saya
        </Heading>
        <Button
          containerStyle={{
            width: 130,
          }}
          title="Lihat semua"
          type="clear"
          titleStyle={{ color: "#009788",fontSize:15 }}
        />
      </View>
      <ScrollView>
        <View>
          <IsiAcara/>
          <IsiAcara/>
          <IsiAcara/>
          <IsiAcara/>
        </View>
      </ScrollView>
    </View>
  );
};

export default HomeEvent;
