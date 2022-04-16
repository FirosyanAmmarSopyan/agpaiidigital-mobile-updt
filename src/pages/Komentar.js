import React from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import {
  Avatar,
  Text,
  Heading,
  Image,
  Divider,
  TouchableOpacity,
  Icon,
  StatusBar,
  ScrollView,
  Input,
  Button,
  TextArea,
  KeyboardAvoidingView,
} from "native-base";
import { FontAwesome5 } from "@expo/vector-icons";
import hisyam from "../assets/hisyam.jpeg";
import Modall from "../components/Modal";
import KomentarComponent from "../components/KomentarComponent";

const windowHeight = Dimensions.get("window").height;
const windowWidth = Dimensions.get("window").width;
const coljabatans = 290;
const coldesk = 290;

const Komentar = () => {
  return (
    <View style={{ backgroundColor: "white" }}>
      <StatusBar />
      <View style={{ backgroundColor: "white" }}>
        <ScrollView>
          <View
            style={{
              marginTop: 15,
              marginLeft: 10,
              flexDirection: "row",
              backgroundColor: "white",
            }}
          >
            <Avatar
              size="10"
              source={{
                uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
              }}
            ></Avatar>
            <View style={{ marginLeft: 10 }}>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  width: 280,
                }}
              >
                <Heading size="md" bold>
                  Pupu,S.Pd.I
                </Heading>
                <Text style={{ alignSelf: "flex-end" }}>21 menit</Text>
              </View>
              <Heading
                bold
                style={{ color: "#586369", marginTop: 2 }}
                size="sm"
              >
                Guru TK Kandangan
              </Heading>
              <View style={{ marginTop: 5, maxWidth: "93%" }}>
                <Text>
                  is simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum has been the industry's standard dummy text ever
                  since the 1500s, when an unknown printer took a galley of type
                  and scrambled it to make a type specimen book.
                </Text>
              </View>
            </View>
          </View>
          <Divider mt="2" />
          <KomentarComponent />
          <KomentarComponent />
          <KomentarComponent />
        </ScrollView>
      </View>
      <View>
        <View
          flex={1}
          style={{flexDirection: "row", backgroundColor: "white" }}
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
    </View>
  );
};

export default Komentar;
