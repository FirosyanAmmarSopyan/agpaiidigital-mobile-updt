import React from "react";
import { View, Text } from "react-native";
import { IconButton, Icon, Heading, Button, StatusBar } from "native-base";
import { AntDesign } from "@expo/vector-icons";

const HeaderMakePost = () => {
  return (
    <View>
        <StatusBar/>
      <View style={{ flexDirection: "row",justifyContent:"space-between" }}>
        <View>
          <IconButton
            style={{ alignSelf: "center" }}
            icon={<Icon as={AntDesign} name="arrowleft" />}
          />
        </View>

        <View style={{ alignSelf: "center" }}>
          <Heading size="lg">Buat Postingan</Heading>
        </View>
        <View style={{alignSelf:"center"}}>
          <Button small style={{borderRadius:20,width:70,backgroundColor:"#009788"}} >
            <Text style={{color:"white"}}>Posting</Text>
          </Button>
        </View>
      </View>
    </View>
  );
};

export default HeaderMakePost;
