import React from "react";
import { View } from "react-native";
import { AntDesign, Entypo } from "@expo/vector-icons";
import {Text, Heading} from 'native-base'
import { SvgXml } from "react-native-svg";
import CheckIcon from "../assets/check-icon1.svg";

const IndikatorButirSoal = () => {
  return (
    <View
      style={{
        backgroundColor: "white",
        borderRadius: 5,
        width: "90%",
        alignSelf: "center",
        elevation: 5,
        paddingVertical: 15,
      }}
    >
      <View flexDirection="row">
        <SvgXml style={{alignSelf:"center"}} xml={CheckIcon} width="10%" />
        <Heading size="sm" bold style={{alignSelf:"center",marginLeft:10}}>Indikator</Heading>
      </View>
      <View style={{marginLeft:20,marginTop:15,maxWidth:"90%"}}>
          <Text style={{fontSize:17,marginVertical:10}}>
              3.1.1 Menyebutkan huruf-huruf hijaiyyah dengan benar
          </Text>
          <Text style={{fontSize:17,marginVertical:10}}>
          3.1.2 Menunjukkan huruf-huruf hijaiyyah dengan benar
          </Text>
          <Text style={{fontSize:17,marginVertical:10}}>
          3.1.3 Menunjukkan huruf-huruf hijaiyyah berharakat dengan benar
          </Text>
      </View>
    </View>
  );
};

export default IndikatorButirSoal;
