import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  TextInput,
  Alert,
  KeyboardAvoidingView,
  Keyboard,
  Platform,
  Dimensions
} from "react-native";
import { IconButton, Icon, Avatar, Box , TextArea , Button } from "native-base";
import {
  AntDesign,
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import HeaderMakePost from "../components/HeaderMakePost";
import hisyam from "../assets/hisyam.jpeg";
import IconKomentar from "../assets/icon-komentar.svg";
import { SvgXml } from "react-native-svg";



const PaketSoalKomentarKosong = () => {
  return (
    <View style={{ flex: 1 }}>
      <View
        style={{ flexDirection: "column", flex: 1,backgroundColor:"white" }}
      >
        <SvgXml
          style={{ alignSelf: "center", marginTop: "50%" }}
          xml={IconKomentar}
          width="50%"
        />
        <Text
          style={{
            alignSelf: "center",
            fontWeight: "bold",
            fontSize: 20,
            maxWidth: "70%",
            textAlign: "center",
          }}
        >
          belum ada yang berkomentar disini.
        </Text>
      </View>
      <View
          style={{flexDirection: "row", backgroundColor: "white" , borderTopWidth:1,borderTopColor:"#efefef" }}
        >
          <TextArea
            h={10}
            width="75%"
            variant="unstyled"
            placeholder="Tulis Komentar"
            placeholderTextColor="black"
            fontSize="15"
          />
          <Button
            style={{
              width: 70,
              marginHorizontal: 10,
              height: 30,
              marginTop: 5,
              backgroundColor: "#009788",
            }}
          >
            Kirim
          </Button>
        </View>
    </View>
  );
};

export default PaketSoalKomentarKosong;
