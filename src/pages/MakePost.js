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
} from "react-native";
import { IconButton, Icon, Avatar,Box } from "native-base";
import { AntDesign, Ionicons, MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import HeaderMakePost from "../components/HeaderMakePost";
import hisyam from "../assets/hisyam.jpeg";

const MakePost = () => {
  return (
    <View style={{flex:1,}}>
      <HeaderMakePost />
      <View style={{ marginLeft: 7, flexDirection: "row",flex:1,marginTop: 7, }}>
        <Avatar size={8} source={hisyam}></Avatar>
        <View style={{ width: "87%" }}>
          <TextInput
            placeholder="Apa yang sedang dipikirkan?"
            placeholderTextColor={"black"}
            multiline
            style={{
              marginLeft: 10,
            }}
          />
        </View>
      </View>
      <Box   style={{flexDirection:"row",borderWidth:1,borderTopColor:"silver"}}>
            <View style={{marginHorizontal:7}}>
            <IconButton
            icon={<Icon size="sm" as={Ionicons} color="#009788"  name="ios-image-outline" />}
          />
            </View>
            <View style={{marginHorizontal:7}}>
            <IconButton
            icon={<Icon size="sm" as={AntDesign} color="#009788"  name="filetext1" />}
          />
            </View>
            <View style={{marginHorizontal:7}}>
            <IconButton
            icon={<Icon size="sm" as={AntDesign} color="#009788"  name="videocamera" />}
          />
            </View>
            <View >
            <IconButton
            icon={<Icon size="sm" as={AntDesign} color="#009788"  name="calendar" />}
          />
            </View>
      </Box>
    </View>
  );
};

export default MakePost;
