import React from "react";
import { View, Text } from "react-native";
import { Avatar, Heading, Icon } from "native-base";
import { Button } from "react-native-elements";
import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";

const IsiListRapat = () => {
  return (
    <View>
      <View style={{ flexDirection: "row" }}>
        <Avatar
          bg="transparent"
          style={{ marginTop: 20 }}
          source={{
            uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
          }}
        ></Avatar>
        <View style={{ marginLeft: 20, marginTop: 7 }}>
          <Heading bold>Rapat pembubaran tim AGPAII</Heading>
          <Text style={{ color: "#586369", marginVertical: 3, fontSize: 17 }}>
            Diningrat, S.Pd.I
          </Text>
          <View style={{flexDirection:"row"}}>
            <Icon
              size={15}
              as={MaterialCommunityIcons}
              name="clock"
              color="#586369"
            />
            <Text style={{fontSize:12,marginLeft:5,color:"#586369"}}>
                2 Februari 2022, 14.00
            </Text>
          </View>
          <Button
          title={"PILIH"}
          titleStyle={{ fontSize: 15, color: "white" }}
          buttonStyle={{
            width: "100%",
            height: 38,
            marginTop:10,
            backgroundColor: "#009788",
            borderRadius: 20,
          }}
        />
        </View>
      </View>
    </View>
  );
};

export default IsiListRapat;
