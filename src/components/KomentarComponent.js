import React from "react";
import { View, TouchableOpacity } from "react-native";
import {
  Text,
  Avatar,
  Heading,
  Icon,
  IconButton,
  StatusBar,
  Divider,
} from "native-base";
import { Button } from "react-native-elements";
import { Entypo, Feather } from "@expo/vector-icons";

const KomentarComponent = () => {
  return (
    <View>
      <StatusBar />
      <View style={{ marginTop: 15, marginLeft: 10, flexDirection: "row" }}>
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
              Karto,S.Pd.I
            </Heading>
          </View>
          <Heading bold style={{ color: "#586369", marginTop: 2 }} size="sm">
            Guru TK Kandangan
          </Heading>
          <View style={{ marginTop: 5, maxWidth: "93%" }}>
            <Text>
              is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book.
            </Text>
            <View style={{ flexDirection: "row", marginTop: 7 }}>
              <View style={{ flexDirection: "row", alignSelf: "center" }}>
                <TouchableOpacity>
                  <Icon
                    as={Feather}
                    name="heart"
                    size="xs"
                    style={{ color: "#586369" }}
                  ></Icon>
                </TouchableOpacity>

                <Text style={{ marginLeft: 5, fontSize: 18 , color:"#586369" }}>1</Text>
              </View>
              <View style={{ alignSelf: "center" }}>
              <Button
              containerStyle={{
                width: 50,
                marginLeft: 30,
              
              }}
              title="balas"
              type="clear"
              semibold
              titleStyle={{ color: "#586369",fontSize:15 }}
            />
              </View>
              <View style={{ alignSelf: "center", marginLeft: 120 }}>
                <Heading size="xs" color="#586369">3 menit</Heading>
              </View>
            </View>
            <View >
            <Button
              containerStyle={{
                width: 100,
                marginLeft:-10
              }}
              title="Lihat balasan"
              type="clear"
              titleStyle={{ color: "#009788",fontSize:15 }}
            />
            </View>
          </View>
        </View>
      </View>
      <Divider/>
    </View>
  );
};

export default KomentarComponent;
