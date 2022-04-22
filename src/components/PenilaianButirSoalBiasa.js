import React from "react";
import { View, TouchableOpacity } from "react-native";
import { Button, Text, Avatar, Heading } from "native-base";
import { SvgXml } from "react-native-svg";
import LogoPremi from "../assets/logo-premi.svg";

const PenilaianButirSoalBiasa = () => {
  return (
    <View>
      <TouchableOpacity>
        <View
          style={{
            backgroundColor: "white",
            width: "95%",
            alignSelf: "center",
            borderRadius: 10,
            elevation: 5,
            marginVertical:10
          }}
        >
          <View
            style={{
              flexDirection: "row",
              marginHorizontal: 10,
              marginVertical: 15,
            }}
          >
            <Avatar
              bg="transparent"
              source={{
                uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
              }}
            ></Avatar>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignSelf: "center",
                marginLeft: 10,
                width: "80%",
              }}
            >
              <View style={{ flexDirection: "column" }}>
                <Heading size="md" bold>
                  Sulimin,S.Pd.I
                </Heading>
                <Text color="silver">20 September 2020</Text>

                <View style={{ marginTop: 20 }}>
                  <Heading bold size="md">
                    Soal akidah dan akhlak
                  </Heading>
                  <Text style={{ fontSize: 17, color: "silver" }}>
                    Sopan santun terhadap orang tua
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <View style={{
                backgroundColor: "#009788",
                borderBottomStartRadius:10,
                borderBottomEndRadius:10,
              }}>
            <View
              style={{
             
                justifyContent: "space-between",
                flexDirection: "row",
                width: "90%",
                alignSelf: "center",
                marginVertical: 3,
              }}
            >
              <Text style={{color:"white"}}>Pilihan ganda</Text>
              <Text style={{color:"white"}}>6 SD</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default PenilaianButirSoalBiasa;
