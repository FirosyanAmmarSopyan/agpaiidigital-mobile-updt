import React, { useState } from "react";
import { View, Picker, StyleSheet } from "react-native";
import { Button } from "react-native-elements";
import {
  Icon,
  Heading,
  StatusBar,
  Input,
  Select,
  CheckIcon,
  IconButton,
  Text,
  FormControl,
} from "native-base";
import { Entypo, Ionicons , FontAwesome5 } from "@expo/vector-icons";

function Header({ navigation }) {
    return (
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          paddingVertical: 10,
          backgroundColor: "white",
          elevation: 5,
        }}
      >
        <View>
          <Button
            title="Batal"
            buttonStyle={{
              backgroundColor: "#009788",
              borderRadius: 30,
              height: 30,
              marginLeft:10
            }}
            onPress={() => navigation.navigate('home')}
            containerStyle={{
              width: 80,
            }}
            titleStyle={{ marginTop: -3, fontSize: 15 }}
          />
        </View>
        <View style={{ alignSelf: "center", marginLeft: -40 }}>
          <Heading bold size="md">
            Gabung Rapat
          </Heading>
        </View>
        <View></View>
      </View>
    );
  }

  const JoinMeeting = ({navigation}) => {
    const [selectedValue, setSelectedValue] = React.useState("");
    const [value, setValue] = React.useState("");
    return (
      <View style={{ backgroundColor: "white", height: "100%" }}>
        <StatusBar backgroundColor="white" barStyle="dark-content" />
        <Header />
        <View style={{ backgroundColor: "white" }}>
          <View
            style={{
              width: "95%",
              elevation: 3,
              borderRadius: 20,
              alignSelf: "center",
              marginTop: 30,
              marginBottom: 15,
              backgroundColor: "white",
              padding: 10,
            }}
          >
            <Input
              fontSize="15"
              height={30}
              variant="unstyled"
              placeholder="Masukkan kode rapat"
              placeholderTextColor={"black"}
            />
          </View>
          <View
            style={{
              width: "95%",
              elevation: 3,
              borderRadius: 20,
              alignSelf: "center",
              marginBottom: 15,
              backgroundColor: "white",
              padding: 10,
            }}
          >
            <Input
              fontSize="15"
              height={30}
              variant="unstyled"
              placeholder="Nama anda"
              placeholderTextColor={"black"}
            />
          </View>      
          <View>
         <Button
          title="Gabung Rapat"
          buttonStyle={{
            backgroundColor: "#009788",
            height: 50,
            marginLeft:10,

          }}
          containerStyle={{
            width: "90%",
            alignSelf: "center",
          }}
          titleStyle={{ marginTop: -3, fontSize: 18 ,color: "white"}}
        /> 
        </View>   
        </View>
      </View>
    );
  };
  
  export default JoinMeeting;
  