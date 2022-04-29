import React from "react";
import { View, StatusBar, TouchableOpacity } from "react-native";
import { Text, IconButton, Icon, Heading, ScrollView } from "native-base";
import { Ionicons , AntDesign } from "@expo/vector-icons";

function Header() {
  return (
    <View flexDirection="row" style={{backgroundColor:"white"}}>
      <IconButton
        style={{ width: "17%" }}
        icon={<Icon size="7" as={Ionicons} name="ios-arrow-back" />}
        borderRadius="full"
        _icon={{
          color: "black",
          size: "md",
        }}
      />
      <Text style={{ alignSelf: "center" }} fontSize="22">
        Buat Acara
      </Text>
    </View>
  );
}

const OpsiBuatAcara = () => {
  return (
    <View style={{backgroundColor:"#FCFCFC",height:"100%"}}>
      <Header />
      <TouchableOpacity style={{alignSelf:'center',marginVertical:15}}>
        <View
          style={{
            padding: 10,
            backgroundColor: "white",
            maxWidth: "75%",
            borderRadius: 10,
            elevation:1
          }}
        >
          <Heading style={{marginVertical:5}} size="md">Online</Heading>
          <View flexDirection="row" style={{justifyContent:"space-between"}}>
            <Text style={{maxWidth:"80%"}}>
              Buat kegiatan anda secara online dengan menggunakan layanan
              meeting kami
            </Text>
            <Icon name="arrowright" as={AntDesign} color="#009788" />
          </View>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={{alignSelf:'center',marginVertical:15}}>
        <View
          style={{
            padding: 10,
            backgroundColor: "white",
            maxWidth: "75%",
            borderRadius: 10,
            elevation:1
          }}
        >
          <Heading style={{marginVertical:5}} size="md">Offline</Heading>
          <View flexDirection="row" style={{justifyContent:"space-between"}}>
            <Text style={{maxWidth:"80%"}}>
            Buat kegiatan secara langsung dengan bertemu di tempat yang sudah di tetapkan
            </Text>
            <Icon name="arrowright" as={AntDesign} color="#009788" />
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default OpsiBuatAcara;
