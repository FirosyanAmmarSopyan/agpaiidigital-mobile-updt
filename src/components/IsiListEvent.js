import React from "react";
import { View, Text } from "react-native";
import { Avatar, Heading, Icon , Divider } from "native-base";
import { Button } from "react-native-elements";
import { AntDesign, MaterialCommunityIcons, FontAwesome , EvilIcons , Ionicons } from "@expo/vector-icons";

const IsiListEvent = () => {
  return (
    <View>
      <View style={{ flexDirection: "row" }}>
          <View style={{marginTop:12,borderRadius:100,backgroundColor:"#009788",width:50,height:50}}>
          <Icon style={{alignSelf:"center",marginTop:12,marginLeft:2}} size="sm" as={FontAwesome} name="calendar-check-o" color="white" />
          </View>
        <View style={{ marginLeft: 20, marginTop: 7 }}>
          <Heading bold>Rapat KKG PAI Kec.CIMARGA</Heading>
          <Text style={{ color: "#586369", marginVertical: 3, fontSize: 17 }}>
            1 Mar 2022 08.00
          </Text>
          <View style={{ flexDirection: "row" }}>
            <Icon
              size={15}
              as={Ionicons}
              name="md-location-outline"
              color="#009788"
            />
            <Text style={{ fontSize: 14, marginLeft: 5, color: "#586369" }}>
              Cimahi
            </Text>
          </View>
          <Button
            title={"PILIH"}
            titleStyle={{ fontSize: 15, color: "white" }}
            buttonStyle={{
              width: "100%",
              height: 38,
              marginTop: 10,
              backgroundColor: "#009788",
              borderRadius: 20,
            }}
          />
        </View>
      </View>
      <Divider style={{marginTop:10,width:"100%"}}></Divider>
    </View>
  );
};

export default IsiListEvent;
