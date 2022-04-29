import React from "react";
import { View, StatusBar, TouchableOpacity } from "react-native";
import { Text, IconButton, Icon, Heading, ScrollView } from "native-base";
import { EvilIcons, Ionicons } from "@expo/vector-icons";
import IsiAcara from "../components/IsiAcara";

function Header() {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <View flexDirection="row">
        <IconButton
          style={{ width: "25%" }}
          icon={<Icon size="7" as={Ionicons} name="ios-arrow-back" />}
          borderRadius="full"
          _icon={{
            color: "black",
            size: "md",
          }}
        />
        <Text style={{ alignSelf: "center" }} fontSize="22">
          Acara lainnya
        </Text>
      </View>
      <View>
        <IconButton
          style={{ width: "100%" }}
          icon={<Icon size="7" as={EvilIcons} name="search" />}
          borderRadius="full"
          _icon={{
            color: "black",
            size: "md",
          }}
        />
      </View>
    </View>
  );
}

const AcaraLainnya = () => {
  return (
    <View style={{backgroundColor:"white",height:"100%"}}>
      <Header />
      <View style={{ marginHorizontal: 10, marginTop: 15 }}>
        <Heading style={{marginVertical:10}} bold size="md">
          Direkomendasikan untuk anda
        </Heading>
        <ScrollView>
          <View>
            <IsiAcara/>
            <IsiAcara/>
            <IsiAcara/>
            <IsiAcara/>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default AcaraLainnya;
